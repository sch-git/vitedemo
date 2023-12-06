<script setup lang="ts">
import BorderRadio from "../components/study/BorderRadio.vue";
import {ref} from "vue";
import BorderShadow from "../components/study/BorderShadow.vue";
import Gradients from "../components/study/Gradients.vue";

const value = ref('null')
const options = [
  {value: 'border-radio', label: 'border-radio'},
  {value: 'border-shadow', label: 'border-shadow'},
  {value: 'gradients', label: 'gradients'},
  {value: 'null', label: 'null'},
]

function selectClick(value: string) {
  console.log(value)
}
</script>

<template>
  <el-select filterable v-model="value" @change="selectClick(value)" class="m-2" placeholder="Select" size="large">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
  <BorderRadio v-if="value == 'border-radio'"/>
  <BorderShadow v-if="value == 'border-shadow'"/>
  <Gradients v-if="value == 'gradients'"/>
</template>

<style scoped>

</style>
