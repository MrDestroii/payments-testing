import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createHashHistory as createHistory } from 'history'

const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, routerMiddleware(history)]

const reducers = combineReducers({
  router: connectRouter(history),
})

const store = applyMiddleware(...middleware)(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export { store, history }
