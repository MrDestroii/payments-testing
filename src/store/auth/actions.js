import types from './types'

export default {
  setData: (field, value) => ({
    type: types.SET_DATA,
    payload: { field, value },
  }),

  signIn: data => ({
    type: types.SIGN_IN,
    payload: data,
  }),

  logout: () => ({
    type: types.LOGOUT,
  })
}
