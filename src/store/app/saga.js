import { put, takeEvery, call, all } from 'redux-saga/effects'

import { getAccount } from 'store/user/saga'
import { getStasuses } from 'store/payment/saga'
import appActions from 'store/app/actions'

import types from './types'

function* initApp() {
  try {
    yield all([
      call(getAccount),
      call(getStasuses),
    ])

    yield put(appActions.setIsInit(true))
  } catch(error) {
    console.log(error)
  }
}

function* appSaga() {
  yield takeEvery(types.INIT_APP, initApp)
}

export default appSaga
