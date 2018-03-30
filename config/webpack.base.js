console.log(process.env.NODE_ENV)
let path=require("path")
let dir=process.cwd()
let baseConfig={//抛出一个模块commonjs
    entry:{//定义入口文件
        "bundle":dir+"/src/main.js"//__dirname:找的是绝对路径；
    },
    output:{//输出文件
        "filename":"sdist.js",//输出的js文件名字，，
        "path":dir+"/dist"//输出js文件的所在路径
    },
    module:{//需要打包的module
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:["babel-loader"]
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                use:["url-loader"]
            },
            {
                test:/\.(jpg|gif|png|jpeg)$/,
                use:["url-loader"]
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports=baseConfig

//module.exports=config