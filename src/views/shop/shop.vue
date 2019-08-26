<template>
  <div>
    <headers></headers>
    <shopspace v-if="flag"></shopspace>
    <shoping v-else v-for="(item, index) in list" :key="index">
      <ul v-for="(it, idx) in $store.state.list" :key="idx">
        <li v-if="item.id==it">
          <img :src="item.src" alt slot="img" style="width:200px;height:200px;" />
          <p slot="p">{{item.p}}</p>
          <span slot="price">单价：{{item.price}}元</span>
          <div>
            数量为：
            <button @click="jia" style="width:30px;height:30px;">+</button>
            {{num}}
            <button @click="jian" style="width:30px;height:30px;">-</button>
          </div>
          <div>总价为{{total}}</div>
        </li>
      </ul>
    </shoping>
  </div>
</template>
<script>
import headers from "./headers";
import shopspace from "./shopspace";
import shoping from "./shoping";
import { request } from "../../request";
export default {
  data() {
    return {
      list: "",
      flag: false,
      num: 1,
      total: 0,
      price: 10
    };
  },
  created() {
    request(
      {
        url: "groupshopping"
      },
      res => {
        this.list = res.array;
      },
      err => {
        console.log(err);
      }
    );
    //  count();
  },
  methods: {
    jia() {
      this.num++;
    },
    jian() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    }
    // count(){
    //     this. count=this.num*
    // }
  }
};
</script>
<style >
</style>