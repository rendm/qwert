import React,{Component} from "react"
import ReactDom from "react-dom"
import router from "./router/router.config"
import "./utils/fontsize"
import RouteWraper from "./components/routewraper"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import "./static/css/reset.css"
import "./static/font/iconfont.css"
import "./static/css/common.css"
import "./static/css/goodsComp.css"
console.log(process.env)//通过判断打印值来起域名（是localhist，还是当前线上域名）
console.log(router)
ReactDom.render(
<BrowserRouter>
<Switch>
    <Redirect exact from="/" to="/index/home"></Redirect>
   <RouteWraper routes={router.router}></RouteWraper>
</Switch>
</BrowserRouter>,document.querySelector("#box"))