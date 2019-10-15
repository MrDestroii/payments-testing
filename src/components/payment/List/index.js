import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as R from 'ramda'

import paymentSelectors from 'store/payment/selectors'

import routerActions from 'store/router/actions'

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

const mapDispatchToProps = dispatch => ({
  routerActions: bindActionCreators(routerActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
