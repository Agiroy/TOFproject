import axios from "axios";
// import mock from './mock'
export default {
    // handleGoodsList({commit}){
    //     commit("handleGoodsList",mock.data);
    // },
    handleGoodsList({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/goods"
        })
        .then((data)=>{
            console.log(data)
            data.map((item)=>{
                item.flag = true;
            })
            commit("handleGoodsList",data);
        })
    },
    handleDel({commit,dispatch},index){
        axios({
            method:"delete",
            url:"http://localhost:3000/goods/"+index
        })
        .then(()=>{
            dispatch("handleGoodsList")
        })
    }
}