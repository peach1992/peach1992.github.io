<template>
  <div class="nav">
    <el-menu theme="dark" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" >
       <el-menu-item index="1"><router-link to='/Home' tag="div">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">前端</template>
        <router-link to='/html' tag="div"> <el-menu-item index="2-1">HTML(5)</el-menu-item></router-link>
        <router-link to='/css' tag="div"> <el-menu-item index="2-2">CSS(3)</el-menu-item></router-link>
        <router-link to='/js' tag="div"> <el-menu-item index="2-3">JavaScript</el-menu-item></router-link>
      </el-submenu>
       <el-menu-item index="3"><router-link to='/frame' tag="div">框架</router-link></el-menu-item>
  
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>

  .el-menu-demo{
  padding-left:200px;
  }
  .main{
  color:#fff;
  }


</style>