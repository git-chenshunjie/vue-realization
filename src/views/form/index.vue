<template>
  <div>
    <my-form :model="formData" :rules="rules" ref="myForm">
      <my-form-item label="用户名" prop="name">
        <my-input v-model="formData.name" placeholder="请输入用户名"></my-input>
      </my-form-item>
      <my-form-item label="密码" prop="password">
        <my-input type="password" v-model="formData.password" placeholder="请输入密码"></my-input>
      </my-form-item>
      <my-form-item>
        <button @click="login('myForm')">登录</button>
      </my-form-item>
    </my-form>
  </div>
</template>

<script>
import MyInput from "./component/MyInput";
import MyFormItem from "./component/MyFormItem";
import MyForm from "./component/MyForm";
export default {
  components: {
    MyInput,
    MyFormItem,
    MyForm,
  },

  data() {
    return {
      formData: {
        name: "tom",
        password: "123456",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("成功");
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>