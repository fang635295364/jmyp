<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <div class="div1">
        <img :src="item.src" alt />
      </div>
      <div class="div2">
        <p>
          ￥{{item.price}}
          <span>￥{{item.single}}</span>
          <span>2842人已购买</span>
        </p>
      </div>
      <div class="div3">
        <p>{{item.p}}</p>
      </div>
      <div class="div4">
        <p>
          <span>运费</span>
          <span>件数满一件，全国包邮</span>
          <span>></span>
        </p>
      </div>
      <div class="foot">
        <button style="color:white;font-size:24px;background:yellow;" @click="add(item.id)">加入购物车</button>
        <button style="color:white;font-size:24px;background:hotpink" @click="jump">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../request";
export default {
  data() {
    return {
      arr: [],
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    request(
      {
        url: "groupshopping"
      },
      res => {
        for (let i = 0; i < res.array.length; i++) {
          if (res.array[i].id == this.$route.params.id) {
            this.arr.push(res.array[i]);
            console.log(this.arr);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  },
  methods: {
    jump() {
      this.$router.push({ name: "shop", params: { id: this.id } });
    },
    add(res) {
      this.$store.commit("addlist", res);
      console.log(res)
    }
  }
};
</script>

<style>
.div1 img {
  width: 100%;
  height: 375px;
}
.div2 {
  display: flex;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
}
.div2 p {
  color: #f33873;
  font-size: 27px;
}
.div2 span:nth-child(1) {
  font-size: 14px;
  color: #666;
  text-decoration: line-through;
  margin-left: 40px;
}
.div2 span:nth-child(2) {
  font-size: 17px;
  color: #666;
  margin-left: 40px;
  /* text-decoration: line-through; */
}
.div3 p {
  width: 100%;
  padding: 5px;
  font-size: 23px;
  color: #666;
}
.div4 {
  width: 100%;
  height: 37px;
  padding: 0px 8px;
}
.div4 p span:nth-child(0) {
  width: 77px;
  color: #999;
}
.div4 p span:nth-child(1) {
  width: 262px;
  color: #999;
}
.div4 p span:nth-child(2) {
  width: 6px;
  color: #999;
  margin-right: 5px;
}
.foot {
  display: flex;
  justify-content: space-between;
}
.foot button {
  height: 40px;
  width: 180px;
}
</style>