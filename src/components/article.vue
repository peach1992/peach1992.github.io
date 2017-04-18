<template>
   <div class="articleBox"  v-loading="loading">
                <el-breadcrumb separator="/" >
                <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item >{{articleAllMsg.class}} </el-breadcrumb-item>
                <el-breadcrumb-item >{{articleAllMsg.title}} </el-breadcrumb-item>
              </el-breadcrumb>
        <h3 class="articlesTitle"> {{articleAllMsg.title}} </h3>
         <div class="timeSet"><i class="el-icon-document">&nbsp;{{articleAllMsg.time}}</i></div>
         <div class="articles" v-html='article'></div>
   </div>
</template>
<script>
  export default{
    data(){
      return{
        article:"",
        articleAllMsg:{},
        loading:true,
        title:"首页"
      }
    },beforeRouteUpdate (to, from, next) {
        next();
       this.getArticleData();
    },
    mounted(){
      this.getArticleData();
    },
    methods:{
    getArticleData(){
      var _this=this;
      this.$http.get('../src/data/page.txt').then(function(res){
          var id=parseInt(_this.$route.params.id)-1;
          var arr=res.data[id].allcontent;
          var arr2=[]
          for(let i=0;i<arr.length;i++){
            if(arr[i].h!=undefined){
            arr2.push("<h1 class='title' style='font-size:20px;text-align:center;color: #88acdb;line-height:2.5'>"+"---"+arr[i].h+"---"+"</h1>")
            } 
            else{arr2.push("<p style='display:block;line-height:1.7;color:#666;padding-bottom:20px'>"+arr[i].p+"</p>")}
          }
          _this.article=arr2.join("")
          _this.articleAllMsg=res.data[id]
          _this.loading=false;
      }).catch(function(e){
      console.log(e)
      })
    }
    }
  }
</script>
<style scoped>
     .bread{
       font-family:Michroma;
       color:#97a8be;
            }
     .articleBox{
     width:auto;
     margin:50px 50px;
     padding:35px;
     background:#eee;
    }
    .articlesTitle{
    float:left;
    display:block;
    width:80%;
    font-family:Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','\5FAE\8F6F\96C5\9ED1',sans-serif,Times;
    color:#1982D1;
    font-size:26px;
    text-decoration: none;
    padding: 20px 0px 0 0px;
    height: 33px;
    line-height: 33px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
    .timeSet{
    float:right;
    padding:20px 0 0 0px;
    height:33px;
    line-height:33px;
    text-overflow:ellipsis;
    }
    .articles{
  clear:both;
    }

</style>



