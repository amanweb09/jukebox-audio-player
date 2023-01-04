import React from 'react'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { setAuth } from '../../store/authSlice'

const Navbar = () => {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    function handleSignout() {
      signOut(auth)
      dispatch(setAuth({ isAuth: false, user: null }))
    }

    return (
        <nav className='w-full flex items-center py-2'>
            <div className="flex items-center justify-end w-full px-6">
                <div className="flex bg-neutral-800 px-6 py-2 w-max rounded-md">
                    <input
                        className='bg-transparent text-light mr-2'
                        placeholder='What you wish?'
                        type="text" />
                    <MagnifyingGlassIcon className='w-6 h-6 text-neutral-500' />
                </div>
            </div>
            <BellIcon className='text-light w-6 h-6' />
            <img
                onClick={handleSignout}
                className='cursor-pointer mx-4 w-10 h-10 rounded-full'
                src={user?.avatar}
                alt="avatar" />
        </nav>
    )
}

export default Navbar