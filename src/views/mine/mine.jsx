import React,{ Component } from "react"
import $http from "../../utils/http"

class Detail extends Component{
    render(){
        return <h1>mine</h1>
    }
    componentDidMount(){
        // $http.get("/mall/index/getGoodsChannel")
        // .then(data=>{console.log(data)})
        // .catch(err=>{console.log(err+"错误数据")});
        $http.post("/yeesight/api/user/register",{
            "head":{
                "token":"",
                "client":"",
                "version":"v1"
            },
            "message":{
                'password':"1234567",
                "mobile":"15334162139",
                "email":"111dqq2@qq.com",
                "areaCode":"86",
                "source":"8",
                "thirdUid":"",
                "countryShortiName":"CN",
                "loginWay":"2",
                "industryName":"电子竞赛"
            }
        })
        .then(data=>{console.log(data)})
        .catch(err=>{console.log(err+"错误数据")})
    }
}
export default Detail