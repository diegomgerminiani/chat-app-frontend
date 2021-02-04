import './styles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-container">
            <div className="join-box">
                <div className="heading">CHAT APP</div>
                <div className='input-group'>
                    <label htmlFor="input-name" className="input-label">Name</label>
                    <input id='input-name' type="text" className="input" onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <div className='input-group'>
                    <label htmlFor="input-room" className="input-label">Room</label>
                    <input id='input-room' type="text" className="input" onChange={(event) => {setRoom(event.target.value)}}/>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <buttom className="sign-in" type='submit'>Sign In</buttom>
                </Link>
            </div>
        </div>
    );
}; 

export default Join;