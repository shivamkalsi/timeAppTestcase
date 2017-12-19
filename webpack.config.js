module.exports={
	entry:'./component/Main.jsx',
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
	resolve:{
		alias:{
			
		},
		extensions:['.js','.jsx'],
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
            { test: /\.css$/, loader: "style!css" }
        ]
    },
}
