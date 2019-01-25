<template>
  <div class="list">
    <div class="scart_list" v-for="(item,index) in goodsList">
      <div class="checkbox">
        <label>
          <input type="checkbox" :checked="item.flag" @click="handleChecked(index)" :value="item">
          <span>
            <i class="iconfont no icon-checkbox"></i>
            <i class="iconfont yes icon-check_box"></i>
          </span>
        </label>
        <!-- <input type="checkbox" :checked="item.flag" @click="handleChecked(index)"> -->
      </div>
      <div class="scart_Pic">
        <img :src="item.img">
      </div>
      <div class="scartDetail">
        <h2>{{item.goodsName}}</h2>
        <h3>
          {{item.goodsAuthor}}
          <i class="del" @click="handleDel(item.id)">删除</i>
        </h3>
        <div class="bottom">
          <div class="bottom_left">
            <span>¥</span>
            <span>{{item.price | price}}</span>
          </div>
          <div class="bottom_right">
            <button @click="handleReduce(index)">
              <div class="reduce"></div>
            </button>
            <span>{{item.num}}</span>
            <button @click="handleAdd(index)">
              <div class="add"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodsList: state => state.scart.goodsList
    })
  },
  methods: {
    ...Vuex.mapMutations({
      handleAdd: "scart/handleAdd",
      handleReduce: "scart/handleReduce",
      handleChecked: "scart/handleChecked"
    }),
    ...Vuex.mapActions({
      handleDel: "scart/handleDel"
    })
  },
  filters: {
    price(n) {
      if (!/\./g.test(n)) {
        return n + ".00";
      } else {
        return n + "0";
      }
    }
  }
};
</script>

<style lang="less" scoped>
label {
    width: 0.36rem;
    height: 0.36rem;
    border: 0;
    margin: 0.84rem 0.25rem 0.71rem 0.26rem;
    input {
        display: none;
        
        & + span {
        > i {
            font-size: .4rem;
            &.no {
            color: #ddd;
            }
            &.yes {
            color: orange;
            display: none;
            }
        }
        }
        &:checked + span {
        > i {
            &.no {
            display: none;
            }
            &.yes {
            display: inline-block;
            }
        }
        }
    }
}
.list {
  width: 100%;
  min-height: 0.1rem;
  background: #ccc;
  padding-top: 1rem;
  padding-bottom: 0.05rem;
}
.scart_list {
  width: 100%;
  height: 1.91rem;
  display: flex;
  background: #fff;
  margin-bottom: 0.05rem;
}
.checkbox{
  padding-top:.84rem;
}
/* .scart_list>.checkbox{
        width:.36rem;
        height:.36rem;
        border:#7D7D7D solid .02rem;
        border-radius: 50%;
        margin:.84rem .25rem .71rem .26rem;
        overflow: hidden;
        background: #FFF;
        position: relative;
    }
    .checkbox>input{
        width:.42rem;
        height:.42rem;
        background: #FFF;
        border-radius: 50%;
        border:0;
        margin:0;
        position: absolute;
        top:-.05rem;
        left:-.06rem;
    } */
.scart_list > .scart_Pic {
  width: 1.45rem;
  height: 1.44rem;
  margin: 0.29rem 0.15rem 0 0;
}
.scart_Pic > img {
  width: 1.45rem;
  height: 1.44rem;
}
.scartDetail {
  width: 5rem;
  height: 100%;
  padding-top: 0.27rem;
}
.scartDetail > h2 {
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  font-size: 0.26rem;
  margin-bottom: 0.14rem;
}
.scartDetail > h3 {
  width: 4.6rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  font-size: 0.22rem;
}
.scartDetail > h3 > .del {
  /* display: inline-block; */
  font-style: normal;
  width: 0.5rem;
  height: 0.1rem;
  float: right;
  background: #fff;
}
.bottom {
  width: 4.35rem;
  height: 0.38rem;
  margin-top: 0.2rem;
  margin-left: 0.21rem;
  display: flex;
  justify-content: space-between;
}
.bottom > .bottom_left > span {
  font-size: 0.22rem;
  color: #ff0e0e;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(255, 14, 14, 1);
}
.bottom_right > button {
  width: 0.5rem;
  height: 0.5rem;
  border: #7d7d7d solid 0.02rem;
  border-radius: 50%;
  outline: none;
  position: relative;
}
.bottom_right > button > .reduce {
  display: inline-block;
  background: black;
  height: 0.12rem;
  position: relative;
  width: 0.02rem;
  transform: rotateZ(90deg);
  text-align: center;
  line-height: 0.2rem;
}
.bottom_right > button > .add {
  display: inline-block;
  background: black;
  height: 0.12rem;
  position: relative;
  width: 0.02rem;
}
.bottom_right > button > .add:after {
  background: black;
  content: "";
  height: 0.12rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 0.02rem;
  transform: rotateZ(90deg);
}
</style>

