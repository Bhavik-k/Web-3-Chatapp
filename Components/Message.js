import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import TimeAgo from 'timeago-react';

function Message({ message }) {
    const {user} = useMoralis();

    const IsUserMessage = message.get('ethAddress') === user.get('ethAddress')
    return (
        <div >
            <div className={`flex items-end space-x-2 relative my-2 ${
                IsUserMessage &&"justify-end"
            }`}>

                <div className={`relative w-12 h-12 mx-2 ${
                    IsUserMessage && 'order-last'
                }`}>
                    <Avatar
                    Username={message.get('username')}/>
                </div>

                <div className={`flex-col text-white space-x- font-semibold flex  px-7 py-2 rounded-lg ${
                        IsUserMessage ? 
                        'rounded-br-none bg-amber-600' :
                        'rounded-bl-none bg-blue-700'
                    }`}>
                    <p className='text-lg'>{message.get("message")}</p>
                    <p className={`font-light text-sm
                    ${IsUserMessage ? 'ml-auto' : 'mr-auto'}
                    `}>
                    <TimeAgo datetime={message.createdAt}/>
                    </p>
                </div>
            </div>
            <div className={`flex items-end space-x-2 relative my-2 text text-white ${
                    IsUserMessage &&"justify-end"
                }`}>
                <p>{message.get("username")}</p>
            </div>
        </div>
        // <div className='text-white rounded-lg bg-amber-400'>
        //     <p>{message.get("message")}</p>
        // </div>
    )
}

export default Message
