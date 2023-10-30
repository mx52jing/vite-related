import { build } from 'esbuild'
import envPlugin from "../plugins/envPlugin.js";
import autoGenerateHtmlPlugin from "../plugins/autoGenerateHtmlPlugin.js";

const runBuild = async () => {
    const result = await build({
        bundle: true,
        absWorkingDir: process.cwd(),
        // entryPoints: ['src/test-env-plugin.js'],
        entryPoints: ['src/index.jsx'],
        // entryPoints: [
        //     'src/pages/home/index.js',
        //     'src/pages/foo/index.js',
        // ],
        outdir: "dist",
        // outfile: 'dist/aaa.js',
        metafile: true,
        // outbase: 'aaa',
        // alias: {
        //     'oldPkg': 'newPkg'
        // }
        splitting: true,
        // chunkNames: '[name]/[name].[hash].[ext]',
        // assetNames: 'assets/[dir].[name].[hash].[ext]',
        format: 'esm',
        loader: { '.webp': 'file', '.JPG': "file" },
        banner: {
            js: '/* comment */',
        },
        plugins: [envPlugin, autoGenerateHtmlPlugin()]
    });
    // console.log(result)
}

runBuild();