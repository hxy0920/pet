<template lang="">
  <el-row class="login">
    <el-col :lg="16" :md="12" class="left">
      <div class="text-left text-light-50 font-bold">
        <div class="border-l text-5xl mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">
          来到我的宠物知识网来到我的宠物知识网来到我的宠物知识网
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="font-bold text-3xl text-gray-700">欢迎回来</h2>
      <div
        class="flex items-center justify-center my-5 text-gray-300 space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span class="">账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form ref="formRef" :model="form" :rules="rules" class="w-[250px]">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" >
          <el-input v-model="form.password" type="password" show-password placeholder="请输入密码">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            color="#43946c"
            class="w-[250px] rounded-3xl"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const formRef = ref<FormInstance>()


const onSubmit = () => {
    formRef.value.validate((valid) => {
        if(!valid) {
            return false;
        }
        console.log("验证通过");
    })
  console.log("submit!");
};


const rules = reactive<FormRules>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "长度最短为 3 - 5 位", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 5, message: "长度最短为 3 - 5 位", trigger: "blur" },
  ]
});
</script>
<style>
.login {
  @apply bg-light-50 min-h-screen min-w-screen;
}

.left {
  @apply bg-green-600 flex items-center justify-center;
}

.right {
  @apply bg-white flex items-center justify-center flex-col;
}
</style>
