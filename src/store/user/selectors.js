import { createSelector } from 'reselect'

import * as R from 'ramda'

const getState = state => R.defaultTo({})(R.prop('user', state))

const getAccount = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('account', state))
)

export default {
  getAccount,
  getAccountValueByField: createSelector(
    getAccount,
    state => field => R.prop(field, state)
  ),
}
