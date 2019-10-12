import React, { useCallback } from 'react'

import { InputGroup, FormControl, Button } from 'react-bootstrap'

import './style.css'

const Auth = props => {
  const { authActions, username, password } = props

  const handleChangeInputs = useCallback(({ target: { name, value } }) => {
    authActions.setData(name, value)
  }, [authActions])

  const handleOnSubmit = useCallback(() => {
    authActions.signIn({ username, password })
  }, [username, password, authActions])

  return (
    <div className="auth-wrapper">
      <div className="card">
        <div className="auth-body card-body">
          <div className="text-center mb-3">Выполните вход в аккаунт</div>
          <InputGroup className="mb-3" >
            <InputGroup.Prepend>
              <InputGroup.Text>Username</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="username" onChange={handleChangeInputs} value={username}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="password" name="password" onChange={handleChangeInputs} value={password}/>
          </InputGroup>
          <Button className="auth-button" onClick={handleOnSubmit}>Вход</Button>
        </div>
      </div>
    </div>
  )
}

export default Auth
