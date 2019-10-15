import { connect } from "react-redux"
import { withRouter } from "react-router"

import routerSelectors from 'store/router/selectors'

import Component from "./component"

const mapStateToProps = (state, props) => ({
  id: routerSelectors.getPropByName(props)('id')
})

export default withRouter(connect(mapStateToProps)(Component))
