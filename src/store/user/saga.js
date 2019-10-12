import { put, takeEvery, call } from 'redux-saga/effects'

import userActions from 'store/user/actions'

import api from 'utils/api'

import types from './types'

export function* getAccount(action) {
  try {
    const result = yield call(api.get, '/users/3d75f536-c24e-49cd-9cbc-85e60c6ffcb4')
    yield put(userActions.getAccountSuccess(result))
  } catch(error) {
    console.log(error)
  }
}

function* userSaga() {
  yield takeEvery(types.GET_ACCOUNT, getAccount)
}

export default userSaga
