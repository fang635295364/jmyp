<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home" activecolor="blue">
        <img src="./assets/img/tabbar/home.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/home_.png" alt slot="itemiconActive" />
        <div slot="itemtitle">首页</div>
      </tabbaritem>
      <tabbaritem path="/kind">
        <img src="./assets/img/tabbar/kind.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/kind_.png" alt slot="itemiconActive" />
        <div slot="itemtitle">分类</div>
      </tabbaritem>
      <tabbaritem path="/my">
        <img src="./assets/img/tabbar/user.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/user_.png" alt slot="itemiconActive" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
      <tabbaritem path="/shop">
        <img src="./assets/img/tabbar/shopping.png" alt slot="itemicon" />
        <img src="./assets/img/tabbar/shopping_.png" alt slot="itemiconActive" />
        <div slot="itemtitle">商品</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";
export default {
  components: {
    tabbar,
    tabbaritem
  }
};
</script>
<style>
</style>
