import path from 'node:path'
/**
 * @type {import('vite').UserConfig}
 */

const config = {
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    },
    json: {
        // stringify: true // 禁用json命名导入
    },
    assetsInclude: ['**/*.gltf'], // 扩展支持的静态资源类型
}

export default config;
