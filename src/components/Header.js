import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

const HeaderFunc = () => {
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="light" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/admin">Admin</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  )
}

export default HeaderFunc
