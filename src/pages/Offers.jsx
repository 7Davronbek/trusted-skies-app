import React, { useEffect, useState } from 'react'
import Book1 from '../components/Book1'
import Loader from '../components/Loader'
import OffBook from '../components/OffBook'
import OffHeader from '../components/OffHeader'
import OffPartner from '../components/OffPartner'
import OffTowns from '../components/OffTowns'
import OffWorld from '../components/OffWorld'

const Offers = () => {

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
          < OffHeader />
          < OffWorld />
          {/* < OffTowns /> */}
          < OffPartner />
          < Book1 />
          {/* < OffBook /> */}
        </>}





    </>
  )
}

export default Offers