import { put, takeEvery, call } from 'redux-saga/effects'

import types from './types'

export function* getAccount(action) {
  try {
    console.log('Get')
  } catch(error) {
    console.log(error)
  }
}

function* userSaga() {
  yield takeEvery(types.GET_ACCOUNT, getAccount)
}

export default userSaga
