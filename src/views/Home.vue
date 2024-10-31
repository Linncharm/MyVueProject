<template>
  <div class="bolg-common-layout">
    <el-container>
      <el-header>
        Header
        <div class="header">
          <el-menu
            class="bolg-navigate"
            mode="horizontal"
            :ellipsis="false"
            router
          >
            <el-menu-item-group class="menu-group" mode="horizontal"
            >
              <el-menu-item index="/blog/project">
                Project1
              </el-menu-item>
              <el-menu-item index="2">
                Project2
              </el-menu-item>
              <el-menu-item index="3">
                Project3
              </el-menu-item>
              <el-menu-item index="4">
                Project4
              </el-menu-item>
              <el-menu-item index="5">
                Project5  
              </el-menu-item>
              <el-menu-item index="6">
                Project6
              </el-menu-item>
              <el-menu-item index="7">
                Project7
              </el-menu-item>
              <el-menu-item index="8">
                Project8
              </el-menu-item>
              <el-menu-item index="9">
                Project9
              </el-menu-item>
              <el-menu-item index="10">
                Project10
              </el-menu-item>
              <el-menu-item index="11">
                Project11
              </el-menu-item>
              
            </el-menu-item-group>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        Bolg-Main
        <RouterView/>
      </el-main>
    </el-container>
    
  </div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import {ElNotification} from "element-plus";
onMounted(()=>{
  ElNotification({
    title:'Welcome',
    message:'Welcome',
  })
})
</script>

<style scoped>
.el-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
} 

.el-menu-item-group{
  background: orange;
  max-width: 100%;
  width: fit-content;
}
.el-menu-item{
  background: mediumpurple;  
  display: inline-block;
  border-radius: 10px;
}

.el-header {
  background: pink;
  height: fit-content;
  width: 100%;
}
.el-menu{
  background: palegreen;
  height: 80px;
  margin: 5px;
  display: flex;
  justify-content: right;
}
.el-main{
  background: skyblue;
  width: 100%;
  flex-grow: 1;
}
</style>