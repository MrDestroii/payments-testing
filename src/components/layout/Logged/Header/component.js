import React, { useCallback } from "react"
import PropTypes from "prop-types"

import { Button } from 'react-bootstrap'

import "./style.css"

const Header = props => {
  const { username, balance, authActions } = props;

  const handleLogout = useCallback(() => {
    authActions.logout()
  }, [authActions])

  return (
    <div className="navbar bg-info text-light">
      <div className="user-info-wrapper">
        <div>
          Username:
          <span className="user-info-item-value">{username}</span>
        </div>
        <div>
          Баланс:
          <span className="user-info-item-value">{balance}</span>
        </div>
      </div>
      <Button onClick={handleLogout}>Выйти</Button>
    </div>
  )
}

Header.propsTypes = {
  username: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
}

export default Header;
