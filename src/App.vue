<script setup lang="ts">

</script>

<template>
<!--  test-->
  <div class="app">
    <slot name="title"></slot>
  </div>
  <RouterView/>
</template>

<style scoped>

</style>

<script setup lang="ts">
import ElementPlus from "element-plus";
</script>


<style scoped>
.el-header{
  background: aquamarine;
}
.el-aside{
  background: #f3d4ac;
}
.el-main{
  background: #72dfea;
}
.el-footer{
  background: #ea9a9a;
}
</style>
