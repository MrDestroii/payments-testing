import types from './types'

const initialState = {
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA: {
      const { field, value } = action.payload
      return {
        ...state,
        data: {
          ...state.data,
          [field]: value,
        }
      }
    }

    case types.CLEAR_DATA: {
      return {
        ...state,
        data: initialState.data,
      }
    }

    default:
      return state
  }
}
