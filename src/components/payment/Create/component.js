import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import * as R from "ramda";

import { Button, Modal, Form, Col } from "react-bootstrap";

import validation from "utils/validation";

import RadiosStatuses from "./RadiosStatuses";
import ErrorMessages from "./ErrorMessages";

const validations = {
  name: [
    {
      failureMessage: "Размер названия не может быть меньше трех",
      fn: value => R.lt(R.length(value), 3)
    }
  ],
  date: [
    {
      failureMessage: "Некорректная дата",
      fn: value => R.isEmpty(value)
    }
  ],
  requisites: [
    {
      failureMessage: "Реквизиты не могут быть пустыми",
      fn: value => R.isEmpty(value)
    }
  ],
  status: [
    {
      failureMessage: "Выберите значение",
      fn: value => R.isEmpty(value)
    }
  ]
};

const Create = props => {
  const {
    paymentActions,
    name,
    comment,
    date,
    status,
    price,
    requisites,
    statuses,
    userId,
    balance
  } = props;

  const resultValidations = validation(
    {
      ...validations,

      price: [
        {
          failureMessage: "Сумма больше баланса",
          fn: value => R.lt(balance, value)
        },
        {
          failureMessage: "Сумма не может быть пустой",
          fn: value => R.isEmpty(value)
        }
      ]
    },
    {
      price,
      name,
      date,
      status,
      requisites
    }
  );

  const isNotCanCreate = R.compose(
    R.includes(true),
    R.map(results => {
      const arrayisValid = R.map(R.prop("isValid"))(results);
      const isNotValid = R.includes(false, arrayisValid);
      return isNotValid;
    }),
    R.values
  )(resultValidations);

  const [isOpen, setOpen] = useState(false);

  const handleChangeOpen = useCallback(
    event => {
      setOpen(!isOpen);

      const isCancel = event
        ? R.compose(
            R.equals("cancel"),
            R.path(["target", "name"])
          )(event)
        : false;

      if (isCancel) {
        paymentActions.clearCreateData();
      }
    },
    [isOpen, paymentActions]
  );

  const handleChangeData = useCallback(
    ({ target: { name, value } }) => {
      paymentActions.setCreateData(name, value);
    },
    [paymentActions]
  );

  const handleCreate = useCallback(() => {
    if (!isNotCanCreate) {
      paymentActions.createPayment({
        name,
        comment,
        date,
        status,
        price,
        requisites,
        userId
      });
      paymentActions.clearCreateData();
      setOpen(false);
    }
  }, [
    paymentActions,
    name,
    comment,
    date,
    status,
    price,
    requisites,
    userId,
    isNotCanCreate
  ]);

  const handleClickRadio = useCallback(
    value => () => {
      paymentActions.setCreateData("status", value);
    },
    [paymentActions]
  );

  return (
    <div className="mt-2">
      <Col sm="2">
        <Button variant="primary" onClick={handleChangeOpen}>
          Создать платеж
        </Button>
      </Col>

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
              <ErrorMessages validationResult={resultValidations.name} />
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
              <ErrorMessages validationResult={resultValidations.date} />
            </Form.Group>
            <RadiosStatuses
              items={statuses}
              onClickRadio={handleClickRadio}
              currentValue={status}
              validationResult={resultValidations.status}
            />
            <Form.Group>
              <Form.Label>Сумма :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите сумму"
                name="price"
                onChange={handleChangeData}
                value={price}
              />
              <ErrorMessages validationResult={resultValidations.price} />
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
              <ErrorMessages validationResult={resultValidations.requisites} />
            </Form.Group>
            <Button variant={isNotCanCreate ? "secondary" : "primary"} onClick={handleCreate}>
              Создать
            </Button>
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
  );
};

Create.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  requisites: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  statuses: PropTypes.objectOf(PropTypes.string).isRequired,
  balance: PropTypes.number.isRequired
};

export default Create;
