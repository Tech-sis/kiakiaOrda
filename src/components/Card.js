import React, { useState } from 'react'
import { Input, Button, Form, Descriptions } from 'antd'
import styles from '../styles/style.module.css'

const CreateOrder = () => {
  const [order, setOrder] = useState({
    username: '',
    product: '',
    qty: '',
    product1: '',
    qty1: '',
    product2: '',
    qty2: '',
  })

  function handleChange(event) {
    const { value, name } = event.target
    setOrder((prevValue) => ({ ...prevValue, [name]: value }))
  }

  // function handleClick(e) {
  //   // setShowName(name)
  //   // setShowProduct(product)
  //   // setShowQty(qty)
  //   // setOrder(order)
  //   e.preventDefault()
  // }


  return (
    <>
      <section className={styles.cardContainer}>
        <h2>Product Request Form</h2>
        <Form
          name="Product Request Form"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Customer Name"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input
              onChange={handleChange}
              value={order.username}
              name="username"
            />
          </Form.Item>

          <Form.Item
            label="Product Name"
            name="product"
            rules={[
              {
                required: true,
                message: 'Please input your product!',
              },
            ]}
          >
            <Input
              name="product"
              onChange={handleChange}
              value={order.product}
            />
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="qty"
            rules={[
              {
                required: true,
                message: 'Please input product quantity!',
              },
            ]}
          >
            <Input onChange={handleChange} value={order.qty} name="qty" />
          </Form.Item>
          <Form.Item label="Product Name" name="product1">
            <Input
              onChange={handleChange}
              value={order.product1}
              name="product1"
            />
          </Form.Item>

          <Form.Item label="Quantity" name="qty1">
            <Input onChange={handleChange} value={order.qty1} name="qty1" />
          </Form.Item>
          <Form.Item label="Product Name" name="product2">
            <Input
              onChange={handleChange}
              value={order.product2}
              name="product2"
            />
          </Form.Item>

          <Form.Item label="Quantity" name="qty2">
            <Input onChange={handleChange} value={order.qty2} name="qty2" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              // onClick={handleClick}
              style={{
                margin: '16px 140px',
                height: '50px',
                fontSize: '18px',
                borderRadius: '4px',
              }}
            >
              PROCESS REQUEST
            </Button>
          </Form.Item>
        </Form>
      </section>
      <section className={styles.requestInfo}>
        <Descriptions
          title="Request Info"
          layout="vertical"
          bordered
          column={5}
        >
          <Descriptions.Item label="S/N">
            1
          </Descriptions.Item>
          <Descriptions.Item label="UserName">
            {order.username}
          </Descriptions.Item>
          <Descriptions.Item label="Product">
            {order.product} {order.qty}pcs
          </Descriptions.Item>
          <Descriptions.Item label="Product">
            {order.product1} {order.qty1}pcs
          </Descriptions.Item>
          <Descriptions.Item label="Product">
            {order.product2} {order.qty2}pcs
          </Descriptions.Item>
        </Descriptions>
      </section>
    </>
  )
}

export default CreateOrder
