import React from 'react'

import * as R from 'ramda'

import { Form} from 'react-bootstrap'

const ErrorMessage = ({ text }) => (
  <Form.Text className="text-danger" key={text}>
    {text}
  </Form.Text>
)

const ErrorMessages = ({ validationResult }) => {
  return R.addIndex(R.map)((result, index) => R.equals(false, result.isValid) && (<ErrorMessage text={result.failureMessage} key={result.text + index}/>))(validationResult)
}

export default ErrorMessages
