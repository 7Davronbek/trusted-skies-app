import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Reviews from '../components/Reviews'
import Skylux from '../components/Skylux'
import Subscribe from '../components/Subscribe'
import Towns from '../components/Towns'
import Loader from '../components/Loader'
import Book1 from '../components/Book1'
import Clients from '../components/Clients'


const Home = () => {

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)
    }, 1500);
  })



  return (

    <>
      {isLoader ? <>
        <Loader />
      </> :
        <>
          <Header />
          {/* <Towns /> */}
          <Skylux />
          {/* <Reviews /> */}
          <Book1 />
          {/* <Clients /> */}
          <Subscribe />
        </>}


    </>
  )
}

export default Home