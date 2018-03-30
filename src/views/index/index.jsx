import React,{ Component } from "react"
 import "./index.css"
 import RouteWraper from "../../components/routewraper"
import $http from "../../utils/http"

//import "../../static/font/iconfont.css"
import {NavLink,Redirect,Route} from "react-router-dom"
class Index extends Component{
    render(){
        let {routes} = this.props
        return <div id="index">
             <div className="content">
                <RouteWraper routes={routes}></RouteWraper>
             </div>    
            <ul className="nav">
                <li>
                <NavLink to="/index/home" activeClassName="tab-active">
                    <span className='iconfont icon-shouye1'></span>
                    <span>首页</span>
                </NavLink>
                
                </li>
                <li>
                <NavLink to="/index/catagory" activeClassName="tab-active">
                    <span className='iconfont icon-leimupinleifenleileibie2'></span>
                    <span>分类</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to="/index/cart" activeClassName="tab-active">
                    <span className='iconfont icon-gouwuche'></span>
                    <span>购物车</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to="/index/mine" activeClassName="tab-active">
                    <span className='iconfont icon-gaiicon-'></span>
                    <span>我的</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    }
    componentDidMount(){
        // $http.get("/test.json",{id:2,name:"xidada"})
        // .then(data=>{console.log(data)})
        // .catch(err=>{console.log(err+"错误数据1")});
    }
}
export default Index