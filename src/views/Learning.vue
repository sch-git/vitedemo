<script setup lang="ts">
import {ref} from "vue";

const progressItems = ref([
  {Label: 'Erlang', Percentage: 0, Color: 'blue'},
  {Label: 'GO', Percentage: 100, Color: 'green'},
])
</script>

<template>
  <div class="demo-progress">
    <el-row v-for="item in progressItems">
      <el-col :span="4">
        <span>{{ item.Label }}</span>
      </el-col>
      <el-col :span="20">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="item.Percentage" :color="item.Color"/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
