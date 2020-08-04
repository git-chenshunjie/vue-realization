<template>
  <div>
    <!-- 自定义组件双向绑定 -->
    <!-- 使用  v-bind="$attrs" 展开$attrs  -->
    <input :value="value" @input="onInput" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
  inheritAttrs:false, //避免属性设置到根元素
  props: {
    value: {
      type: String,
      default: "",
    }
  },
  methods: {
    onInput(e) {
        // 派发事件
        this.$emit('input',e.target.value)
        // 通知父级执行校验
        this.$parent.$emit("validate",e.target.value)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>