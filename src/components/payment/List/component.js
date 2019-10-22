import React, { useCallback } from 'react'
import classNames from 'classnames'

import * as R from 'ramda'

import { Table, Col, InputGroup, FormControl, Form } from 'react-bootstrap'

import transformingStatuses from 'helpers/statuses'

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg'

import configTable from './config'
import './style.css'

const renderItemBody = onClick => item => {
  return (
    <tr key={item.id} onClick={onClick(item.id)} className="payment-item">
      {R.map(({ field }) => <th key={field}>{R.prop(field, item)}</th>)(configTable)}
    </tr>
  )
}

const renderItemsHead = (onClick, sorting) => {
  return (
    <React.Fragment>
      {R.map(({ textHead, field }) => {
        const isSortingColumn = R.equals(field, sorting.column)
        return (
          <th key={textHead}>
            <div className="payment-table-head-item" onClick={onClick(field)}>
              {textHead}
              <div className="icons-wrapper">
                <IconArrow className={classNames('arrow-icon', {
                  'arrow-reverce': R.equals('desc', sorting.type) && isSortingColumn
                })} />
                {!isSortingColumn && <IconArrow className="arrow-icon arrow-reverce" />}
              </div>

            </div>
          </th>
        )
      })(configTable)}
    </React.Fragment>
  )
}

const ListPayment = props => {
  const { items, routerActions, paymentActions, nameFilter, statusFilter, statuses, sorting } = props

  const handleOnClickItem = useCallback(id => () => {
    routerActions.push(`/payment/${id}`)
  }, [routerActions])

  const handleChangeFilterName = useCallback(({ target: { value } }) => {
    paymentActions.setFilterData('name', value)
  }, [paymentActions])

  const handleChangeFilterStatus = useCallback(({ target: { value } }) => {
    paymentActions.setFilterData('status', R.symmetricDifference(statusFilter, [value]))
  }, [paymentActions, statusFilter])

  const handleClickHeadItem = useCallback(field => () => {
    paymentActions.setSorting(field)
  }, [ paymentActions ])

  return (
    <Col sm="6" className="mt-2">
      <InputGroup className="mb-3" >
        <InputGroup.Prepend>
          <InputGroup.Text>Поиск по названию</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Название..." onChange={handleChangeFilterName} value={nameFilter} />
      </InputGroup>
      <Form>
        <Form.Text>Фильтр по статусу</Form.Text>
        {
          R.map(item => (
            <React.Fragment key={item.value}>
              <Form.Check
                value={item.value}
                label={item.title}
                onChange={handleChangeFilterStatus}
                checked={R.includes(item.value, statusFilter)}
              />
            </React.Fragment>
          ))(transformingStatuses(statuses))
        }
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            {renderItemsHead(handleClickHeadItem, sorting)}
          </tr>
        </thead>
        <tbody>
          {R.map(renderItemBody(handleOnClickItem))(items)}
        </tbody>
      </Table>
    </Col>
  )
}

export default ListPayment
