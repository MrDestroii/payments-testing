import { put, takeEvery } from 'redux-saga/effects'

import api from 'utils/api'

import paymentActions from 'store/payment/actions'

import types from './types'

function* createPayment(action) {
  try {
    const result = yield api.post('/payment', action.payload)
    console.log(result)
  } catch(error) {

  }
}

export function* getStasuses() {
  try {
    const result = yield api.get('/payment/statuses')
    yield put(paymentActions.getStatusesSuccess(result))
  } catch(error) {

  }
}

export function* getPayments(action) {
  try {
    const userId = action.payload
    const result = yield api.get(`/payment/${userId}`)
    yield put(paymentActions.getPaymentsSuccess(result))
  } catch(error) {

  }
}

function* paymentSaga() {
  yield takeEvery(types.CREATE_PAYMENT, createPayment)
  yield takeEvery(types.GET_PAYMENTS, getPayments)
}

export default paymentSaga
