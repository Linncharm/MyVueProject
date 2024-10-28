<script setup lang="ts">

  import {useRouter} from "vue-router";
  import {Document, Location} from "@element-plus/icons-vue";
  import Tree from './Tree.vue'
  const router = useRouter();
  // function change(value:string) {
  //   router.push({name:value});
  // }

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <RouterLink to="/home">Home</RouterLink>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar height="600px" native="false">
            <el-menu
                default-active="/home"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
            >

              <el-sub-menu index="1">

                <template #title>
                  <el-icon><location/></el-icon>
                  <span>Project One</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/tree">
                    <el-icon><document/></el-icon>
                    Tree
                  </el-menu-item>
                  <el-menu-item index="/home/table">
                    <el-icon><document/></el-icon>
                    Table
                  </el-menu-item>
                  <el-menu-item index="/home/svg">
                    <el-icon><document/></el-icon>
                    Svg
                  </el-menu-item>
                  <el-menu-item index="1-4">item one</el-menu-item>
                  <el-menu-item index="1-5">item one</el-menu-item>
                  <el-menu-item index="1-6">item one</el-menu-item>
                  <el-menu-item index="1-7">item one</el-menu-item>
                  <el-menu-item index="1-8">item one</el-menu-item>
                  <el-menu-item index="1-9">item one</el-menu-item>
                  <el-menu-item index="1-10">item one</el-menu-item>
                  <el-menu-item index="1-11">item one</el-menu-item>
                  <el-menu-item index="1-12">item one</el-menu-item>
                  <el-menu-item index="1-13">item one</el-menu-item>
                  <el-menu-item index="1-14">item one</el-menu-item>
                  <el-menu-item index="1-15">item one</el-menu-item>
                </el-menu-item-group>

              </el-sub-menu>
              <el-sub-menu index="2">

                <template #title>
                  <el-icon><location/></el-icon>
                  <span>Project Two</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="/home/svg">
                    <el-icon><document/></el-icon>
                    item one
                  </el-menu-item>
                  <el-menu-item index="/home/table">item one</el-menu-item>
                  <el-menu-item index="1-3">item one</el-menu-item>
                  <el-menu-item index="1-4">item one</el-menu-item>
                  <el-menu-item index="1-5">item one</el-menu-item>
                  <el-menu-item index="1-6">item one</el-menu-item>
                  <el-menu-item index="1-7">item one</el-menu-item>
                  <el-menu-item index="1-8">item one</el-menu-item>
                  <el-menu-item index="1-9">item one</el-menu-item>
                  <el-menu-item index="1-10">item one</el-menu-item>
                  <el-menu-item index="1-11">item one</el-menu-item>
                  <el-menu-item index="1-12">item one</el-menu-item>
                  <el-menu-item index="1-13">item one</el-menu-item>
                  <el-menu-item index="1-14">item one</el-menu-item>
                  <el-menu-item index="1-15">item one</el-menu-item>
                </el-menu-item-group>

              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main>

            <RouterView v-slot="{ Component }">
              <component :is="Component" >
                <template #title>
                  <span>Project One From Slot</span>
                </template>
              </component>
            </RouterView>
            
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
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