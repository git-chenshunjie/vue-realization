<template>
  <div class="box" v-if="isShow">
    <div class="group">
      <h3 class="title">{{title}}</h3>
      <p class="box-content">{{message}}</p>
    </div>
  </div>
</template> <script>
export default {
  props: {
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    duration: { type: Number, default: 1000 },
  },
  data() {
    return { isShow: false };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
};
</script> <style>
.box {
  display: flex;
  width: 330px;
  padding: 14px 26px 14px 13px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
  overflow: hidden;
  right: 16px;
  top:20px;
}
.box-content {
  font-size: 14px;
  line-height: 21px;
  margin: 6px 0 0;
  color: #606266;
  text-align: justify;
}
.group {
  margin-left: 13px;
  margin-right: 8px;
}
.title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
}
</style>