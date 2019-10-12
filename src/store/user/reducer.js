import types from './types'

const initialState = {
  account: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACCOUNT_SUCCESS: {
      return {
        ...state,
        account: action.payload,
      }
    }

    default:
      return state
  }
}
