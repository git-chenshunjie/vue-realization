<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(callback) {
      // [resutPromise]
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
      //  统一处理
      Promise.all(tasks)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>