import { Table, Input } from 'antd'
import React from 'react'
import styles from '../styles/style.module.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    responsive: ['md']
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (text) => <Input placeholder='0' name='price' type='number' />,
  },
]

const data = []
for (let i = 1; i < 5; i++) {
  data.push({
    key: i,
    name: `Customer ${i}`,
    qty: 32,
    product: `Bag`,
  })
}

const Order = () => {
  return (
    <div className={styles.orderContainer}>
    <div className={styles.orderDetails}>Order Details</div>
      <Table columns={columns} dataSource={data} size='small'/>
    </div>
  )
}

export default Order
