<template>
   <div class="articleBox"  v-loading="loading">
                <el-breadcrumb separator="/" >
                <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item >{{articleAllMsg.class}} </el-breadcrumb-item>
                <el-breadcrumb-item >{{articleAllMsg.title}} </el-breadcrumb-item>
              </el-breadcrumb>
        <h3 class="articlesTitle"> {{articleAllMsg.title}} </h3>
         <div class="timeSet"><i class="el-icon-time">&nbsp;{{articleAllMsg.time}}</i></div>
         <div class="articles" v-html='article'></div>
   </div>
</template>
<script>


import marked from 'marked'
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
      var articleId=this.$route.params.id;
      var urlstr='../src/data/'+articleId+'.md';
      this.$http.get('../src/data/page.txt').then(function(res){
          var id=parseInt(_this.$route.params.id)-1;
          _this.articleAllMsg=res.data[id]
          _this.loading=false;
      }).catch(function(e){
      console.log(e)
      });
      this.$http.get(urlstr).then(function(res){
             _this.article=marked(res.data)
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

body { font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;    font-size: 18px;    line-height: 18px;    color: #737373;  
    } 
 p { margin: 9px auto;
    line-height: 1.7;}
    h1,h2,h3,h4,h5,h6 {    color: #404040; line-height: 36px;}h1 {    margin-bottom: 18px;    font-size: 30px;}h2 {    font-size: 24px;}h3 {    font-size: 18px;}h4 {    font-size: 16px;}h5 {    font-size: 14px;}h6 {    font-size: 13px;}
    hr {    margin: 0 0 19px;    border: 0;    border-bottom: 1px solid #ccc;}
   code, pre { background: #324057;
    margin: auto;
    padding: 0.35em 1.5em;
    overflow: auto;
    color: #fff;
    line-height: 1.3rem;}
    pre code {   
    font-family:Arial;
    overflow: auto;
    padding: 1px 3px;    font-size: 14px; }

</style>



