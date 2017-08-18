import Vue from 'vue'
import axios from 'axios'
import apiConfig from '~/config/server'

const service = axios.create({
    baseURL: apiConfig.baseUrl
})

// 通用的请求拦截
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 通用的返回拦截
service.interceptors.response.use(response => {
    const code = response.data.code
    if (code === 1) {
        return response.data
    } else {

    }
}, error => {
    return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
