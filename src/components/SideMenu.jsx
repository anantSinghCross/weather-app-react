import React from 'react'
import { BiX } from 'react-icons/bi'
import { BiLocationPlus } from "react-icons/bi";

function SideMenu({ hidden, handleToggleMenu }) {
    const classString = hidden ? 'sidemenu-container' : 'sidemenu-container sidemenu-container-open' ;
    return (
        <div className={classString}>
            <div className='sidemenu-header'>
                <BiX color='white' size={'1.8rem'} onClick={handleToggleMenu}/>
                <div className='sidemenu-live'>LIVE</div>
            </div>
            <div className='sidemenu-location'>
                <p><BiLocationPlus/> CURRENT LOCATION</p>
                <h2>New York, United States</h2>
            </div>
        </div>
    )
}

export default SideMenu;