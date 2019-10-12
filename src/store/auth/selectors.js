import { createSelector } from 'reselect'

import * as R from 'ramda'

const getState = state => R.defaultTo({})(R.prop('auth', state))

const getData = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('data', state))
)

export default {
  getValueByField: createSelector(
    getData,
    state => field => R.defaultTo('')(R.prop(field, state)),
  ),
  getData
}
