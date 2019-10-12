import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import appSelectors from 'store/app/selectors'

import Component from './component'

const mapStateToProps = state => ({
  isInitApp: appSelectors.getIsInit(state)
})

export default connect(
  mapStateToProps,
)(Component)
