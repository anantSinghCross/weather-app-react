import React from 'react'
import { BiSearchAlt, BiMenuAltLeft } from 'react-icons/bi';

function Header() {
    return (
        <nav>
            <BiMenuAltLeft size='1.8rem'/>
            <BiSearchAlt size='1.8rem'/>
        </nav>
    )
}

export default Header