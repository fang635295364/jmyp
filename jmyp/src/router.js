import Vue from 'vue'
import Router from 'vue-router'

const kind = () => import("./views/kind/kind");
const my = () => import("./views/my/my");
const shop = () => import("./views/shop/shop");
const home = () => import("./views/home/home");
const xq = () => import("./views/xq/xq");

Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: home,name:"home" },
    { path: "/my", component: my,name:"my" },
    { path: "/kind", component: kind,name:"kind" },
    { path: "/shop", component: shop,name:"shop" },
    { path: "/xq", component:xq,name:"xq"}
    
  ]
})
