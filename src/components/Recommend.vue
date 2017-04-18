<template>
    <el-card class="box-card" >
      <div class="clearfix">
        <span class="span" >推荐内容</span>
      </div>
      <router-link v-for="val in recommendList"  :to="'/article/'+val.id"  tag="div" class="item" :key='val.id'>  {{ val.title}} </router-link>
    </el-card>
</template>
<script>
    export default{
      data(){
        return {
        recommendList:[]
        }
        },
        mounted(){
        this.getRecommend();
        },
        methods:{
        getRecommend(){
        var _this=this;
        this.$http.get("../src/data/page.txt").then(function(res){
          var arr1=[];         //存储信息
          var arr2=_this.getFourDiff();
         arr2.forEach(function(ele,index){
            arr1.push(res.data[ele])
         })
        _this.recommendList=arr1;
        }).catch(function(e){
        console.log(e)
        })
        },getFourDiff(){
        let arr=[];
        for(let i=0;i<10;i++){
        let j=Math.floor(Math.random()*10)
        if(arr.indexOf(j)<0)
        arr.push(j);
        }
        return arr.slice(0,4);
        }
        }
      }
</script>
<style scoped>
  .text {
    font-size: 14px;
  }
  .item {
    padding: 35px 0 0 0;
    color:#696969;
  }
  .item:hover{
  cursor:pointer;
  color:#1F2D3D;
  text-decoration:underline;
  }
 .span{
  line-height:50px;
 }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both;
  }
   .clearfix{
   background:#475669;
     text-align:center;
     height:50px;
     margin:-20px;
     color:#fff;
   }
   .box-card{
   margin:70px 0;
   background:#eee;
   
   }
</style>
 