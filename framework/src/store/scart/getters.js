import state from "./state";
export default {
    result(){
        let goodsNum=0,goodsPrice=0;
        state.goodsList.map((item)=>{
            if(item.flag){
                console.log(item.price)
                goodsNum += item.num;
                goodsPrice += (item.num* (item.price*10))/10; 
            }
        })

        return {
            goodsNum,
            goodsPrice
        }
    }
}