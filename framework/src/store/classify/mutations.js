export default {
    handleHomeData(state,params){
        if(params){
            state.recommend = [...state.recommend,...params.data];
            state.index++;  
        }
  
    }
}