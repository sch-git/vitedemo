<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped lang="scss">
.common-layout {
  background: #a1a1a1;
}

.aside {
  width: 20vw;
  min-height: 100vh;
}
</style>
