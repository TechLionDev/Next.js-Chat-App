import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../firebaseconfig'

const Login = () => {

    const [signInWithGoogle]=useSignInWithGoogle(auth)
    const handleSubmit = ()=>{
        signInWithGoogle()
      }

  return (
    <>
    <Head>
      <title>Chat App | Login</title>
    </Head>
    <main className='w-full font-disp h-screen flex justify-center flex-col items-center bg-gradient-to-br from-mSec  to-dSec '>
      <div className='lg:px-20 lg:pb-12 px-10 py-8 bg-gray-700 text-white text-lg shadow-xl shadow-gray-800 rounded-3xl text-center '>
        <h1 className=" my-4 lg:text-3xl text-2xl mb-10">TechLion Dev&apos;s Chat App</h1>
         <Button onClick={()=>handleSubmit()}>Sign In With Google</Button>
        </div>
    </main>

  </>
  )
}

export default Login