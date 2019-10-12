import types from './types'

export default {
  setIsLogged: value => ({
    type: types.SET_IS_LOGGED,
    payload: value,
  })
}
