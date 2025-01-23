import React from 'react'
import Headee from './Headee'
import Container from './Container'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Headee/>
    <Container>
        <Outlet/>
    </Container>
    <Footer/>
    </>
  )
}

export default Layout