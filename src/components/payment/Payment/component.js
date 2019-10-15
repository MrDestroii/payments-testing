import React from 'react'

import * as R from 'ramda'

import { ListGroup } from 'react-bootstrap'

const Payment = props => {
  const { payment: { name, comment, date, status, price, requisites }, statuses } = props

  return (
    <ListGroup>
      <ListGroup.Item>Название: {name}</ListGroup.Item>
      <ListGroup.Item>Комментарий: {comment}</ListGroup.Item>
      <ListGroup.Item>Дата: {date}</ListGroup.Item>
      <ListGroup.Item>Статус: {R.prop(status, statuses)}</ListGroup.Item>
      <ListGroup.Item>Сумма: {price}</ListGroup.Item>
      <ListGroup.Item>Реквизиты: {requisites}</ListGroup.Item>
    </ListGroup>
  )
}

export default Payment
