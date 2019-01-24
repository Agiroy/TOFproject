import axios from "../../lib";

export default {
    handleHomeData({commit,state}){
        if(state.index<=1){
            axios({
                method: "post",
                url: "/api/mock/5c36fb02c0fe6620a6a800ca/time/goods5", 
                //https://www.easy-mock.com/mock/5c36fb02c0fe6620a6a800ca/time/goods5
                data: {
                
                },
            
            })
            .then((data)=>{
                commit("handleHomeData",data)
    
            })
        }else{
            state.flag = false;
        }
       
    },
    handleUpdataData({dispatch}){
        dispatch("handleHomeData");
    } 
}