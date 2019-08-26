<template>
  <div class="list-item" @click="tiao">
    <slot name="img"></slot>
    <slot name="title"></slot>
    <slot name="price"></slot>
    <slot name="xq"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    ids: Number
  },
  methods: {
    tiao() {
      // console.log(this.ids);
      this.$router.push({ name: "xq", params: { id: this.ids } });
    }
  }
};
</script>
<style >
.div {
  display: flex；;
}
.list-item p:nth-child(3) {
  color: red;
}
.list-item {
  border: 1px dashed #ccc;
  margin-left: 35px;
  margin-top: 5px;
  width: 300px;
  height: 240px;
  background: #fff;
}
.list-item img {
  margin-left: 70px;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  display: block;
}
.list {
  text-align: center;
  font-size: 12px;
}
</style>