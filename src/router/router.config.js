import React,{Component} from "react"
import Home from "../views/home"
import Cart from "../views/cart"
import Mine from "../views/mine"
import Register from "../views/register"
import Catagory from "../views/catagory"
import Detail from "../views/detail"
import Login from "../views/login"
import Search from "../views/search"
import Result from "../views/result"
import Index from "../views/index/index"
import Nomatch from "../views/route404/nomatch"

let routers={
    router:[
        {
            path:"/detail",
            component:Detail
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:'/',
            component:Index,
            // exact:true,
            children:[
                {
                    path:'/index/home',
                    component:Home
                },
                {
                    path:'/index/catagory',
                    component:Catagory
                },
                {
                    path:'/index/cart',
                    component:Cart
                },
                {
                    path:'/index/search',
                    component:Search
                },
                {
                    path:'/index/result',
                    component:Result
                },
                {
                    path:'/index/mine',
                    component:Mine
                }
            ]
        }
    ]
}//Result
export default routers