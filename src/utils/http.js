var domin;
if(process.env=="development"){
    domin ="http://localhost:9000";
}else if(process.env=="production"){
    domin ="http://www:lb171.com";
}
let $http={
    get(url,data){
        if(Object.prototype.toString.call(data)!="[object Object]"){
            return {
                then(callback){
                    callback("格式不正确");
                    return{
                        catch(err){
                            err(new Error("格式不正确"))
                        }
                    }
                }
            }
        }
        let queryString="?"
        for(let i in data){
            queryString+=(i+="="+data[i]+"&")
        }
        url=encodeURI(url+queryString.slice(0,-1))
        console.log( url)
        return fetch(domin + url,{
            headers:{
                "Content-Type":"application/json;charset=utf-8"
            }
        }).then(res=>res.json())
    },
    post(url,data){
        if(Object.prototype.toString.call(data)!="[object Object]"){
            return {
                then(callback){
                    callback("格式不正确");
                    return{
                        catch(err){
                            err(new Error("格式不正确"))
                        }
                    }
                }
            }
        };
        return fetch(domin + url,{
            body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json;charset=utf-8",
                    "Token":"123"
                },
            method:"POST"
        }).then(res=>res.json())
    }
}
export default $http