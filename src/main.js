import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import Axios from 'axios'
import "./assets/css/animate.css"
import "./assets/css/main.css"
import "./assets/css/reset.css"

 // import elemnt-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store.js'
Vue.use(ElementUI)
//配置路由
Vue.use(VueRouter)
const router=new VueRouter({
	mode: 'history',
	routes
})
Vue.prototype.$http = Axios 




new Vue({
	store,
	router,
  el: '#app',
  render: h => h(App)
})
