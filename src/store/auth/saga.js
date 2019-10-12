import { put, takeEvery, call } from 'redux-saga/effects'

import {
  setAccessToken, removeAccessToken, setUserId, removeUserId, getUserId,
} from 'helpers/app'
import api from 'utils/api'

import appActions from 'store/app/actions'

import types from './types'

function* login(action) {
  try {
    const result = yield call(api.auth, action.payload)
    yield call(setAccessToken, result.accessToken)
    yield call(setUserId, result.userId)
    yield put(appActions.setIsLogged(true))
  } catch(error) {
    console.log(error)
  }
}

function* authSaga() {
  yield takeEvery(types.SIGN_IN, login)
}

export default authSaga
