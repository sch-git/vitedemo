<script setup lang="ts">

</script>

<template>
  <p>border-radio 属性说明</p>
  <div class="border-radio-example-1">
    <p>border-radius 属性允许您为元素添加圆角边框！</p>
  </div>
  <div class="border-radio-example-2">
    <p>
      border-radius: 10px 10px 10px 10px;
      第一个值适用于左上角，第二个值适用于右上角，第三个值适用于右下角，第四个值适用于左下角
    </p>
  </div>
  <div class="border-radio-example-3">
    <p>
      border-radius: 15px 50px 30px;
      第一个值适用于左上角，第二个值适用于右上角和左下角，第三个值适用于右下角
    </p>
  </div>
  <div class="example-4">
    <p>
      border-radius: 15px 50px;第一个值适用于左上角和右下角，第二个值适用于右上角和左下角
    </p>
  </div>
</template>

<style scoped lang="scss">
.border-radio-example-1 {
  border: 2px solid #a1a1a1;
  margin-top: 10px;
  padding: 10px 40px;
  background: #ddd;
  border-radius: 25px;
}

.border-radio-example-2 {
  background: forestgreen;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px 10px 10px 10px;
}

.border-radio-example-3 {
  background: forestgreen;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px 50px 30px;
}

.example-4 {
  background: forestgreen;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px 50px;
}
</style>
