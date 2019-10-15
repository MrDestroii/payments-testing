import { createSelector } from 'reselect'

import * as R from 'ramda'

const findPayment = id => item => R.equals(item.id, id)

const getState = state => R.defaultTo({})(R.prop('payment', state))

const getCreateData = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('create', state))
)

const getList = createSelector(
  getState,
  state => R.defaultTo([])(R.prop('list', state))
)

const getPaymentById = createSelector(
  getList,
  state => id => R.compose(R.defaultTo({}), R.find(findPayment(id)))(state)
)

const getFilterData = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('filter', state))
)

export default {
  getCreateData,

  getValueCreateDataByField: createSelector(
    getCreateData,
    state => field => R.defaultTo('')(R.prop(field, state))
  ),

  getValueFilterDataByField: createSelector(
    getFilterData,
    state => field => R.defaultTo('')(R.prop(field, state))
  ),

  getStatuses: createSelector(
    getState,
    state => R.prop('statuses', state)
  ),

  getSorting: createSelector(
    getState,
    state => R.defaultTo({})(R.prop('sorting', state))
  ),

  getList,

  getPaymentById
}
