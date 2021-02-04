import './styles.css';
import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form action="" className="form">
            <input 
                type="text" 
                className="input" 
                placeholder='Type a message...'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="submit" onClick={(event) => {sendMessage(event)}}>Send</button>
        </form>
    );
};

export default Input;