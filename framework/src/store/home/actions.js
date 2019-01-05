import axios from "../../lib";

export default {
    handleHomeData({commit}){
        axios({
            method:"post",
            url:"/api/capi/product/qiuxie/open/homefirst",
            data:{
                os:3
            }
        })
        .then((data)=>{
            commit("handleHomeData",data.data);
        })
    }
}