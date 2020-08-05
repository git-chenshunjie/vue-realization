<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import emitter from "@/mixins/emitter";
export default {
  componentName: "MyForm",
  mixins: [emitter],
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
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on("my.form.addField", (field) => {
      if (field) {
        this.fields.push(field);
      }
    });
  },
  methods: {
    validate(callback) {
      // [resutPromise]
      const tasks = this.fields.map((item) => item.validate());

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