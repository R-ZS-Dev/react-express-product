import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Space } from 'antd'
import { Header } from 'antd/es/layout/layout'

const NavBar = () => {
  return (
    <>
      <Layout>
        <Header>
          <Space>
            <div><Link className='text-white' to=''>Home</Link></div>
            <div><Link className='text-white' to='./pages/Blog'>Blog</Link></div>
            <div><Link className='text-white' to='./pages/ProductPage'>Product</Link></div>
            <div><Link className='text-white' to='./pages/contact'>Contact</Link></div>
          </Space>
        </Header>
      </Layout>
    </>
  )
}

export default NavBar
