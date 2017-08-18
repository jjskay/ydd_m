/**
 *  所以的action都在这个文件
 */
import Service from '~plugins/axios'

// global actions
export const actions = {
    // 全局服务初始化
    nuxtServerInit(store, { params, route, isServer, req }) {
        const initAppData = []
        if (req.url.indexOf('/customer/') > -1) {
            params.id && initAppData.push(store.dispatch('loadCustomersInfo'), params)
        }
        return Promise.all(initAppData)
    },

    // 获取客户信息
    loadCustomersInfo({ commit }, params = {}) {
        // 开启loading
        commit('customer/LOAD_CUSTOMERS_INFO_FETCH', true)
        return Service.get(`m/customers/${params.id}`)
                .then(response => {
                    commit('customer/LOAD_CUSTOMERS_INFO_FETCH', false)
                    if (response && response.code === 1) {
                        commit('customer/LOAD_CUSTOMERS_INFO', response.data)
                    }
                }, err => {
                    commit('REQUEST_ADMIN_INFO_FAILURE', err)
                })
    }
}
