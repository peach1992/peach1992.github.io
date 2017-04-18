import ArticleIndex from './components/ArticleIndex.vue'
import Article from './components/article.vue'
import Html from './components/Html.vue'
import Css from './components/Css.vue'
import Js  from './components/Js.vue'
import Frame  from './components/Frame.vue'

export default[{
	path:"/Home",component:ArticleIndex
},{
  path:"/html",component:Html
},{
  path:"/css",component:Css
},{
  path:"/js",component:Js
},{
  path:"/frame",component:Frame
},
{path:"/article/:id",component:Article}
,{ 
    path: '/', 
    redirect: '/Home' 
  },
  { 
    path: '*', 
    redirect: '/Home' 
  }]