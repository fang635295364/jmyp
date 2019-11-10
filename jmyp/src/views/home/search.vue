<template>
  <div>
    <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mint-search {
  position: absolute;
  top: 49px;
  left: 0px;
  right: 0px;
  z-index: 99;
  height: 49px !important;
  width: 100%;
  border: 1px solid hotpink;
}
.mint-searchbar{
background: #fff;
}
.mint-searchbar-inner{
  font-size: 42px;
}
</style>