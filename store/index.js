/**
 *  所以的action都在这个文件
 */
import axios from '~/plugins/axios'
// global actions
export const actions = {
    // 全局服务初始化
    nuxtServerInit(store, { params, route, isServer, req }) {
        const initAppData = []
        console.log(req.url)
        initAppData.push('')
        return Promise.all(initAppData)
    },
    loadUserInfo({commit}) {
        return axios.get('~assets/data/bind.json').then(response => {
            commit('user/LOAD_USER_INFO', response.data)
        })
    }
}
