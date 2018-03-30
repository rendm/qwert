import React,{ Component } from "react"
import Swiper from "swiper"
import "./dist/css/swiperss.css"
let  img1=require('../../static/img/1.jpg')
class SwiperComp extends Component{
    render(){
        return <div className="swiper-container" ref="wpp">
            <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={img1} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/2.jpg')} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/3.jpg')} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/4.jpg')} alt=""/></div>
            </div>
        </div>
    }
    componentDidMount(){
       new Swiper(this.refs.wpp,{
           autoplay:true,
           loop:true
       })
    }
}
export default SwiperComp