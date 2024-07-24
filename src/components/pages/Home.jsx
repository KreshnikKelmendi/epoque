import React from 'react'
import Banner from '../banner/Banner'
import Category from '../banner/Category'
import MenuInHomePage from '../banner/MenuInHomePage'
import AboutInHomePage from '../about/AboutInHomePage'

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <MenuInHomePage />
      <AboutInHomePage />
    </>
  )
}

export default Home