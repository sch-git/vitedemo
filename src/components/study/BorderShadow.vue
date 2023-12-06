<script setup lang="ts">
const boxShadowTable = [
  {value: 'h-shadow', desc: '必需的。水平阴影的位置。允许负值'},
  {value: 'v-shadow', desc: '必需的。垂直阴影的位置。允许负值'},
  {value: 'blur', desc: '可选。模糊距离'},
  {value: 'spread', desc: '可选。阴影大小'},
  {value: 'color', desc: '可选。阴影颜色'},
  {value: 'inset', desc: '可选。从外层的阴影（开始时）改变阴影内侧阴影'},
]
</script>

<template>
  <p>box-shadow 属性说明</p>
  <div>
    <p>语法：box-shadow: h-shadow v-shadow blur spread color inset;</p>
    <p>boxShadow 属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4 个长度值、一个可选的颜色值和一个可选的
      inset 关键字来规定。省略长度的值是 0。</p>
  </div>
  <el-table :data="boxShadowTable">
    <el-table-column prop="value" label="值"/>
    <el-table-column prop="desc" label="说明"/>
  </el-table>
</template>

<style scoped>

</style>
