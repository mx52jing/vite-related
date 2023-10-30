const envPlugin = {
    name: 'env-plugin',
    setup(build) {
        build.onResolve({ filter: /^my-env$/ }, args => {
            return {
                path: args.path,
                namespace: 'my-env-namespace'
            }
        })
        build.onLoad({ filter: /.*/, namespace: 'my-env-namespace' }, args => {
            return {
                contents: JSON.stringify({ "name": "222222" }),
                loader: 'json',
            }
        })
    }
}

export default envPlugin;