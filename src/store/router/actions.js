import types from './types'

export default {
  push: path => ({
    type: types.PUSH,
    payload: path,
  }),
}
