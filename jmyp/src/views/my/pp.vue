<template>
  <div class="pp">
    <slot name="img"></slot>
    <slot name="p"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pp img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 5px auto;
}
.pp  {
  width: 76px;
  text-align: center;
  display: inline-block;
  margin: 0 5px;
  padding: 10px 0;
  text-decoration: none;
  font-size: 12px;
  color: #666;
}
</style>