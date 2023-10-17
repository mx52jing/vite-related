import path from "node:path";
import autoprefixer from "autoprefixer";
/**
 * @type {import('vite').UserConfig}
 */

const config = {
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            scopeBehaviour: 'local',
            // generateScopedName: "[name]__[local]___[hash:base64]",
            // hashPrefix: 'custom_prefix',
            // globalModulePaths:  null
        },
        preprocessorOptions: {
            scss: {
                //define global scss variable
                additionalData: `@import '@src/variable.scss';`
            }
        },
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer()]
        }
    }
}

export default config;