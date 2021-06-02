import request from './request'
import qs from 'qs'

export function token (data) {
  const param = qs.stringify({
    grant_type: 'wechat',
    jscode: data.code,
    client_id: 'mobile',
    client_secret: 'mobile'
    // grant_type:'mobile',
    // deviceId:'18368493541',
    // validCode:'12345',
    // client_id: 'mobile',
    // client_secret: 'mobile'
  })

  return request.post('/api-auth/oauth/token', param)
}
