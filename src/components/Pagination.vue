<template>
	<div class="block" v-show="pag">
	  <el-pagination
	     small
	    layout="prev, pager, next"
	    :total="10">
	  </el-pagination>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
  export default{
  watch:{
  "$route":function(to,from){
    if(to.path==="/Home"||to.path==="/html"||to.path==="/css"||to.path==="/js"||to.path==="/frame"){
     this.$store.dispatch("showPag")
    }
    else{ this.$store.dispatch("hidePag")}
  }
  },computed:mapGetters(["pag"])
  }
</script>
<style>
   .block{
   float:right;
   padding:50px 20%;
   }
</style>