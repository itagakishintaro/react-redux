// var ExtractTextPlugin = require( 'extract-text-webpack-plugin' ); // only need raw css
var webpack = require( 'webpack' );

module.exports = {
    entry: './js/main.js',
    output: {
        filename: './bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
          },
            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader!sass-loader' ) // need raw css
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ] // don't need raw css
            }
       ]
    },
    plugins: [
        // new ExtractTextPlugin( 'styles.css' ), // only need raw css
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'production' )
            }
        } )
    ]
};