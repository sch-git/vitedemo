<script setup lang="ts">
import {ref} from "vue";

const progressItems = ref([
  {Label: 'Erlang', Percentage: 10, Color: '#0099FF'},
  {Label: 'GO', Percentage: 100, Color: '#00CC66'},
  {Label: 'css3', Percentage: 10, Color: '#FFFF33'},
  {Label: '大话设计模式', Percentage: 20, Color: '#99FFCC'},
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
