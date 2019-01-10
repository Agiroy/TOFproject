<template>
    <div class="main">
        <div class="inp">
            <input type="text" placeholder="请输入手机号"><br>
            <div class="num">
                <input type="text" placeholder="短信验证码"><br>
                <a href="#">获取验证码</a>
            </div>
            <input type="text" placeholder="设置登录密码">
            <router-link :to="{name:'home'}"><button @click="handleClick()">注册</button></router-link><br>
            <span>注册即表示您已同意《食令用户协议》</span>
        </div>
        
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
     methods:{
        handleClick(){
            Toast({
                    message: '注册成功',
                     duration: 1500,
                     iconClass: 'mintui mintui-success'
            });
        }
     }
}
</script>
<style scoped>
    .main input{
        width:6.66rem;
        height:0.86rem;
        border:0.01rem solid rgba(204,204,204,1);
        border-radius:0.5rem;
        padding-left: 0.5rem; 
        margin-bottom: 0.5rem;
        outline: none;
        font-size: .25rem;
    }
    .main .inp{
        text-align: center;
        margin-top: 1rem;
    }
     .main .inp .num a{
         position: relative;
         right: -2rem;
         top: -1.1rem;
         width:1.57rem;
        height:0.3rem;
        font-size:0.25rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(41,41,41,1);
        line-height:0.15rem;
     }
    .main button{
        width:6.66rem;
        height:0.86rem;
        background:rgba(255,217,0,1);
        border-radius:0.5rem;
        border: 0;
        outline: none;
        font-size:0.32rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:0.15rem;
        margin-top: 1rem;
        margin-bottom: 0.1rem
    }
     .main .inp span{
        width:3.95rem;
        height:0.23rem;
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(120,120,120,1);
        line-height:0.15rem;
     }
    ::-webkit-input-placeholder{ color:rgba(120,120,120,1);} /* 使用webkit内核的浏览器 */
    :-moz-placeholder{color:rgba(120,120,120,1);} /* Firefox版本4-18 */
    ::-moz-placeholder{color:rgba(120,120,120,1);} /* Firefox版本19+ */
    :-ms-input-placeholder{color:rgba(120,120,120,1);} /* IE浏览器 */
</style>