<template>
  <div>
    <!-- 设置一个 label -->
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 校验信息显示 -->
    <p v-if="error" style="color:red;fontSize:12px">{{error}}</p>
  </div>
</template>

<script>
import emitter from "@/mixins/emitter";
import Schema from "async-validator";
export default {
  componentName: "MyFormItem",
  inject: ["form"],
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: "", // 当error 为空表示校验通过
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    if (this.prop) {
      this.dispatch("MyForm", "my.form.addField", this);
    }
  },
  methods: {
    validate() {
      // 当前值
      const value = this.form.model[this.prop];
      // 当前校验规则
      const rules = this.form.rules[this.prop];
      // 创建校验描述对象
      const desc = {
        [this.prop]: rules,
      };
      // 创建 Schema 实例
      const schema = new Schema(desc);
      // 执行校验
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style scoped>
</style>