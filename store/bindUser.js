/**
 *  用户是否绑定
 *  bindUser models
 */

function state() {
    return {
        isBind: '',
        bindRes: {}
    }
}

const mutations = {
    // customers
    LOAD_BIND_USER_STATUS(state, res) {
        console.log(res)
        state.isBind = res
    }
}

export {
    state,
    mutations
}
