import React, {useState} from 'react'
import { useMoralis } from 'react-moralis';

function SendMessage({EndOfMessagesRef}) {
    const { user, Moralis } = useMoralis();

    const [Message, setMessage] = useState('');

    const sendMessage = (e) => {

        e.preventDefault();
        
        if(!Message)return;
        
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages.save({
                message: Message,
                username: user.get('username'),
                ethAddress: user.get('ethAddress')
            }).then((message)=>{
                
                },
                (error) =>{
                        console.log(error.message);
                    }
        )
        EndOfMessagesRef.current.scrollIntoView({behavior: "smooth"})
        setMessage("")
        }
        
        
        return (
            <form className='flex flex-grow bg-slate-900 rounded-full border-2 border-blue-400'>
            <input className=' flex-grow outline-none bg-transparent text-white  px-6 my-4'
            placeholder={`Enter a Message ${user.get('username')}`}
            type='text'
            value={Message}
            onChange={(e => {setMessage(e.target.value)})}
            ></input>


            <button className='font-bold font z-50 text-white px-6  rounded-r-full bg-gradient-to-r from-gray-900 to-gray-500'
            type='submit'
            onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default SendMessage
