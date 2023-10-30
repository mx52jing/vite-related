import * as Esbuild from 'esbuild'
import envPlugin from "../plugins/envPlugin.js";
import autoGenerateHtmlPlugin from "../plugins/autoGenerateHtmlPlugin.js";
const runServer = async () => {
    try {
        const ctx = await Esbuild.context({
            entryPoints: ['src/index.jsx'],
            outdir: 'dist',
            bundle: true,
            loader: {
                '.webp': "file",
                '.JPG': 'file'
            },
            metafile: true,
            plugins: [envPlugin, autoGenerateHtmlPlugin()]
        })
        const serveRes = await ctx.serve({
            servedir: 'dist',
            port: 9527,
        })
        console.log(`HTTP Server starts at port ${serveRes.port}`)
    }catch (e) {
        console.log(e, 'runServer')
    }
}

runServer()