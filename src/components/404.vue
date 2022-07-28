<template>
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="error"
        title="404"
        sub-title="Sorry, request error"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">Back</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>
