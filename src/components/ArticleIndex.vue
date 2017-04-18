<template>
   <div class="articleIndex" >
       <div v-for="(item,index) in articleList" class="ul " >
        <div class="article ">
          <ul>
            <router-link :to="'/article/'+item.id" tag='li' class='blogTitle'>{{item.title}}</router-link>
            <li class="blogTime">
                <el-tooltip class="item" effect="dark" content="日期" placement="bottom">
                     <i class="el-icon-document">&nbsp;{{item.time}}</i>
                </el-tooltip>
            </li>
            <li class="blogPS">
                 <el-tooltip class="item" effect="dark" content="分类" placement="right">
                  <i class="el-icon-document">&nbsp;{{item.class}}</i>
                </el-tooltip>
            </li>                      
            <li class="text"> {{item.content}}</li>
            <router-link :to="'/article/'+item.id" tag='li' class='lookAll'>
               查看全文&nbsp;<i class="el-icon-d-arrow-right"></i>
            </router-link>
          </ul>
        </div>
      </div>
  </div>                      
</template>
<script>
  export default{
    data(){
      return {
        articleList:[]
      }    
    },mounted(){
         var _this=this;
         this.getData();
        this.$nextTick(function () {
           window.addEventListener("scroll",function(){
            let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            })
        })
     }
    ,
    methods:{
      getData(){
         var _this=this;
         this.$http.get("../src/data/page.txt").then(function(res){
            _this.articleList=res.data;
         }).catch(function(err){
         console.log(err)
         })
      }
    }

  }
</script>
