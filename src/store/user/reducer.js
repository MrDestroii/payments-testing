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

    case types.SET_ACCOUNT_BALANCE: {
      return {
        ...state,
        account: {
          ...state.account,
          balance: action.payload,
        }
      }
    }

    default:
      return state
  }
}
