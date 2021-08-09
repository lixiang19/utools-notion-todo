<template>
  <div id="nav">
    {{a}}
    {{res}}
  </div>
  <router-view/>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import notion from './api/notion'
const a = ref(1)
let res = reactive({})

onMounted(() => {
  res = notion.getList()
})
</script>

<style lang="scss">
#app {

}
</style>
