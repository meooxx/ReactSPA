const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
		//���·��
    publicPath: './',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, 
			
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
				loader:"url-loader?limit=8192&name=images/[name].[ext]"}, 
				
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
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/main.css', to: 'main.css' }
    ])
  ]
};
