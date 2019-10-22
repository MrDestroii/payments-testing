import { connect } from "react-redux"
import { withRouter } from "react-router"

import routerSelectors from 'store/router/selectors'
import paymentSelectors from 'store/payment/selectors'

import Component from "./component"

const mapStateToProps = (state, props) => {
  const id = routerSelectors.getPropByName(props)('id')
  const payment = paymentSelectors.getPaymentById(state)(id)

  return {
    payment,
    statuses: paymentSelectors.getStatuses(state)
  }
}

export default withRouter(connect(mapStateToProps)(Component))
