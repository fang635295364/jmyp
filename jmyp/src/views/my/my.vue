<template>
  <div>
    <headers></headers>
    <top></top>
    <list v-for="(item, index) in arr1" :key="'ARR1'+index">
      <img :src="item.img" alt slot="img" />
      <p slot="p">{{item.p}}</p>
      <img :src="item.pic" alt slot="pic" />
    </list>

    <pp v-for="(item, index) in arr3" :key="'aRR3'+index">
      <img :src="item.img" alt slot="img" />
      <p slot="p">{{item.p}}</p>
    </pp>

    <list v-for="(item, index) in arr1" :key="'aRR1'+index">
      <img :src="item.img" alt slot="img" />
      <p slot="p">{{item.p}}</p>
      <img :src="item.pic" alt slot="pic" />
    </list>

    <pp v-for="(item, index) in arr3" :key="'ARR3'+index">
      <img :src="item.img" alt slot="img" />
      <p slot="p">{{item.p}}</p>
    </pp>

    <list v-for="(item, index) in arr2" :key="'ARR2'+index">
      <img :src="item.img" alt slot="img" />
      <p slot="p">{{item.p}}</p>
      <img :src="item.pic" alt slot="pic" />
    </list>
  </div>
</template>
<script>
import headers from "./headers";
import top from "./top";
import list from "./list";
import pp from "./pp";
export default {
  data() {
    return {
      arr1: [
        {
          img:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/myorder.png",
          titile: "我的订单",
          p: "查看我的全部订单",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        }
      ],
      arr2: [
        {
          img:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/rmaservice.png",
          p: "售后服务",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        },
        {
          img:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/feedback.png",
          p: "意见反馈",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        },
        {
          img:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/address.png",
          p: "收货地址",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        },
        {
          img:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/logout.png",
          p: "退出登录",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        },
        {
          img:
            "https://f4.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/tel.png",
          p: "400-123-8888",
          pic:
            "https://f3.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/advance_bg.png"
        }
      ],
      arr3: [
        {
          img:
            "https://f4.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png",
          p: "待付款"
        },
        {
          img:
            "https://f4.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png",
          p: "待收获"
        },
        {
          img:
            "https://f4.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png",
          p: "待评价"
        },
        {
          img:
            "https://f4.jmstatic.com/static_account/dist/v1.0.157339/images/mobile_usercenter/myjumei/unpaid.png",
          p: "退货/收款"
        }
      ]
    };
  },
  components: {
    headers,
    top,
    list,
    pp
  }
};
</script>
<style >
</style>