import React from 'react'
import PropTypes from 'prop-types'

import { Spinner } from 'react-bootstrap'

import Header from 'components/layout/Logged/Header'
import CreatePayment from 'components/payment/Create'
import ListPayment from 'components/payment/List'

import './style.css'

const renderLoadingApp = () => {
  return (
    <div className="logged-spinner-wrapper">
      <Spinner animation="border" />
    </div>
  )
}

const Logged = props => {
  const { isInitApp, appActions } = props

  if (!isInitApp) {
    appActions.initApp()
  }

  return isInitApp ? (
    <div className="logged-app-wrapper">
      <Header />
      LoggedApp
      <CreatePayment />
      <ListPayment />
    </div>
  ) : renderLoadingApp()
}

Logged.propTypes = {
  isInitApp: PropTypes.bool.isRequired,
}

export default Logged
