import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactIcon from '../assets/react.svg'

export default function ProjectBubble({skill}) {
    return (
        <div className='drop'>
            <div className="content">
                {/* <img src={ReactIcon} alt="" /> */}
                <span></span>
                <h2>{skill}</h2>
                <span>Professional</span>
                <a href="">View More</a>
            </div>
        </div>
    )
}
