const {resolve}=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               exclude:/node_modules/,
               loader:'eslint-loader',
               options:{
                fix:true
               }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}

