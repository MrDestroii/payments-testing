import types from './types'

import { isAuthUser } from 'helpers/app'

const initialState = {
  isLogged: isAuthUser(),
  isInit: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_LOGGED: {
      return {
        ...state,
        isLogged: action.payload,
      }
    }

    case types.SET_IS_INIT: {
      return {
        ...state,
        isInit: action.payload,
      }
    }

    default:
      return state
  }
}
