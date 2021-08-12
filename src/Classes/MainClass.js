import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SidebarData} from '../components/Sidebar/SidebarData';
import Overview from './Overview';



function MainClass() {
    return (
        <>
            <Sidebar />
            <Overview/>          
        </>
    )
}

export default MainClass
