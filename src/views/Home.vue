<script setup lang="ts">
import Border from "../components/study/Border.vue";
import {ref} from "vue";

const value = ref('null')
const options = [
  {value: 'border', label: 'border'},
  {value: 'null', label: 'null'},
]

function selectClick(value: string) {
  console.log(value)
}
</script>

<template>
  <h1 :hidden="value == 'null'">Home</h1>
  <el-select filterable v-model="value" @change="selectClick(value)" class="m-2" placeholder="Select" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <Border v-if="value == 'border'"/>
</template>

<style scoped>

</style>
