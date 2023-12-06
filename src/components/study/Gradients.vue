<script setup lang="ts">

</script>

<template>
  <p>渐变</p>
  <p>线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向</p>
  <p>径向渐变（Radial Gradients）- 由它们的中心定义</p>
  <div class="gradients-example-1">
    <p>线性渐变 - 从上到下（默认情况下）</p>
  </div>
  <div class="gradients-example-2">
    <p>线性渐变 - 从左到右</p>
  </div>
  <div class="gradients-example-3">
    <p>线性渐变 - 左上 -> 右下</p>
  </div>
  <div class="gradients-example-4">
    <p>线性渐变 - 自定义角度</p>
  </div>
  <div class="gradients-example-5"><p>线性渐变 - 多个颜色节点</p></div>
  <p>使用透明度 transparent</p>
  <p>为了添加透明度，我们使用 rgba() 函数来定义颜色节点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0
    表示完全透明，1 表示完全不透明</p>
  <div class="gradients-example-6">
    <p>从左边开始的线性渐变。起点是完全透明，慢慢过渡到完全不透明的红色</p>
  </div>
  <div class="gradients-example-7"><p>重复的线性渐变</p></div>
  <p>径向渐变</p>
  <p>
    径向渐变由它的中心定义。<br/>
    为了创建一个径向渐变，你也必须至少定义两种颜色节点。<br/>
    颜色节点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。<br/>
    默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是
    farthest-corner（表示到最远的角落）。<br/>
  </p>
  <div class="gradients-example-8"><p>默认</p></div>
  <div class="gradients-example-9"><p>颜色节点不均匀分布</p></div>
  <div class="gradients-example-10"><p>设置形状：形状为圆形的径向渐变<br/>circle 表示圆形，ellipse 表示椭圆形。默认值是
    ellipse。</p></div>
</template>

<style scoped>
.gradients-example-1 {
  background-image: linear-gradient(#e66465, #9198e5);
}

.gradients-example-2 {
  background-image: linear-gradient(to right, red, yellow);
}

.gradients-example-3 {
  background-image: linear-gradient(to bottom right, red, yellow);
}

.gradients-example-4 {
  background-image: linear-gradient(20deg, red, yellow);
}

.gradients-example-5 {
  background-image: linear-gradient(red, yellow, green);
}

.gradients-example-6 {
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}

.gradients-example-7 {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}

.gradients-example-8 {
  background-image: radial-gradient(red, yellow, green);
}

.gradients-example-9 {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}

.gradients-example-10 {
  background-image: radial-gradient(circle, red, yellow, green);
}
</style>
