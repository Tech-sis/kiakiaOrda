import { List, Card, Avatar } from 'antd'
import React from 'react'

const data = []
for (let i = 0; i <= 5; i++) {
  data.push({
    key: i,
    title: `Customer ${i}`,
    product: 'Product Name',
    qty: '32',
  })
}

const Order = () => {
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<h6>{item.title}</h6>}
              description={<span>{item.product}</span>}
            />
            {item.qty}
          </List.Item>
        )}
      />
    </>
  )
}

export default Order
