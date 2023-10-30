import { transform } from "esbuild";

const runTransform = async () => {
    const content = await transform(
        `const delay = (ms: number) => new Promise((resolve) => {
            setTimeout(resolve, ms)
        })`,
        {
            loader: 'ts',
            sourcemap: true
        }
    )
    console.log(content)
}

runTransform()