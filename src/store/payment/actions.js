import types from './types'

export default {
  setCreateData: (field, value) => ({
    type: types.SET_CREATE_DATA,
    payload: {field,value}
  }),

  clearCreateData: () => ({
    type: types.CLEAR_CREATE_DATA
  }),

  createPayment: data => ({
    type: types.CREATE_PAYMENT,
    payload: data,
  }),

  createPaymentSuccess: data => ({
    type: types.CREATE_PAYMENT_SUCCESS,
    payload: data,
  }),

  createPaymentFailure: error => ({
    type: types.CREATE_PAYMENT_FAILURE,
    payload: error,
  }),

  getStatusesSuccess: data => ({
    type: types.GET_STATUSES_SUCCESS,
    payload: data,
  }),

  getStatusesFailure: error => ({
    type: types.GET_STATUSES_FAILURE,
    payload: error,
  }),

  getPayments: userId => ({
    type: types.GET_PAYMENTS,
    payload: userId
  }),

  getPaymentsSuccess: data => ({
    type: types.GET_PAYMENTS_SUCCESS,
    payload: data
  }),

  getPaymentsFailure: error => ({
    type: types.GET_PAYMENTS_FAILURE,
    payload: error
  }),

  setFilterData: (field, value) => ({
    type: types.SET_FILTER_DATA,
    payload: { field, value }
  }),

  setSorting: column => ({
    type: types.SET_SORTING,
    payload: column,
  }),

}
