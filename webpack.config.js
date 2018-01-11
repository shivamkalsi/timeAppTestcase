var webpack=require('webpack');
var path = require("path");
module.exports={
	entry:['script-loader!jquery/dist/jquery.min.js','style-loader!foundation-sites/dist/css/foundation.min.css','./component/Main.jsx'],
	externals:{
		jquery:'jQuery',
		foundation:'Foundation',
	},
	"browser": {
    "jquery": "./node_modules/jquery/dist/jquery.min.js",
    "foundation": "./node_modules/foundation-sites/dist/foundation.js"
  },
	plugins:[
		new webpack.ProvidePlugin({
		$:'jquery',
		jQuery:'jquery'
		})
		],
	
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
	resolve:{
		alias:{
			
		},
		extensions:['.js','.jsx', '.css'],
	
	},
    module: {
        loaders: [
		{
			test:/\.json$/,
			loader:'json-loader'
		},
		{
			test:/\.js$/,
			exclude:/node-module/,
			loader:'babel-loader',
			query:{
				presets:['react', 'es2015']
			}

		},
		{
			test:/\.jsx$/,
			exclude:/node-module/,
			loader:'babel-loader',
			query:{
				presets:['react', 'es2015']
			}
		},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
      
}
