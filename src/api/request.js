import Fly from 'flyio/dist/npm/wx'
import store from '@/store'

const fly = new Fly() //创建fly实例

//设置超时
fly.config.timeout = 30000;
//配置请求基地址
fly.config.baseURL = process.env.VUE_APP_ENV_API_HOST

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  const token = store.getters.token
  // 在发送请求之前做些什么
  // let token = uni.getStorageSync('aliToken')
  if (token) {
      request.headers['Authorization'] = 'Bearer ' + token
  }
  if (request.url === '/api-auth/oauth/token') {
    request.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  console.log(request)
  return request
}, function(error) {
  console.log(error)
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
fly.interceptors.response.use((res) => {
  // 对响应数据做些事
  // if (!res.data) {
  // return Promise.reject(res)
  // }
  console.log(res)
  const code = res.status
  // 请求成功返回response.data
  if ((code >= 200 && code < 300) || code === 304) {
    return res.data
  }
  return Promise.reject(res)

}, (error) => {
  console.log('fly error', error)
  uni.showToast({
    icon: 'none',
    title: error.message,
    duration: 1000
  })
  return Promise.reject(error)
})

// const request = (method, url, data, options) => {
//   return fly.request(url, data, {
//     method: method,
//     ...options
//   })
// }

export default fly
