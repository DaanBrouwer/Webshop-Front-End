import React from 'react';
import Messages from './Messages';

const ChatWindow = (props) => {
    const chat = props.chat
        .map(m => <Messages
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div>
            {chat}
        </div>
    )
};

export default ChatWindow;