import React,{ Component } from "react"
import Lazyload from "react-lazyload"
import $http from "../../utils/http"
import {getCookie} from "../../utils/utils"
import {ToastContainer,toast} from 'react-toastify'
class Pla extends Component{
    render(){
        return <img src={require('../../static/img/01.jpg')} alt=""/>
    }
}
class Goodsitem extends Component{
    constructor(){
        super()
        this.addCart=this.addCart.bind(this)
        this.toDetail=this.toDetail.bind(this)
    }
    addCart(e){
        e.stopPropagation()//阻止页面跳转
        console.log(111)
        let {data} = this.props;
        if(getCookie('token')){
            $http.post('/user/Cart/addCart',{
                goods_id:data.goods_id,
                goods_info:data,
                token:getCookie('token')
            })
            .then((res)=>{
                if(res==1){
                    console.log("您的宝贝"+res+"已经在购物车里面等你喽")
                    toast.success('添加购物车成功',{
                        position:toast.POSITION.TOP_CENTER
                    })
                }else{
                    toast.warn(res.info,{
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:2000,
                        className:'test'
                    })
                }
               
            })
        }else{
            console.log(this.props.location)
            this.props.history.push("/login",{
                from:this.props.location.pathname
            })
        }
    }
    toDetail(goods_id){
        console.log(goods_id)
        //let {history}=this.props;
        this.props.history.push("/detail?goods_id="+goods_id,{
            goods_id:goods_id
        })
     }
    render(){
        let {data} = this.props;
        return (
        <dl className="goods-items" onClick={()=>{this.toDetail(data.goods_id)}}>
            <dt><Lazyload overflow once height={'100%'} placeholder={<Pla></Pla>} ><img src={"http://www.lb717.com/"+data.obj_data} alt=""/></Lazyload></dt>
            <dd>
                <p className="detail">{data.goods_name}</p>
                <p id="joins"><span  className="prick">{data.discount_price}
                </span>
               
                 <span className="iconfont icon-gouwuche" onClick={this.addCart}></span></p>
                 <ToastContainer></ToastContainer>
            </dd>
        </dl>
        )   
    }
}
export default  Goodsitem
