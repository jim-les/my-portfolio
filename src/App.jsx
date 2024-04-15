import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Typewriter from 'typewriter-effect';
import myImage from './assets/jimleston_osoi.png';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { AddIcCallSharp } from '@mui/icons-material';

import ProjectBubble from './components/ProjectBubble';
import ActionButton from './components/ActionButton';
import ThankYouModal from './components/ThankYouModal';
export default function App() {
    const [mode, ismode] = useState('');

    const handleToMedia = (media) => {
        switch(media) {
            case 'github':
                window.open(''); // Add your github link here
                break;
            case 'linkedin':
                window.open(''); // Add your linkedin link here
                break;
            case 'twitter':
                window.open(''); // Add your twitter link here
                break;
            case 'whatsapp':
                window.open('https://wa.me/254113159363'); // Add your whatsapp link here
                break;
            default:    
                break;
        }
    }

    const handleClick = () => {
        if (mode === 'dark') {
            ismode('light');
        } else if (mode === 'light') {
            ismode('');
        } else {
            ismode('dark');
        }
    };

    return (
        <div className={`home-page ${mode}`}>
            <TopNav />
            {/* <BubbleComponent /> */}
            <div className="main_content">
                <div className='profile-info'>
                    <h1><b>Hi, I'm Jimleston Osoi</b></h1>
                    {/* add  the type writer effect to the line bellowe */}
                    <Typewriter
                        options={{
                            strings: ['Fullstack Developer', 'AI and ML Guru', 'Network Management && Design '],
                            autoStart: true,
                            loop: true,
                            css: true, // Enable CSS styling
                            wrapperClassName: 'typewriter-wrapper', // Add a class to the wrapper
                            cursorClassName: 'typewriter-cursor', // Add a class to the cursor
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(1000)
                            .deleteChars(1)
                            .typeString(' ')
                            .pauseFor(1000)
                            .start();
                        }}
                    />
                    <p className="about-me">
                        I'm Jimleston Osoi, a seasoned full-stack developer fluent in JavaScript, React, and Node.js. Crafting elegant solutions to complex problems is my forte. From revolutionizing user experiences to enhancing performance, I've led impactful projects with finesse.
                    </p>
    
                    <div style={{display: 'flex', gap: '30px'}}>
                        <button className="hire_me_btn" style={{ color: mode === '' || mode === 'dark' ? 'white' : 'black' }}>Hire Me</button>
                        <button className="contact_me_btn" style={{ color: mode === '' || mode === 'dark' ? 'white' : 'black' }}> <AddIcCallSharp /> Contact Me</button>
                    </div>

                    <div className="social_media">
                        <div className="media_item"> <GitHub style={{ color: mode === '' || mode === 'dark' ? 'white' : 'black' }} onClick={() => handleToMedia('github')}/> </div>
                        <div className="media_item"> <LinkedIn style={{color: '#0077b5'}} onClick={() => handleToMedia('linkedin')}/> </div>
                        <div className="media_item"> <Twitter style={{color: '#1da1f2'}} onClick={() => handleToMedia('twitter')}/> </div>
                        <div className="media_item"> <WhatsApp style={{color: '#25d366'}} onClick={() => handleToMedia('whatsapp')}/> </div>
                    </div>
                </div>

                <div className="image_cont">
                    <img src={myImage} alt="Jimleston Osoi"  />
                </div>
            </div>

            <div className="portfolio">
                <h1 className="text-primary" style={{textAlign: 'center'}}><b>My Skills</b></h1>
                <div className="portfolio_container">

                    <ProjectBubble skill={'Fullstack Development'} />
                    <ProjectBubble skill={'AI && ML Guru'}/>
                    <ProjectBubble skill={'Network Management'}/>
                </div>

                <h1 className="text-primary" style={{textAlign: 'center'}}><b>My Portfolio</b></h1>

            </div>

            <ActionButton onClick={handleClick} mode={mode} ismode={ismode} label="Click Me" />
            <ThankYouModal />
        </div>
    )
}
