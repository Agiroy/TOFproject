 <template>
     <div class="main">
<ul class="tabs">
        <li class="li-tab" v-for="(item,index) in tabsParam" 
        @click="toggleTabs(index)"
        :class="{active:index!=nowIndex}">{{item}}</li>
    </ul>
    <div  class="divTab" v-show="nowIndex===0">
        <form >
      <div> <input type="text" :placeholder="placeholder1[0]"></div> 
       <div>  <input type="text" :placeholder="placeholder1[1]"> </div> 
    <router-link :to="{name:'home'}"><input class="sub" type="submit" value="登录" @click="handleClick()"></router-link>
    </form>
    </div>

    <div class="divTab" v-show="nowIndex===1">
             <form >
      <div> <input type="text" :placeholder="placeholder2[0]"></div> 
       <div>  <input type="text" :placeholder="placeholder2[1]"> <a href="#">获取验证码</a> </div> 
   <router-link :to="{name:'home'}"><input class="sub" type="submit" value="登录" @click="handleClick()"></router-link>
    </form>
    </div>
     </div>
 </template>
 <script>
 import { Toast } from 'mint-ui';
 export default{
     data(){
         return{
         tabsParam:['账号登录','短信登录'], 
        nowIndex:0, 
        placeholder1:['请输入手机号','登录密码'],
        placeholder2:['请输入手机号','短信验证码'],
         }
     },
     methods:{
        toggleTabs(index){
            this.nowIndex=index;
        },
        handleClick(){
            Toast({
                    message: '登录成功',
                    duration: 1500,
                    iconClass: 'mintui mintui-success'
            });
        }
     }
 }
 </script>
 <style scoped>
 /* .tabs::after{display: block;content: "";clear: both;height: 0}; */
 .tabs{ margin-top: 1rem; 
            display: flex;
            justify-content: space-around
            }
.li-tab{width:3rem;
           height:0.72rem;
           background:rgba(255,217,0,1);
           border-radius:0.5rem;
           font-size:0.28rem;
           font-family:PingFang-SC-Regular;
           font-weight:400;
           color:rgba(41,41,41,1);
           text-align: center;
           line-height:0.72rem;
 }
  .active{
           background:rgba(255,255,255,1) ;
       }
       .divTab div{ 
           position: relative;
           margin: .5rem 0;
           text-align: center
       }
  .divTab div input{
           line-height:normal;
           padding-left: .5rem;
           width:6.66rem;
           height:0.86rem;
           border:.01rem solid rgba(204,204,204,1);
           border-radius:0.5rem;
           outline: medium;
           font-size: .25rem;
       }
   .divTab div a{
           line-height:0.86rem;
           font-size: 0.28rem;
           font-family: PingFang-SC-Regular;
           font-weight: 400;
           position: absolute;
           right: 1rem;
           color:rgba(41,41,41,1);
         }
    .sub{
            display: block;
            width:6.66rem;
            height:0.86rem;
            background:rgba(255,217,0,1);
            margin: 1rem auto;
            width:6.66rem;
            height:0.86rem;
            border:none;
            font-size:0.32rem;
            border-radius:0.5rem;
            outline: medium
            }
::-webkit-input-placeholder{  color:rgba(120,120,120,1);} /* 使用webkit内核的浏览器 */
:-moz-placeholder{color:rgba(120,120,120,1);} /* Firefox版本4-18 */
::-moz-placeholder{color:rgba(120,120,120,1);} /* Firefox版本19+ */
:-ms-input-placeholder{color:rgba(120,120,120,1);} /* IE浏览器 */
 </style>
 