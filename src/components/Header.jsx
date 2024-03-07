import React from 'react'
import { BiSearchAlt, BiMenuAltLeft } from 'react-icons/bi';

function Header() {
    return (
        <nav>
            <BiMenuAltLeft size='2rem'/>
            <BiSearchAlt size='2rem'/>
        </nav>
    )
}

export default Header