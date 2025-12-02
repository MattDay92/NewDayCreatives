import React from 'react'
import Logo from '../images/NewDayCreatives.svg'
import { Link } from 'react-router-dom'
import '../../Home.css'

export default function Home({currentPage, setCurrentPage}) {
  return (
    <div id='home'>
        <div className='HomeLogo'>
            <img src={Logo} />
        </div>
        <div className='HomeLinksDiv'>
            <Link to={'/music'} className='HomeLink'>

            </Link>
            <Link to={'arrangements'} className='HomeLink'>
                
            </Link>
            <Link to={'websites'} className='HomeLink'>
                
            </Link>
            <Link to={'/'} className='HomeLink'>
                
            </Link>
        </div>
    </div>
  )
}
