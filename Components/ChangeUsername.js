import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {

    const {setUserData, isUserUpdating, userError, user} = useMoralis()

    const [Visible, setVisible] = useState(false)
    const [Text, setText] = useState('')

    const setUsername = () =>{
        setVisible(false)
        const username = ''+Text+'';
        if(!Text) return;
        setUserData({
            username,
        });
        setText('')
        
    } 

    return (
        <div className='text-sm ml-3'>
            <button 
                onClick={()=>setVisible(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </button>


            <div className={`backdrop-blur-md w-full h-full fixed left-0 top-0
            pointer-events-none	opacity-0 
            ${Visible && ' pointer-events-auto	opacity-100'}
            `}>
                <div className={`w-96 h-52 bg-green fixed left-2/4 top-2/4 bg-black rounded-lg shadow-lg grid place-content-center p-5 pt-1
                -translate-x-2/4 -translate-y-2/4 duration-1000
                pointer-events-none	opacity-0
                ${Visible && ' pointer-events-auto	opacity-100'}
                `}>
                    <h1 className='ml-auto'>
                    <svg onClick={()=>setVisible(false)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </h1>
                    <h1 className='text-xl text-center'>Enter your username<br/>(Current: {user.get('username')})</h1>
                    <div className='flex border-blue-400 border-2 rounded-full mt-3'>
                        <input className='outline-none px-5 py-3 rounded-l-full bg-slate-900'
                            placeholder='New Username'
                            type='text'
                            value={Text}
                            onChange={(e => {setText(e.target.value)})}
                        />
                        <button className='bg-slate-900 rounded-r-full px-3 bg-gradient-to-r from-gray-900 to-gray-500'
                        onClick={setUsername}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChangeUsername