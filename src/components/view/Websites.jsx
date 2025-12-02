import React, { useEffect, useState } from 'react'
import Nav from '../Nav'

export default function Websites({currentPage, setCurrentPage}) {
    useEffect(() => {
        setCurrentPage('websites')
    }, [])

    return (
        <div>
            <Nav currentPage={currentPage} />
        </div>
    )
}
