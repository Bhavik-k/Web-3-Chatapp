import Head from 'next/head'
import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Header from '../Components/Header';
import Login from '../Components/Login'
import Messages from '../Components/Messages';


export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  // const IsAuthenticated = false;
  if(!isAuthenticated) return <Login/>;
  
  
  return (
    <div className='h-screen overflow-y-scroll overflow-x-hidden
      

    bg-gradient-to-tl from-gray-800 via-gray-900 to-black
    '>
      {/* bg-gradient-to-br from-green-500 via-indigo-500 to-sky-700 */}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='max-w-sceeen-2xl mx-auto z-30'>
        {/* Header */}
        <Header/>
        {/* message */}
        <Messages/>
      </div>

      {/* <h1>your logged in Bro</h1>
      <button onClick={logout} className='shadow-lg 
                    hover:shadow-xl hover:scale-105 active:scale-95 
                    duration-200
                    my-5  z-50 text-xl font-semibold  py-3 px-7 rounded-xl text-white
                    bg-gradient-to-r from-red-500  via-violet-500  to-indigo-500'>Log out</button> */}
    </div>
  )
}
