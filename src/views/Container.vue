<script setup lang="ts">
import {House} from "@element-plus/icons-vue";

const menuItems = [
  {label: "首页", value: "首页"},
  {label: '学习资料', value: '学习资料'},
  {label: "todo", value: "todo"}

]
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <el-row class="menu-title">
          <el-col :span="24">
            <el-text class="mx-1 menu-txt">目录</el-text>
          </el-col>
        </el-row>
        <el-scrollbar height="70vh">
          <!--          <el-col :span="24" v-for="item in menuItems" :key="item.value" class="scrollbar-demo-item">-->
          <!--            <el-button>{{ item.label }}</el-button>-->
          <!--          </el-col>-->
          <el-col :span="24" v-for="item in menuItems" :key="item.value" class="scrollbar-demo-item">
            <el-row class="menu-item">
              <el-col :span="4"></el-col>
              <el-col :span="4">
                <el-icon class="menu-icon">
                  <House/>
                </el-icon>
              </el-col>
              <el-col :span="8">
                <el-text>{{ item.label }}</el-text>
              </el-col>
            </el-row>
          </el-col>
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
  background-image: linear-gradient(to right top, #cd88e2, #bf92e9, #b19aed, #a5a2ef, #9ba9ef, #8da2f0, #7e9bf2, #6c94f3, #567cf5, #4a62f4, #4b44ef, #560ce4);
}

.aside {
  width: 16vw;
  min-height: 100vh;
}

.el-main {
  width: 84vw;
  min-height: 80vh;
}

.menu-title {
  height: 20vh;
  place-items: center;
  padding: 10px 0;
}

.menu-txt {
  color: #626aef;
  font-size: x-large;
  font-weight: bold;
}

.menu-icon {
  vertical-align: middle;
}

.menu-item:hover {
  color: red;
}

.scrollbar-demo-item {
  padding: 10px 25px;
}
</style>
