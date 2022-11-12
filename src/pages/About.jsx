import React, { useEffect, useState } from 'react'
import AboutHeader from '../components/AboutHeader'
import Loader from '../components/Loader';
import Skylux from '../components/Skylux';
import Book1 from '../components/Book1';

const About = () => {

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
          <Skylux />
          <AboutHeader />
          <Book1 />

        </>}
    </>
  )
}

export default About