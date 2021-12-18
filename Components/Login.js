import React, {useState} from 'react'
import Image from  "next/image"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

import { useMoralis } from 'react-moralis';



function Login() {
    const { isAuthenticated, authenticate, isAuthenticating } = useMoralis();
    // const [isActive, setActive] = useState(false);

    // if (isAuthenticated){
    //     setActive(flase)
    // }

    return (
        <div className='text-white'>

            <div className='absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 z-50 item-center justify-center place-content-center flex flex-col'>
                {/* <Flip> */}
                    <img src="/transparentLogo.png"
                    className={isAuthenticating ? 'animate-spin w-48 h-48 ': 'w-48 h-48 '}/>
                {/* </Flip> */}

                <Zoom bottom>
                    <button
                    disabled={isAuthenticating}
                    onClick={()=>{
                        // console.log(isActive)
                        authenticate()

                    }} className='
                    shadow-lg 
                    hover:shadow-xl hover:scale-105 active:scale-95 
                    duration-200
                    my-10  z-50 text-xl font-semibold  py-5 px-5 rounded-xl 
                    bg-gradient-to-r from-red-500  via-violet-500  to-indigo-500'>
                        {isAuthenticating? 'Loading Please wait ...' : 'Login to Talk Net'}
                        </button>
                </Zoom>
                
            </div>

            <div>
                <Image src="https://d1otjdv2bf0507.cloudfront.net/images/Article_Images/ImageForArticle_4983(1).jpg"
                layout='fill'
                objectFit='cover'/>
                {/* <Image src="https://img.freepik.com/free-vector/neon-light-arrow-direction-perspective_1017-22033.jpg?size=626&ext=jpg"
                layout='fill'
                objectFit='cover'/> */}
            </div>
        </div>
    )
}

export default Login
