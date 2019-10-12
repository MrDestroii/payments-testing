import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createHashHistory as createHistory } from 'history'

import appReducer from 'store/app/reducer'

import authReducer from 'store/auth/reducer'
import authSaga from 'store/auth/saga'

import userReducer from 'store/user/reducer'

const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware(history)]

const reducers = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  app: appReducer,
  user: userReducer,
})

const store = applyMiddleware(...middleware)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

sagaMiddleware.run(authSaga)

export { store, history }
