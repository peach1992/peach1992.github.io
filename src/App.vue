<template>
    <div class="main">
        <NavHeader></NavHeader>
        <el-row :gutter="10" >
          <el-col :xs="24" :sm="24" :md="18" :lg="18">
          <transition enter-active-class="bounceInLeft" >
             <router-view class="animated" v-show="true"></router-view>
          </transition>
          <Pagination></Pagination>
          </el-col>
           <el-col :xs="24" :sm="24" :md="5" :lg="5"><Recommend></Recommend></el-col>
        </el-row>
       <Copyright></Copyright>
    </div>
</template>

<script>
import Personal from './components/Personal.vue'
import Articles from './components/ArticleIndex.vue'
import Pagination from './components/Pagination.vue'
import NavHeader from './components/Nav.vue'
import Recommend from './components/Recommend.vue'
import Copyright from './components/Copyright.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{
   Articles,Pagination,Personal,NavHeader,Recommend,Copyright
  }
}
</script>

<style scoped>

</style>
