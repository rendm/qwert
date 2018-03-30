import React,{ Component } from "react"
class Result extends Component{
    render(){
        return <h1>Result</h1>
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default Result