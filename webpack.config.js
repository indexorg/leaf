const webpack = require('webpack')
const path = require('path')

module.exports = env => {
    return {
        mode: 'development',
        entry: {
            "index": path.resolve(__dirname, './src/exports.js'),
        },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: '[name].js',
            libraryTarget: 'commonjs2',
        },
        externals: {
            react: 'commonjs react',
           'react-dom': 'commonjs react-dom',
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader'
                    },
                },
            ]
        },
        plugins:[
            // new webpack.LoaderOptionsPlugin({
            //     minimize: true,
            //     debug: false
            // }),
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@assets': path.resolve(__dirname, './src/assets'),
                '@components': path.resolve(__dirname, './src/components'),
                '@config': path.resolve(__dirname, './src/config'),
                '@utils': path.resolve(__dirname, './src/utils'),
            }
        },
        
    }
};