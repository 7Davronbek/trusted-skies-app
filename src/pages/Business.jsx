import React from 'react'
import BusAnsver from '../components/BusAnsver'
import BusLines from '../components/BusLines'
import BusMessage from '../components/BusMessage'
import BusWhy from '../components/BusWhy'
import Bus_header from '../components/Bus_header'

const Business = () => {
    return (
        <>
            <Bus_header/>
            <BusMessage/>
            <BusAnsver/>
            <BusLines/>
            <BusWhy/>
        </>
    )
}

export default Business