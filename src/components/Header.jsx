import React, { useState } from 'react'
import { BiSearchAlt, BiMenuAltLeft } from 'react-icons/bi';
import SideMenu from './SideMenu';

function Header() {
    const [menuHidden, setMenuHidden] = useState(true);
    const handleToggleMenu = () => {
        setMenuHidden(prev => !prev)
    }
    return (
        <nav>
            <SideMenu hidden={menuHidden} handleToggleMenu={handleToggleMenu}/>
            <BiMenuAltLeft onClick={handleToggleMenu} size='1.8rem'/>
            <BiSearchAlt size='1.8rem'/>
        </nav>
    )
}

export default Header