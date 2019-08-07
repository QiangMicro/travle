import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    city:'上海'
  },
  // 创建actions
  // actions:{
  //   changeCity(ctx,city){
  //     // 通过ctx上下文调使用commit
  //     ctx.commit('changeState',city)
  //   }
  // },
  // 创建mutations,改变数据
  mutations:{
    changeCity(state,city){
      state.city=city
    },
    changeListCity(state,city){
      state.city=city
    }
  }

})