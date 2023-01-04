import React from 'react'
import { assets } from '../assets'
import { PlayIcon } from '@heroicons/react/24/solid'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { setAuth } from '../store/authSlice'

const Authentication = () => {

    const dispatch = useDispatch()

    async function handleSignin() {
        try {
            const { user: userInfo } = await signInWithPopup(auth, provider)
            const { uid, displayName, photoURL, email } = userInfo

            const user = {
                uid,
                name: displayName,
                avatar: photoURL,
                email
            }

            dispatch(setAuth({ isAuth: true, user }))
            console.log('welcome', displayName);

        } catch (error) {
            console.log(error);
            alert('Error signing in...')
        }
    }

    return (
        <div className='w-full min-h-screen bg-gradient bg-dark flex-center flex-col'>
            <div className='flex items-center px-6 py-2 border border-gray-500'>
                <PlayIcon className='w-10 h-10 text-light' />
                <h1 className='text-2xl text-white font-bold'>Juke<span className='text-indigo-500'>Box</span></h1>
            </div>
            <button
                onClick={handleSignin}
                className='mt-12 px-6 py-2 rounded-md bg-light hover:bg-gray-300 flex-center'>
                <img
                    className='w-8'
                    src={assets.google}
                    alt="google" />
                <span>Signin with Google</span>
            </button>
        </div>
    )
}

export default Authentication