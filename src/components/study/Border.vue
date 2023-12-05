<script setup lang="ts">

</script>

<template>
  <div class="example-1">
    <p>border-radius 属性允许您为元素添加圆角边框！</p>
  </div>
  <div class="example-2">
    <p>如果设置了两个值，第一个用于左上角和右下角，第二个用于右上角和左下角。</p>
  </div>
</template>

<style scoped lang="scss">
.example-1 {
  border: 2px solid #a1a1a1;
  margin-top: 10px;
  padding: 10px 40px;
  background: #ddd;
  border-radius: 25px;
}

.example-2 {
  border: 2px solid red;
  padding: 10px;
  margin-top: 10px;
  border-radius: 50px 20px;
}
</style>
