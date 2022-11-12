import React, { useEffect, useState } from 'react'
import ConCity from '../components/ConCity'
import ConHead from '../components/ConHead'
import ConIcon from '../components/ConIcon'
import ConWe from '../components/ConWe'
import Loader from '../components/Loader'
import Subscribe from '../components/Subscribe'

const Contacts = () => {
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
                    <ConHead />
                    <ConCity />
                    <ConWe />
                    <ConIcon />
                    <Subscribe />

                </>}

        </>
    )
}

export default Contacts