import './styles.css';
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'; 
import { faDivide } from '@fortawesome/free-solid-svg-icons';

import Message from '../Message'; 

const Messages = ({messages, name}) => {

    return (
        <ScrollToBottom className='messages'>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ScrollToBottom>
    );
};

export default Messages;