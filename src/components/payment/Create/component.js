import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import * as R from 'ramda'

import { Button, Modal, Form } from 'react-bootstrap'

import RadiosStatuses from './RadiosStatuses'

const Create = props => {
  const { paymentActions, name, comment, date, status, price, requisites, statuses, userId } = props
  const [isOpen, setOpen] = useState(false)

  const handleChangeOpen = useCallback(event => {
    setOpen(!isOpen)

    const isCancel = event ? R.compose(R.equals('cancel'), R.path(['target', 'name']))(event) : false

    if(isCancel) {
      paymentActions.clearCreateData()
    }
  }, [isOpen, paymentActions])

  const handleChangeData = useCallback(({target: { name, value }}) => {
    paymentActions.setCreateData(name, value)
  }, [paymentActions])

  const handleCreate = useCallback(() => {
    paymentActions.createPayment({
      name,
      comment,
      date,
      status,
      price,
      requisites,
      userId
    })
    paymentActions.clearCreateData()
    setOpen(false)
  }, [paymentActions, name, comment, date, status, price, requisites, userId])

  const handleClickRadio = useCallback(value => () => {
    paymentActions.setCreateData('status', value)
  }, [paymentActions])

  return (
    <div>
      <Button variant="primary" onClick={handleChangeOpen}>Создать платеж</Button>

      <Modal show={isOpen} onHide={handleChangeOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Создать платеж</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Название:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название"
                name="name"
                onChange={handleChangeData}
                value={name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Комментарий:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите комментарий"
                name="comment"
                onChange={handleChangeData}
                value={comment}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Дата:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                onChange={handleChangeData}
                value={date}
              />
            </Form.Group>
            <RadiosStatuses items={statuses} onClickRadio={handleClickRadio} currentValue={status}/>
            <Form.Group>
              <Form.Label>Сумма :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите сумму"
                name="price"
                onChange={handleChangeData}
                value={price}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Реквизиты:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите реквизиты"
                name="requisites"
                onChange={handleChangeData}
                value={requisites}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleCreate}>Создать</Button>
            <Button
              variant="primary"
              className="ml-2"
              onClick={handleChangeOpen}
              name="cancel"
            >
              Отмена
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

Create.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  requisites: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  statuses: PropTypes.objectOf(PropTypes.string).isRequired
}

export default Create
