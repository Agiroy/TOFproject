<template>
  <div class="listmain_bar">
    <ul>
      <li v-for="(item,index) in info" :key="index">
        <div>
          <img :src="item.foodImg" alt>
          <p>{{item.title}}</p>
          <span>X {{item.count}}</span>
        </div>
        <span>￥{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      info: [
        {
          title: "正宗阳澄湖大闸蟹  秋日 盛宴不早不晚",
          author: "美好生活提案者 食令",
          price: 1500,
          count: 2,
          foodImg: "../../../../../../static/images/classify/banner3@3x.png"
        },
        {
          title: "24季夏日主题精酿啤酒 一夏的不二人选清凉 ",
          author: "美好生活提案者 食令",
          price: 50,
          count: 2,
          foodImg: "../../../../../../static/images/classify/banner4@3x.png"
        },
        {
          title: "极露手酿桂花酒   原花浸 泡 桂甜绵长  酒香醇厚  ",
          author: "美好生活提案者 食令",
          price: 150,
          count: 2,
          foodImg: "../../../../../../static/images/classify/banner4@3x(1).png"
        }
      ]
    };
  }
};
</script>  
 <style scoped>
.listmain_bar {
  width: 100%;
  height: 100%;
  margin-top: 0.89rem;
  overflow: auto;
}
.listmain_bar > ul > li {
  width: 100%;
  height: 100%;
}
.listmain_bar > ul > li > div {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.3rem;
}
.listmain_bar > ul > li>span{
    width:0.39rem;
height:0.17rem;
font-size:0.35rem;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(255,14,14,1);
float: left;
margin-left: 2.7rem;
margin-top: -.7rem;
}
.listmain_bar > ul > li > div > p {
  width: 4.23rem;
  height: 0.25rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular;
  font-weight: 900;
  color: rgba(0, 0, 0, 1);
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.listmain_bar > ul > li > div > img {
  width: 2rem;
  height: 2rem;
}
.listmain_bar > ul > li > div > span {
  width: 0.7rem;
  height: 0.17rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 14, 14, 1);
  margin-top: 0.5rem;
}
</style>