import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import appActions from 'store/app/actions'
import appSelectors from 'store/app/selectors'

import Component from './component'

const mapStateToProps = state => ({
  isInitApp: appSelectors.getIsInit(state)
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
