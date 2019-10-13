import types from './types'

export default {
  getAccount: () => ({
    type: types.GET_ACCOUNT,
  }),

  getAccountSuccess: data => ({
    type: types.GET_ACCOUNT_SUCCESS,
    payload: data
  }),

  getAccountFailure: error => ({
    type: types.GET_ACCOUNT_FAILURE,
    payload: error,
  }),

  setAccountBalance: value => ({
    type: types.SET_ACCOUNT_BALANCE,
    payload: value,
  })
}
