/**
 *  用户信息
 *  customers models
 */

function state() {
    return {
        fetching: false,
        customerInfo: {}
    }
}

const mutations = {
    // customers
    LOAD_CUSTOMERS_INFO_FETCH(state, res) {
        state.fetching = res
    },

    LOAD_CUSTOMERS_INFO(state, res) {
        state.customerInfo = res
    }

}

export {
    state,
    mutations
}
