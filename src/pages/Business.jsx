import React, { useEffect, useState } from 'react'
import BestDealsTown from '../components/BestDealsTown'
import Book1 from '../components/Book1'
import BusAnsver from '../components/BusAnsver'
import BusLines from '../components/BusLines'
import BusMessage from '../components/BusMessage'
import BusWhy from '../components/BusWhy'
import Bus_header from '../components/Bus_header'
import Loader from '../components/Loader'

const Business = () => {

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
                    <Bus_header />
                    <BestDealsTown />
                    {/* <Book1 /> */}
                    {/* <BusMessage /> */}
                    {/* <BusAnsver /> */}
                    {/* <BusLines /> */}
                    {/* <BusWhy /> */}
                </>}
        </>
    )
}

export default Business