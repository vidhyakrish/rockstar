/**
 * Config for test environment is pretty different from dev and prod, so we don't use common config as base.
 *
 * Karma watches the test entry points, so we don't need to define entry point here.
 */
module.exports = {
     
    devtool: 'inline-source-map',

    verbose: true,

    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.html'],
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
             
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']}
        ],
        postLoaders: [
             
            {
                test: /\.ts$/,
                loader: 'istanbul-instrumenter-loader?embedSource=true&noAutoWrap=true',
                exclude: [
                    'node_modules',
                    /\.(e2e|spec)\.ts$/
                ]
            }
        ]
    },

     
    ts: {
        configFileName: 'tsconfig.test.json'
    }
};
