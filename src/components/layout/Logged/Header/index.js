import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import authActions from 'store/auth/actions'
import userSelectors from 'store/user/selectors'

import Component from './component'

const mapStateToProps = state => ({
  username: userSelectors.getAccountValueByField(state)('username'),
  balance: userSelectors.getAccountValueByField(state)('balance'),
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
