import { connect } from 'react-redux'

import * as R from 'ramda'

import paymentSelectors from 'store/payment/selectors'

import Component from './component'

const mapStateToProps = state => {

  const statuses = paymentSelectors.getStatuses(state);

  const items = R.map(item => {
    return {
      ...item,
      status: R.prop(item.status, statuses)
    }
  })(paymentSelectors.getList(state))

  return {
    items,
  }
}

export default connect(
  mapStateToProps,
)(Component)
