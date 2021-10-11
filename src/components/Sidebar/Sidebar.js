import {React, useState} from 'react'
import {SidebarData} from './SidebarData';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import {RiLayoutRightFill} from 'react-icons/ri';
import {FaTimes} from 'react-icons/fa';
import SubMenu from './SubMenu';

function Sidebar(props) {

    const [sidebar, setSidebar] = useState(false);
    
    
    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <div className={sidebar ? 'sidebar-container-active' : 'sidebar-container'}>
            <div className= {sidebar ? 'sidebar-toggle-active' : 'sidebar-toggle'} onClick={toggleSidebar}>
                {sidebar ? <FaTimes size={40}/> : <RiLayoutRightFill size={40}/>}
            </div>

            <div className= {sidebar ? 'sidebar-nav-active' : 'sidebar-nav'}>
                {SidebarData.map((item, index) => {
                    return <SubMenu handleClick={props.handleClick} item={item} key={index} />
                })};
            </div>

            
        </div>
    )
}

export default Sidebar
