<template>
  <div>
    <headers></headers>
    <search></search>
    <swipe></swipe>
    <list v-for="(item, index) in arr" :key="index" class="lists" :ids="item.id">
      <img :src="item.src" alt slot="img" v-lazy="item" />
      <p slot="title">{{item.p}}</p>
      <p slot="price">{{item.price}}</p>
      <p slot="xq">{{item.title}}</p>
    </list>
  </div>
</template>
<script>
import base from "../../components/css/base.css";
import headers from "./headers";
import swipe from "./swipe";
import search from "./search";
import list from "./list";
import { request } from "../../request";
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    request(
      {
        url: "groupshopping"
      },
      res => {
        this.arr = res.array;
        console.log(this.arr[1].id);
      },
      err => {
        console.log(err);
      }
    );
  },
  components: {
    swipe,
    search,
    headers,
    list
  }
};
</script>
<style >

image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}


</style>