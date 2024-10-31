<script setup lang="ts">

</script>

<template>
<!--  test-->
  <div class="app">
    <slot name="title"></slot>
  </div>
    <el-scrollbar 
    height="100vh" 
    native="false"
    background="burlywood"
    class="app-custom-scrollbar"
    >
      <RouterView/>
  </el-scrollbar>
</template>

<style scoped>

</style>

<script setup lang="ts">
import ElementPlus from "element-plus";
</script>


<style scoped>
.app-custom-scrollbar{
  background:gray;  /* 使滚动条固定在右侧 */
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
}
.app-custom-scrollbar ::-webkit-scrollbar{
  width: 8px;
}
.app-custom-scrollbar ::-webkit-scrollbar-thumb{
  background: greenyellow;
} 
.app-custom-scrollbar ::-webkit-scrollbar-track{
  background:gray;
}
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
