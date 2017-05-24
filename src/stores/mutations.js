import actions from './actions'
import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    HIDE_LOADING,
    SHOW_LOADING,
    FOOTER_SHOW,
    FOOTER_HIDE
} from './types'

const state = {
    loading: false,
    headShow: true,
    footerShow: true
}

const mutations = {
    [HEAD_SHOW_SUCCESS](state) {
        state.headShow = true
    },
    [HEAD_SHOW_FAIL](state) {
        state.headShow = false
    },
    [HIDE_LOADING](state) {
        state.loading = false
    },
    [SHOW_LOADING](state) {
        state.loading = true
    },
    [FOOTER_SHOW](state) {
        state.footerShow = true
    },
    [FOOTER_HIDE](state) {
        state.footerShow = false
    }
}

const getters = {
    headShow(state) {
        return state.headShow
    },
    loading(state) {
        return state.loading;
    },
    footerShow(state) {
        return state.footerShow;
    }
}

export default {
    state,
    mutations,
    getters
}