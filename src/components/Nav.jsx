import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/NewDayCreatives.svg'

export default function Nav({ currentPage }) {
    return (
        <nav id='nav'>
            {currentPage === 'music' ? <>
                <div className='nav-logo-div'>
                    <Link to={'/arrangements'} className='navLink'>Arrangements</Link>
                    <Link to={'/'} className='nav-logo'><img src={Logo} /></Link>
                    <Link to={'/websites'} className='navLink'>Web Development</Link>
                </div>
            </> : 
            currentPage === 'arrangements' ? <>
                <div className='nav-logo-div'>
                    <Link to={'/music'} className='navLink'>Composer/Lyricist</Link>
                    <Link to={'/' } className='nav-logo'><img src={Logo} /></Link>
                    <Link to={'/websites'} className='navLink'>Web Development</Link>
                </div>
            </> :
            currentPage === 'websites' ? <>
                <div className='nav-logo-div'>
                    <Link to={'/music'} className='navLink'>Composer/Lyricist</Link>
                    <Link to={'/'} className='nav-logo'><img src={Logo} /></Link>
                    <Link to={'/websites'} className='navLink'>Arrangements</Link>
                </div>
            </> :
            <>
                <div className='nav-logo-div'>
                    <Link to={'/'} className='nav-logo'><img src={Logo} /></Link>
                </div>
            </>
            }

        </nav>
    )
}
