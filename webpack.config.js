var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    entry : __dirname + '/src/asset/javascript/app.js',
    output: {
        path : __dirname + '/dist/js/',
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less-loader!postcss-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins : [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:1337'
        })
    ],
    devServer : {
        contentBase: "./dist",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 1337
    }
}
        


