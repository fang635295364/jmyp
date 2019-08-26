<template>
  <div class="shopping">
    <slot name="img"></slot>
    <div>
      <slot name="p"></slot>
      <slot name="price"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shopping {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 104px;
  border: 1px solid #ccc;
}
.shopping img {
  width: 84px;
  height: 84px;
  display: block;
  border: 1px dashed #ccc;
}
.shopping p {
  width: 200px;
  height: 20px;
  color: red;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shopping span {
  padding: 5px;
  width: 240px;
  height: 20px;
  color: hotpink;
}
</style>