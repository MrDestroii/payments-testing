import React from 'react'

import * as R from 'ramda'

import ErrorMessages from '../ErrorMessages'

import { Form } from 'react-bootstrap'

const createObjFromItem = (item, key) => ({
  value: key,
  title: item,
})

const RadiosStatuses = props => {
  const { items, onClickRadio, currentValue, validationResult } = props

  const tranformingItems = R.compose(R.values, R.mapObjIndexed(createObjFromItem))(items)

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
      {R.map(renderRadio)(tranformingItems)}
      <ErrorMessages validationResult={validationResult} />
    </Form.Group>
  )
}

export default RadiosStatuses
