import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Favorite, Flight, LocalBar, MusicNote } from '@material-ui/icons';
import ReactIcon from '../assets/react.svg'
const StackImage = () => {
    return(
        <div className="stack-image">
            <img src={ReactIcon} alt="Stack" />
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        opacity: '.5',
        zIndex: '.4'
    },
    bubble: {
        position: 'absolute',
        animation: '$moveBubble linear infinite',
    },
    '@keyframes moveBubble': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(100vh)' },
    },
}));

const BubbleComponent = () => {
    const classes = useStyles();
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const createBubble = () => {
        const icons = [<StackImage />];
        // const icons = [<Favorite />, <Flight />, <LocalBar />, <MusicNote />];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * -100;
        const duration = Math.random() * 10 + 5;

        setBubbles((prevBubbles) => [
            ...prevBubbles,
            {
            icon: randomIcon,
            style: {
                left: `${posX}px`,
                top: `${posY}px`,
                animationDuration: `${duration}s`,
            },
            },
        ]);
        };

        const interval = setInterval(createBubble, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.container}>
        {bubbles.map((bubble, index) => (
            <div
            key={index}
            className={classes.bubble}
            style={bubble.style}
            >
            <IconButton style={{ color: '#5bc0de' }}>
                {bubble.icon}
            </IconButton>
            </div>
        ))}
        </div>
    );
};

export default BubbleComponent;
