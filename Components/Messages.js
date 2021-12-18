import React, { useRef } from 'react'
import {ByMoralis, useMoralis, useMoralisQue, useMoralisQuery} from "react-moralis"
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 15;

function Messages() {
    const { user } = useMoralis();
    const EndOfMessagesRef = useRef(null);
    const { data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => 
            query
            .ascending('createdAt')
            .greaterThan('createdAt', new Date(Date.now()-1000*60*15)),
        [],
        {
            live: true,
        }
    );
    console.log(data)

    return (
        <div className='pb-56 z-50'>
            <div className='my-5 '>
                <ByMoralis 
                variant='dark'
                style={{marginLeft: "auto", marginRight: "auto"}}/>
            </div> 

            <div className='w-screen max-w-2xl mx-auto px-10'>
                {data.map(message123 => (
                    <Message
                    id={message123.id}
                    message = {message123}/>
                ))}
            </div>
            <div className='fixed bottom-5 w-full'>
                <div className='w-screen max-w-2xl mx-auto px-10 '>
                    <SendMessage EndOfMessagesRef = {EndOfMessagesRef}/>
                </div>
            </div>
            
            <div ref={EndOfMessagesRef} className='text-white text-center'>
                <p>You're up to date {user.get('username')}🎉</p>
            </div>
        </div>
    )
}

export default Messages
