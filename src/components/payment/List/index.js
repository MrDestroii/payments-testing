import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as R from 'ramda'

import paymentSelectors from 'store/payment/selectors'
import paymentActions from  'store/payment/actions'

import routerActions from 'store/router/actions'

import Component from './component'

const changeStatusValuePayment = statuses => item => {
  return {
    ...item,
    status: R.prop(item.status, statuses)
  }
}

const filerListPayment = ({ nameFilter, statusFilter }) => item => {
  return R.all(R.equals(true))([
    R.includes(R.toLower(nameFilter), R.toLower(item.name)),
    R.includes(item.status, statusFilter) || R.isEmpty(statusFilter)
  ])
}

const chooseSortFn = type => R.equals('asc', type) ? R.descend : R.ascend

const mapStateToProps = state => {

  const statuses = paymentSelectors.getStatuses(state);

  const nameFilter = paymentSelectors.getValueFilterDataByField(state)('name')
  const statusFilter = paymentSelectors.getValueFilterDataByField(state)('status')

  const sorting = paymentSelectors.getSorting(state)

  const items = R.compose(
    R.map(changeStatusValuePayment(statuses)),
    R.sortWith([chooseSortFn(sorting.type)(R.prop(sorting.column))]),
    R.filter(filerListPayment({ nameFilter, statusFilter }))
  )(paymentSelectors.getList(state))

  return {
    items,
    nameFilter,
    statusFilter,
    statuses,
    sorting
  }
}

const mapDispatchToProps = dispatch => ({
  routerActions: bindActionCreators(routerActions, dispatch),
  paymentActions: bindActionCreators(paymentActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
