import React from 'react'
import styles from '../styles/style.module.css'
import { Layout } from 'antd'

const { Footer } = Layout
const FooterFunc = () => {
  return (
    <Footer style={{ background: '#00296b' }}>
      <div className={styles.footer}>
        &copy; 2021 Kiakia Orda - All Rights Reserved
      </div>
    </Footer>
  )
}

export default FooterFunc
