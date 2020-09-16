import request from '../utils/request'
import Api from '../utils/config'

export function getData(params) {
  return request({
    url: Api.IndexUrl,
    method: 'POST',
    data: params,
  })
}
