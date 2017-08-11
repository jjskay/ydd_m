/**
 *  所以的action都在这个文件
 */

// global actions
export const actions = {
    // 全局服务初始化
    nuxtServerInit(store, { params, route, isServer, req }) {
        const initAppData = []
        console.log(req.url)
        initAppData.push('')

        return Promise.all(initAppData)
    }
}
