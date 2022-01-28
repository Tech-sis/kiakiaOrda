import React, { useState } from 'react'
import { Input, Button, Form, Descriptions, Space, Card } from 'antd'
import { MinusCircleTwoTone, PlusOutlined } from '@ant-design/icons'
import styles from '../styles/style.module.css'

const CreateOrder = () => {
  const [form] = Form.useForm()
  const [order, setOrder] = useState({
    username: '',
    product: '',
    qty: '',
    product1: '',
    qty1: '',
    product2: '',
    qty2: '',
  })

  const handleChange = (event) => {
    const { value, name } = event.target
    setOrder((prevValue) => ({ ...prevValue, [name]: value }))
    form.setFieldsValue({ sights: [] })
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
        <Card
          className={styles.formContainer}
          hoverable
          bordered
          bodyStyle={{ margin: '32px auto' }}
          style={{
            margin: 'auto',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        >
          <h2>Product Request Form</h2>
          <Form
            name="Product Request Form"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 14,
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
            <Form.List name="products">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, curValues) =>
                          prevValues.username !== curValues.username ||
                          prevValues.products !== curValues.products
                        }
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="Product Name"
                            name={[field.name, 'product1']}
                          >
                            <Input
                              name="product"
                              onChange={handleChange}
                              value={order.product}
                            />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Quantity"
                        name={[field.name, 'qty']}
                      >
                        <Input
                          onChange={handleChange}
                          value={order.qty}
                          name="qty"
                        />
                      </Form.Item>

                      <MinusCircleTwoTone
                        twoToneColor="#fff"
                        onClick={() => remove(field.name)}
                      />
                    </Space>
                  ))}

                  <Form.Item style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add products
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
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
                  height: '50px',
                  borderRadius: '4px',
                }}
              >
                PROCESS REQUEST
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </section>
      <section className={styles.requestInfo}>
        <Descriptions
          title="Request Info"
          layout="vertical"
          bordered
          column={{ xxl: 5, xl: 4, lg: 4, md: 4, sm: 2, xs: 1 }}
          // column={5}
        >
          <Descriptions.Item label="S/N">1</Descriptions.Item>
          <Descriptions.Item label="UserName">
            {order.username}
          </Descriptions.Item>
          <Descriptions.Item label="Product">{order.product}</Descriptions.Item>
          <Descriptions.Item label="Quantity">{order.qty}</Descriptions.Item>
        </Descriptions>
      </section>
    </>
  )
}

export default CreateOrder
