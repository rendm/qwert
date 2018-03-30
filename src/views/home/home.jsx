import React,{ Component } from "react"
import $http from "../../utils/http"
import "./home.css"
import Swiper from "../../components/swiper/swiperComp"
import Goodsitem from "../../components/goodsComp/goodsComp"
class Detail extends Component{
    constructor(){
        super()
        this.state={
            goodslist:[
                
            ],
            channel_id: 3,
            querys:true
        }
        this.toSearch=this.toSearch.bind(this)
        this.scrolling=this.scrolling.bind(this)
    }
    toSearch(){
        let {history}=this.props;
        history.push("/index/search")
    }
    render(){
        return (
        <div id="home" onScroll={this.scrolling} ref="scroller">
            <div ref="doc">
                <div className="header">
                    <input type="text" placeholder="搜索" onFocus={this.toSearch}/>
                </div>
                <div className=".goods_liebiao">  
                    <div className="banner">
                    <Swiper></Swiper>
                    </div>
                    <div className="section">
                        <dl>
                            <dt> <img src={require('../../static/img/01.jpg')}/> </dt>
                            <dd>家乡味道</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/02.jpg')}/> </dt>
                            <dd>进口食品</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/03.jpg')}/> </dt>
                            <dd>家乡味道</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/04.jpg')}/> </dt>
                            <dd>进口食品</dd>
                        </dl>   
                        <dl>
                            <dt> <img src={require('../../static/img/05.jpg')}/> </dt>
                            <dd>家乡味道</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/06.jpg')}/> </dt>
                            <dd>进口食品</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/07.jpg')}/> </dt>
                            <dd>家乡味道</dd>
                        </dl> 
                        <dl>
                            <dt> <img src={require('../../static/img/08.jpg')}/> </dt>
                            <dd>进口食品</dd>
                        </dl>   
                    </div>
                    <div className="list refresh">
                        {
                            this.state.goodslist.map((item,index)=>{
                                return <Goodsitem key={index} data={item} history={ this.props.history} location={this.props.location}></Goodsitem>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>)
    }
    componentDidMount(){
       $http.post('/mall/index/getGoodsChannel',{channel_id: this.state.channel_id})
       .then(res=>{
           this.setState({
            goodslist:JSON.parse(res).data.data
           })
           //console.log(res)
       })
    }
    scrolling(){
        //console.log(this.refs.scroller.scrollTop)
        if(this.state.channel_id>9)return;
       if(!this.state.querys) return ;
        let {scroller,doc}=this.refs
        let st = scroller.scrollTop;
        let sw = scroller.offsetHeight;
        let dh = doc.offsetHeight;
       // console.log(dh-(sw+st))
        if(dh-(sw+st) < 50){
            this.setState({
                querys:false
            })
            this.setState({
                channel_id:++this.state.channel_id
            })
            let {goodslist} = this.state;
            $http.post('/mall/index/getGoodsChannel',{channel_id: this.state.channel_id})
                .then(res=>{
                    this.setState({
                        goodslist:[...goodslist,...JSON.parse(res).data.data]
                    })
                    //console.log(res)
                    this.setState({
                        querys:true
                    })
                })
            }
    }
}
export default Detail