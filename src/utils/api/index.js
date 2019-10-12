import axios from 'axios'

import { getAccessToken } from 'helpers/app'

import config from './config'

const api = axios.create(config)

const basic = (url, method, data) => api({
  headers: {
    Authorization: getAccessToken(),
  },
  method,
  url,
  data,
}).then(response => response.data)

export default {
  auth: data => basic('/auth/signin', 'post', data),
  post: (url, data) => basic(`/api${url}`, 'post', data),
  get: url => basic(`/api${url}`, 'get'),
  delete: url => basic(`/api${url}`, 'delete'),
  put: (url, data) => basic(`/api${url}`, 'put', data),
}
