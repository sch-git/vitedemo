<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <el-row class="menu-title">
          <el-col :span="24">
            <el-button type="primary">Primary</el-button>
          </el-col>
        </el-row>
        <el-scrollbar height="70vh">
          <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main class="el-main">Main</el-main>
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

.el-main {
  width: 80vw;
  min-height: 80vh;
}

.menu-title {
  height: 15vh;
  place-items: center;
}
</style>
