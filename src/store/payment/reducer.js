import * as R from 'ramda'

import types from './types'

const initialState = {
  create: {
    date: new Date().toISOString().substr(0, 10),
  },
  list: [],
  statuses: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CREATE_DATA: {
      const { field, value } = action.payload
      return {
        ...state,
        create: {
          ...state.create,
          [field]: value,
        }
      }
    }

    case types.CLEAR_CREATE_DATA: {
      return {
        ...state,
        create: initialState.create,
      }
    }

    case types.GET_STATUSES_SUCCESS: {
      return {
        ...state,
        statuses: action.payload,
      }
    }

    case types.CREATE_PAYMENT_SUCCESS: {
      const addingNewPaymentList = R.append(action.payload)(state.list)
      return {
        ...state,
        list: addingNewPaymentList,
      }
    }

    case types.GET_PAYMENTS_SUCCESS: {
      return {
        ...state,
        list: action.payload,
      }
    }

    default:
      return state
  }
}
