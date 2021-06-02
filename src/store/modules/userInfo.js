const state = {
  userInfo: null,
  userInfoObj: null,
  deptInfo: null
}

const getters = {
  token: state => state.userInfo?.access_token
}

// 申明同步方法
const mutations = {
  // 存数据
  getUserInfo(state,obj) {
    state[obj.typeName] = obj.typeNum
  },
  setUserInfo(state,obj) {
    state.userInfo = obj
  },
  setUserInfoObj(state,obj) {
    state.userInfoObj = obj
  },
  setDeptInfo(state,obj) {
    state.deptInfo = obj
  }
}

// 申明异步方法
const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
