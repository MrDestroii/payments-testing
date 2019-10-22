import types from './types'

export default {
  setIsLogged: value => ({
    type: types.SET_IS_LOGGED,
    payload: value,
  }),

  initApp: () => ({
    type: types.INIT_APP,
  }),

  setIsInit: value => ({
    type: types.SET_IS_INIT,
    payload: value,
  })
}
