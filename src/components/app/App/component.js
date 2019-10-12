import React from 'react'
import PropTypes from 'prop-types'

import AuthLayout from 'components/layout/Auth'
import LoggedLayout from 'components/layout/Logged'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const App = props => {
  const Layout = props.isLogged ? LoggedLayout : AuthLayout
  return (
    <div className="app">
      <Layout />
    </div>
  )
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default App
