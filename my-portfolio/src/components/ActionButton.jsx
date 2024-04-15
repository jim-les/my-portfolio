import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import "./Style.css";
import { Add } from '@mui/icons-material';
import { AddIcCallOutlined } from '@mui/icons-material';
import { CurrencyBitcoin } from '@mui/icons-material';
import { ChatBubble } from '@mui/icons-material';
import { Android } from '@mui/icons-material';
import { DarkMode } from '@mui/icons-material';
import { LightMode } from '@mui/icons-material';
import { ModeEdit } from '@mui/icons-material';
import { DockOutlined } from '@mui/icons-material';
import { ColorLens } from '@mui/icons-material';
const ActionButton = ({ onClick, mode, ismode,  label }) => {
    const [floataction, isfloatAction] = useState(false);
    
    const handleClick = () => {
        isfloatAction(!floataction);
    };

    const handleChangeMode = () => {
        if (mode === 'dark') {
            ismode('light');
        } else if (mode === 'light') {
            ismode('');
        } else {
            ismode('dark');
        }
    };


    return (
        <div>
            
            <button className={`actionBtn ${floataction ? 'rotate' : ''}`} onClick={handleClick}>
                <Add />
            </button>
            
            <div className={`floating_buttons ${floataction ? 'show' : 'hide'}`}>
                <div className="floating_items" onClick={handleChangeMode} >
                {mode === 'dark' && (
                    <DarkMode style={{color: 'white'}} />
                )}
                {mode === 'light' && (
                    <LightMode style={{color: 'white'}} />
                )}
                {mode === '' && (
                    <ColorLens style={{color: 'white'}} />
                )}
                </div>
                <div className="floating_items">
                    <DockOutlined style={{ color: "#fff", fontSize: '30px' }} />
                </div>
                <div className="floating_items">
                    <AddIcCallOutlined style={{ color: "#fff", fontSize: '30px' }} />
                </div>
                <div className="floating_items">
                    <CurrencyBitcoin style={{ color: "#fff", fontSize: '30px' }} />
                </div>
            </div>
        </div>
    );
};

export default ActionButton;
