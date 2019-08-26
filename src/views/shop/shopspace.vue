<template>
  <div class="shopspace">
    <img src="https://f5.jmstatic.com/static_cart_mobile/images/no-card-oops.png" alt />
    <p>您的购物车中还没有商品，请先去挑选心爱的商品吧！</p>
    <mt-button type="danger" class="button">去逛逛</mt-button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shopspace img {
  display: block;
  width: 86px;
  height: 82px;
  margin: auto;
  margin-top: 50%;
}
.shopspace p{
    font-size: 14px;
    text-align: center;
}
.mint-button-text{
  color:#fff;
}
.mint-button{
  margin-left: 140px;
}
</style>