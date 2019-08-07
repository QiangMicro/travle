import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 创建actions
  // actions:{
  //   changeCity(ctx,city){
  //     // 通过ctx上下文调使用commit
  //     ctx.commit('changeState',city)
  //   }
  // },
  // 创建mutations,改变数据
  mutations

})