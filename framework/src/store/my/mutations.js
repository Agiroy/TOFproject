export default{
	handleAddData(state,params){
		state.addList=params.data;
		// console.log(state.addList);
	},
	handleRecieveData(state,params){
		state.recieveData=params.data;
		// console.log(state.recieveData);
	}
}