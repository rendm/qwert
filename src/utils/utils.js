export function getCookie(name){
    let cookstr = document.cookie;
    if(cookstr.length==0)return;
    let arr;
    let res=null;
    if(cookstr.indexOf(';') > -1){
        arr = cookstr.split('; ');
        arr.forEach((cookie,index)=>{
            let tmp_arr = cookie.split('=');
            if(tmp_arr[0] == name){
                res = tmp_arr[1]
            }
        })
    }else{
        let tmp_arr = cookstr.split('=');
            if(tmp_arr[0] == name){
                res = tmp_arr[1]
            }
    }
    return res
}