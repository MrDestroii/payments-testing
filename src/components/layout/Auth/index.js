import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import authActions from 'store/auth/actions'
import authSelectors from 'store/auth/selectors'

import Component from './component'

const mapStateToProps = state => ({
  username: authSelectors.getValueByField(state)('username'),
  password: authSelectors.getValueByField(state)('password')
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
