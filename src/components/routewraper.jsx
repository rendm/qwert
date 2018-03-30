import React,{Component} from "react"
import {Route} from 'react-router-dom'
class  RouteWraper extends Component{
    render(){
        let {routes} = this.props
        
        return routes.map((item,index)=>{
            return (<Route exact={item.exact} path={item.path} key={index} render={(location)=>{
                return (<item.component {...location} routes={item.children}></item.component>)
            }}></Route>)
        })
    }
}
export default  RouteWraper

