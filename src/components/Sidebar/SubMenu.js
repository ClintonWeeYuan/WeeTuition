import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.css'


function SubMenu( {item}) {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);


    return (
        <div className='submenu-container'>
            <div onClick={item.subNav && showSubnav} className= {subnav? 'submenu-link-active' : 'submenu-link'} to={item.path}>
                <div className='submenu-label'>
                    {item.title}
                </div>
                <div className='submenu-arrow'>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </div>

            {subnav && item.subNav.map((item, index) => {
                return(
                    <Link className='sub-submenu' to={item.path} key={index}>
                        {item.title}
                    </Link>
                )
            })}
        </div>
    )
}

export default SubMenu
