import React, { useState } from 'react';
import './TopNav.css';
import { Menu } from '@mui/icons-material';
import { CancelOutlined } from '@mui/icons-material';
export default function TopNav() {
    const [showSideNav, setShowSideNav] = useState(false);

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };

    return (
        <div className="topnav">
            <div className="web_title">Leston</div>
            <div className="menu_icon" onClick={toggleSideNav}>
                <Menu style={{color: "white"}}/>
            </div>
            <div className={`sidenav ${showSideNav ? 'show' : ''}`}>
                <div className="close_icon" onClick={toggleSideNav}>
                    <CancelOutlined />
                </div>
                <div className="sidenav_content">
                    <div className="topnav_item">Home</div>
                    <div className="topnav_item">About</div>
                    <div className="topnav_item">Service</div>
                    <div className="topnav_item">Portfolio</div>
                    <div className="topnav_item">Contact</div>
                </div>
            </div>
        </div>
    );
}
