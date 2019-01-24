export default {
    handleGoodsList(state,params){
        state.goodsList = params;
    },
    handleChecked(state,params){
        state.goodsList[params].flag = !state.goodsList[params].flag;

        let bStop = true;

        state.goodsList.map((item)=>{
           if(!item.flag){
               bStop = false;
           }
        })
        state.checkAll = bStop;
    },
    handleCheckAll(state){
        state.checkAll = ! state.checkAll;
        state.goodsList.map((item)=>{
            item.flag = state.checkAll;
        })     
    },
    handleAdd(state,index){
        state.goodsList[index].num++;
    },
    handleReduce(state,index){
        if(state.goodsList[index].num <= 1){
            state.goodsList[index].num = 1
        }else{
            state.goodsList[index].num--
        }
    },
    handleSelect(state){
        state.payFlag = !state.payFlag;
    },
    handleChat(state){
        state.payWay = "微信";
        state.payFlag = !state.payFlag;
    },
    handlezfb(state){
        state.payWay = "支付宝";
        state.payFlag = !state.payFlag;
    },
    handlezgyh(state){
        state.payWay = "中国银行储蓄卡";
        state.payFlag = !state.payFlag;
    },
    handlezgjs(state){
        state.payWay = "中国建设银行储蓄卡";
        state.payFlag = !state.payFlag;
    }
}