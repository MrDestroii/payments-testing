import { createSelector } from 'reselect'

import * as R from 'ramda'

const getState = state => R.defaultTo({})(R.prop('payment', state))

const getCreateData = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('create', state))
)

export default {
  getCreateData,
  getValueCreateDataByField: createSelector(
    getCreateData,
    state => field => R.defaultTo('')(R.prop(field, state))
  ),
  getStatuses: createSelector(
    getState,
    state => R.prop('statuses', state)
  ),
  getList: createSelector(
    getState,
    state => R.defaultTo([])(R.prop('list', state))
  )
}
