import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Login from '../Components/Login'


export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  // const IsAuthenticated = false;
  if(!isAuthenticated) return <Login/>; 

  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 z-50 item-center justify-center place-content-center flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>your logged in Bro</h1>
      <button onClick={logout} className='shadow-lg 
                    hover:shadow-xl hover:scale-105 active:scale-95 
                    duration-200
                    my-5  z-50 text-xl font-semibold  py-3 px-7 rounded-xl text-white
                    bg-gradient-to-r from-red-500  via-violet-500  to-indigo-500'>Log out</button>
    </div>
  )
}
