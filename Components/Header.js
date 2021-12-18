import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header() {
    const { user } = useMoralis();

    return (
        <div className='sticky top-0 w-full z-50 bg-black'>
            <div>
                {/* <div className='flex  '>
                    <h1 className='text-3xl text-white my-auto'>Welcome to Chat Net</h1>
                </div> */}
                <div className='text-white flex px-10 pt-5 w-screen max-w-2xl mx-auto border-b-2 border-blue-500 pb-5'>
                    {/* <div className='relative h-20 w-20'>
                        <Image layout="fill"
                        src="/transparentLogo.png"/>
                    </div> */}
                    {/* Avatar */}
                    <div className='relative h-16 w-16 border-white border rounded-full place-items-center'>
                        <Avatar
                        LogoutOnPress={true}/>
                    </div>
                    <h2 className='flex text-4xl font-bold truncate my-auto ml-3'>{user.get('username')}</h2>
                    <ChangeUsername/>

                </div>
            </div>
        </div>
    )
}

export default Header
