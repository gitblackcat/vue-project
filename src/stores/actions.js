import * as types from './types'

export default {
    SHOW_HEAD_FAIL: ({
        commit
    }) => {
        commit(types.HEAD_SHOW_FAIL)
    },
    HIDE_HEAD_SUCC: ({
        commit
    }) => {
        commit(types.HEAD_SHOW_SUCCESS)
    },
    hideLoading: ({
        commit
    }) => {
        commit(types.HIDE_LOADING)
    },
    showLoading: ({
        commit
    }) => {
        commit(types.SHOW_LOADING)
    },
    showFooter: ({
        commit
    }) => {
        commit(types.FOOTER_SHOW)
    },
    hideFooter: ({
        commit
    }) => {
        commit(types.FOOTER_HIDE)
    }
}