import { createSelector } from 'reselect'
import _ from 'lodash'

const getState = state => _.get(state, 'router')

const getParams = props => _.get(props, 'match.params', {})

const getLocation = createSelector(
  getState,
  state => _.get(state, 'location', {}),
)

export default {
  getPropByName: createSelector(
    getParams,
    params => name => _.get(params, name, null),
  ),

  getCurrentUrl: createSelector(
    getLocation,
    location => _.get(location, 'pathname', null),
  ),
}
