import React from 'react'

import * as R from 'ramda'

import ErrorMessages from '../ErrorMessages'

import { Form } from 'react-bootstrap'

import tranformingStatuses from 'helpers/statuses'

const RadiosStatuses = props => {
  const { items, onClickRadio, currentValue, validationResult } = props

  const renderRadio = item => {
    return (
      <Form.Check
        key={item.value}
        type="radio"
        label={item.title}
        onChange={onClickRadio(item.value)}
        checked={R.equals(item.value, currentValue)}
      />
    )
  }

  return (
    <Form.Group>
      <Form.Label>Статус</Form.Label>
      {R.map(renderRadio)(tranformingStatuses(items))}
      <ErrorMessages validationResult={validationResult} />
    </Form.Group>
  )
}

export default RadiosStatuses
