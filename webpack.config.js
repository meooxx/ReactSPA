const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
		
  },
	
  entry:{
		index:[ 'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx')],
		
		
		
	}, 
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, 
				// ȥ�� ����babel-plugin-import
			//include: path.resolve(__dirname, 'app'),
			
			loaders:
				[
					'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
				]
				
			},
				
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
			
			{
				test:/\.(jpeg|png|jpg|gif)$/,
				loader:"url-loader?limit=8192"},
				
			//����
			{
          // ר��iconfont����ʹ�õģ�������һ��ʱ�������Ҫ�ر�ƥ�䵽
          test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=8192&name=[path][name].[ext]'
        }
    ]
		/* postcss() {
			return [
				require('precss'),
				require('autoprefixer')
			];
		} */
  },
	
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
};
