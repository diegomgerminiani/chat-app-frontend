import './styles.css';
import React from 'react';

import ReactEmoji from 'react-emoji'; 

const Message = ({ message: { user, text }, name }) => {
    
    let isSendByUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) isSendByUser = true;

    return (
        isSendByUser ? 
        (
            <div className="messageContainer">
                <div className="messageGroup end">
                    <div className="messageBox blue">
                        <p className="messageText white">
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>
                    <p className="sentText pr-10">
                        {trimmedName}
                    </p>
                </div>
            </div>
        ) : (
            <div className="messageContainer">
                <div className="messageGroup start">
                    <div className="messageBox light">
                        <p className="messageText dark">
                            {ReactEmoji.emojify(text)}
                        </p>
                    </div>
                    <p className="sentText pl-10">
                        {user}
                    </p>
                </div>
            </div>
        )

        
    );
};

export default Message;