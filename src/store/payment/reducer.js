import * as R from 'ramda'

import types from './types'

const initialState = {
  create: {
    date: new Date().toISOString().substr(0, 10),
  },
  list: [],
  statuses: {},
  filter: {
    status: [],
  },
  sorting: {
    column: null,
    type: null
  }
}

const typeCalc = (currentType, { prevColumn, newColumn}) => {
  switch(currentType) {
    case 'asc':
      return R.equals(prevColumn, newColumn) ? 'desc' : 'asc'
    case 'desc':
      return 'asc'
    default:
      return 'asc';
  }
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

    case types.SET_FILTER_DATA: {
      const { field, value } = action.payload
      return {
        ...state,
        filter: {
          ...state.filter,
          [field]: value,
        }
      }
    }

    case types.SET_SORTING: {
      const newColumn = action.payload
      const type = typeCalc(state.sorting.type, {
        prevColumn: state.sorting.column,
        newColumn
      })
      return {
        ...state,
        sorting: {
          column: newColumn,
          type,
        },
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
