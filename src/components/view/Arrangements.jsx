import React, { useEffect, useState } from 'react'
import Nav from '../Nav'

export default function Arrangements({currentPage, setCurrentPage}) {
    useEffect(() => {
        setCurrentPage('arrangements')
    }, [])

    return (
        <div>
            <Nav currentPage={currentPage} />
        </div>
    )
}
