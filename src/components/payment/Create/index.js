import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import paymentActions from 'store/payment/actions'
import paymentSelectors from 'store/payment/selectors'

import userSelectors from 'store/user/selectors'

import Component from './component'

const mapStateToProps = state => ({
  name: paymentSelectors.getValueCreateDataByField(state)('name'),
  comment: paymentSelectors.getValueCreateDataByField(state)('comment'),
  date: paymentSelectors.getValueCreateDataByField(state)('date'),
  status: paymentSelectors.getValueCreateDataByField(state)('status'),
  price: paymentSelectors.getValueCreateDataByField(state)('price'),
  requisites: paymentSelectors.getValueCreateDataByField(state)('requisites'),
  statuses: paymentSelectors.getStatuses(state),
  userId: userSelectors.getAccountValueByField(state)('id'),
})

const mapDispatchToProps = dispatch => ({
  paymentActions: bindActionCreators(paymentActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
