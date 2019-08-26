<template>
  <div class="list">
    <slot name="img"></slot>
    <slot name="p"></slot>
    <slot name="pic"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list img:first-child {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.list  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding-left: 8px;
  border-bottom: 1px solid #eaeaea;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
}
.list img:last-child {
  background-size: 20px;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>