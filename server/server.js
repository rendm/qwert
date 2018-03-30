const express = require("express")
const bodyParser = require('body-parser')
const jsw=require('jsonwebtoken')
const app = express()
app.use(bodyParser.json())
//设置跨域
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin" , "http://localhost:3000");
    res.header("Access-Control-Allow-Headers" , "Content-Type,Token");
    res.header("Content-Type" , "application/json;charset=utf-8");
    next()
})
//商品列表接口
const options = {
    hostname: 'www.lb717.com',
    port: 80,
    path: '/mall/index/getGoodsChannel',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
};
const http = require('http')
const querystring = require('querystring')
app.post('/mall/index/getGoodsChannel',function(req,res){
    let data='';
    let request = http.request(options,(response) => {
        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            data+=chunk;
        });
        response.on('end', () => {  
            res.end(JSON.stringify(data))
        });
    })
    request.write(querystring.stringify(req.body))
    request.end()
})

var fs = require("fs")
//注册接口register
app.post('/user/register',function(req,res){
    console.log(req.body)//前端输入的username和password
    var user = fs.readFileSync('server/user.json',{encoding:"utf-8"});//读取文件
    console.log(user)
    user=JSON.parse(user)
    //JSON.parse(user).push(req.body)
    user.push(req.body) 
    fs.writeFile('server/user.json',JSON.stringify(user),function(){
        res.end(JSON.stringify({
            success:1
        }))
    })
})
//登录接口login
app.post('/user/login',function(req,res){
    //console.log(req.body)//前端输入的username和password
    let user = fs.readFileSync('server/user.json',{encoding:"utf-8"});//读取文件
    user=JSON.parse(user)
    let login = req.body ;
    let resInfo={
        success:0,
        info:"登陆错误",
        token:""
    }
    user.forEach(usr=>{
        if(usr.username==login.username&&usr.password==login.password){
            resInfo.success=1,
            resInfo.info="login success"
        }
    })
    if(resInfo.success==1){
        resInfo.token = jsw.sign(login,"1217")
    }
    res.end(JSON.stringify(resInfo))
})
//添加购物车
app.post('/user/Cart/addCart',function(req,res){
    //console.log(req.body)
    jsw.verify(req.body.token,"1217",(err,decoded)=>{
        if(err){
            res.end(JSON.stringify({
                info:"错数据！！！！！",
                detail:err.TokenExpiredError
            }))
        }else{
            //console.log(decoded)
            let cartinfo=JSON.parse(fs.readFileSync(__dirname+"/cart_info.json",{
                encoding:"utf-8"
            })) 
            if(cartinfo[decoded.username]){
                cartinfo[decoded.username].push(req.body.goods_info)
            }else{
                cartinfo[decoded.username]=[req.body.goods_info]
            }
            fs.writeFile(__dirname+"/cart_info.json",JSON.stringify(cartinfo),function(){
                res.end("1")
            })
        }
    })
    
})
app.listen(9000,function(){
    console.log("hello 9000")
})