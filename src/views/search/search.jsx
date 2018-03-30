import React,{ Component } from "react"
import "./search.css"
class Search extends Component{
    constructor(){
        super();
        this.toResult=this.toResult.bind(this)
    }
    toResult(){
        let {history}=this.props;
        history.push("/index/result")
    }
    render(){
        return (
            <div id="search">
                <div className="headers">
                <input type="text" placeholder="请输入你要购买的商品"/><button onClick={this.toResult}>搜索</button>
                </div>
                <div className="sections">
                <p className="lately">最近搜索 <span className='iconfont icon-gouwuche'></span></p>
                <ul className="history">
                    <li>水果</li>
                </ul>
                </div>
                <div className="common">
                    <p>大家都在搜</p>
                    <ul className="formerly">
                        <li>粽子</li>
                        <li>醋</li>
                        <li>大米</li>
                        <li>酱油</li>
                        <li>糍粑</li>      
                        <li>牛肉</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Search