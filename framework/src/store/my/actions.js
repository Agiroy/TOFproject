import axios from "../../lib";
export default{
	handleAddData({commit}){
		axios({
			method:"post",
			url:"/api/mock/5c35a6a6a7a7577b357b45cd/post"
// 			data:{
// 				"mess": 0
// 			}
		}).then((data)=>{
			commit("handleAddData",data);
		})
	},
	handleRecieveData({commit}){
		axios({
			method:"post",
			url:"api/mock/5c35a6a6a7a7577b357b45cd/recievegoods"
// 			data:{
// 				
// 			}
		})
		.then((data)=>{
			// console.log(data.data);
			commit("handleRecieveData",data);
		})
	}
}
