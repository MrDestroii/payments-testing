import { createSelector } from 'reselect'

import * as R from 'ramda'

const getState = state => R.defaultTo({})(R.prop('app', state))

export default {
  getIsLogged: createSelector(
    getState,
    state => R.defaultTo(false)(R.prop('isLogged', state))
  ),
  getIsInit: createSelector(
    getState,
    state => R.defaultTo(false)(R.prop('isInit', state))
  )
}
