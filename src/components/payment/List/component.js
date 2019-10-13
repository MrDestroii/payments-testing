import React from 'react'

import * as R from 'ramda'

import { Table, Col } from 'react-bootstrap'

const renderItemBody = item => {
  return (
    <tr key={item.id}>
      <th>{item.name}</th>
      <th>{item.comment}</th>
      <th>{item.date}</th>
      <th>{item.status}</th>
      <th>{item.price}</th>
      <th>{item.requisites}</th>
    </tr>
  )
}

const ListPayment = props => {
  const { items } = props
  return (
    <Col sm="6" className="mt-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Название</th>
            <th>Комментарий</th>
            <th>Дата платежа</th>
            <th>Статус</th>
            <th>Сумма</th>
            <th>Реквизиты</th>
          </tr>
        </thead>
        <tbody>
          {R.map(renderItemBody)(items)}
        </tbody>
      </Table>
    </Col>
  )
}

export default ListPayment
