import './styles.css';
import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'; 
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'; 

const InfoBar = ({ room }) => {
    return (
        <div className="infobar">
            <div className="left-inner-container">
                <Icon className='online-icon' icon={faCheck} alt='online icon'/>
                <h3>{room}</h3>
            </div>
            <div className="right-inner-container">
                <a href="/"><Icon className='close-icon' icon={faTimes} alt='close icon'/></a>
            </div>
        </div>
    );
};

export default InfoBar;