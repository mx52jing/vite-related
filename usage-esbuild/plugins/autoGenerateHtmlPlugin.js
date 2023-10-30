import path from 'node:path'
import fs from "fs/promises";
const createScript = src => `<script type="module" src="${src}"></script>`;
const createLink = href => `<link rel="stylesheet" href="${href}" />`;

const generateHtml = ({ scripts, links }) => {
    return `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    ${links?.join('\n')}
</head>
<body>
<div class="root"></div>
${scripts?.join('\n')}
</body>
</html>
    `
}

/**
 * 打包结束后自动创建html文件
 * @param options
 * @returns {{name: string, setup(*): void}}
 */
const autoGenerateHtmlPlugin = (options = { outdir: 'dist' }) => {
    return {
        name: 'auto-generate-plugin-html',
        setup(build) {
            build.onEnd(async buildResult => {
                if (buildResult.errors.length) {
                    return;
                }
                const {metafile} = buildResult; // 想获取 metafile，打包配置中必须配置 { metafile: true }
                if (!metafile) return;
                const { outputs} = metafile;
                const { outdir } = options;
                // 输出目录要提取出来
                const outputKeys = Object.keys(outputs).map(i => i.replace(outdir, ''));
                const scripts = [], links = [];
                outputKeys.forEach(item => {
                    if(item.endsWith('.js')) {
                        scripts.push(createScript(item))
                        return;
                    }
                    if(item.endsWith('.css')) {
                        links.push(createLink(item))
                    }
                })
                console.log({ scripts, links, outputKeys })
                const htmlContent = generateHtml({ scripts, links });
                const htmlFilePath = path.join(process.cwd(), outdir, 'index.html')
                await fs.writeFile(htmlFilePath, htmlContent)
            })
        }
    }
}

export default autoGenerateHtmlPlugin