import React from 'react'
import ResultHeader from '../components/ResultHeader'
import ResultMain from '../components/ResultMain'
import Subscribe from '../components/Subscribe'

const Result = ({search}) => {
    return (
        <>
            <ResultHeader search={search} />
            <ResultMain />
            <Subscribe />
        </>
    )
}

export default Result