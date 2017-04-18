import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state ={
	ifShow:"true"
}
const mutations={
   showPag:function(state){
   	  state.ifShow=true;
   },
   hidePag:function(state){
   	  state.ifShow=false
   }
}
const actions={
	showPag:function({commit}){
		commit("showPag")
	},
	hidePag:function({commit}){
		commit("hidePag")
	}
}
const getters={
     pag(state){
     	return state.ifShow;
     }
}
export default new Vuex.Store({
   	state,
	mutations,
	actions,
	getters
})