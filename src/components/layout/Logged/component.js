import React from 'react'
import PropTypes from 'prop-types'

import { Spinner } from 'react-bootstrap'

import './style.css'

const renderLoadingApp = () => {
  return (
    <div className="logged-spinner-wrapper">
      <Spinner animation="border" />
    </div>
  )
}

const Logged = props => {
  const { isInitApp } = props
  return isInitApp ? (
    <div>LoggedApp</div>
  ) : renderLoadingApp()
}

Logged.propTypes = {
  isInitApp: PropTypes.bool.isRequired,
}

export default Logged
