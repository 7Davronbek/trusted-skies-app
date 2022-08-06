import React from 'react'
import Header from '../components/Header'
import Reviews from '../components/Reviews'
import Skylux from '../components/Skylux'
import Subscribe from '../components/Subscribe'
import Towns from '../components/Towns'
import Loader from '../components/Loader'


const Home = () => {
  return (
    <>
      <Header />
      <Towns />
      <Skylux />
      <Reviews />
      <Subscribe />
      <Loader />

    </>
  )
}

export default Home