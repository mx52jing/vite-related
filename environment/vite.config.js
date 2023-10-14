import { defineConfig, loadEnv } from "vite";

const config = defineConfig(({ command, mode }) => {
    // const envConfig = loadEnv(mode, process.cwd())
    // console.log(`
    //     command => ${command},
    //     mode => ${mode},
    //     envConfig => ${JSON.stringify(envConfig)}
    // `)
    return {};
})

export default config;