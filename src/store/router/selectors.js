import { createSelector } from 'reselect'
import * as R from 'ramda'
import _ from 'lodash'

const getState = state => R.defaultTo({})(R.prop('router', state))

const getParams = props => R.defaultTo({})(R.path(['match', 'params'], props))

const getLocation = createSelector(
  getState,
  state => R.defaultTo({})(R.prop('location', state)),
)

export default {
  getPropByName: createSelector(
    getParams,
    params => name => R.defaultTo(null)(R.prop(name, params)),
  ),

  getCurrentUrl: createSelector(
    getLocation,
    location => R.defaultTo(null)(R.prop('pathname', location)),
  ),
}
