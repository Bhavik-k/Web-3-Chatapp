import Image from 'next/image';
import React from 'react'
import { useMoralis } from 'react-moralis';

function Avatar({Username, LogoutOnPress}) {

    const { user, logout } = useMoralis();

    return (
    <Image
    className='rounded-full bg-white cursor-pointer hover:opacity-75 '
    src={`https://avatars.dicebear.com/api/open-peeps/${Username || user.get("username")}.svg`}
    onClick={logout}
    layout="fill"/>
    )
}

export default Avatar
