export default {
    handleAdd(state){
        state.num++;
    },
    handleReduce(state){
        if(state.num <= 1){
            state.num = 1
        }else{
            state.num--
        }
    },
    handleCheck(){
        
    }
}