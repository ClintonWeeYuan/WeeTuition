import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.css'


function SubMenu(props) {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);



    return (
        <div className='submenu-container'>
            <div onClick={props.item.subNav && showSubnav} className= {subnav? 'submenu-link-active' : 'submenu-link'} to={props.item.path}>
                <div className='submenu-label'>
                    {props.item.title}
                </div>
                <div className='submenu-arrow'>
                    {props.item.subNav && subnav ? props.item.iconOpened : props.item.subNav ? props.item.iconClosed : null}
                </div>
            </div>

            {subnav && props.item.subNav.map((item, index) => {
                return(
                    <div onClick={props.handleClick} className='sub-submenu' ytube={item.ytube} exercise={item.exercise} to={item.path}  key={index}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default SubMenu
