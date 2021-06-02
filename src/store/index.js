import Vue from "vue"
import Vuex from "vuex"
import userInfo from './modules/userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuInfo: null, // 菜单
    userList: null, // 当前登录用户的个人信息
    tabIndex: '/pages/index/index', // 当前tab
  },
  mutations: {
    setMenuInfo(state, v) {
      state.menuInfo = v
    },
    setUserList(state, v){
      state.userList = v
    },
    settabIndex(state,v){
      state.tabIndex = v
    }

  },
  actions: {
    setMenuInfo(context){
      context.commit('setMenuInfo')
    },
    setUserList(context){
      context.commit('setUserList')
    },
    settabIndex(context){
      context.commit('settabIndex')
    }
  },
  modules: {
    userInfo
  }
})
