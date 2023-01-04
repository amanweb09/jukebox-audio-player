import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { HomeIcon, MusicalNoteIcon, PlusIcon, GifIcon, HeartIcon } from '@heroicons/react/24/outline'
import useActiveSidebarLink from '../../hooks/useActiveSidebarLink'

const links = [
    {
        text: 'home',
        icon: HomeIcon
    },
    {
        text: 'linked songs',
        icon: HeartIcon
    },
    {
        text: 'create playlist',
        icon: PlusIcon
    },
    {
        text: 'playlists',
        icon: MusicalNoteIcon
    },
    {
        text: 'subscription',
        icon: GifIcon
    },
]


const Sidebar = () => {

    const [activeLink, setActiveLink] = useActiveSidebarLink()

    return (
        <div className='w-10/12 sm:w-1/5 bg-dark flex items-center flex-col'>
            <div className='flex items-center px-2 sm:px-6 py-2 mt-4 bg-neutral-600 rounded-full'>
                <PlayIcon className='w-8 h-8 text-light' />
                <h1 className='text-white font-bold sm:block hidden'>Juke<span className=''>Box</span></h1>
            </div>

            <div className="py-4">
                {
                    links.map((link) => {
                        const Icon = link.icon

                        return (
                            <div
                                key={link.text}
                                onClick={() => setActiveLink(link.text)}
                                className={`my-4 ${activeLink === link.text ? 'text-white bg-neutral-800' : 'text-neutral-600'} flex items-center cursor-pointer hover:bg-neutral-800 px-4 py-2 rounded-md`}>
                                <Icon className='w-6 h-6' />
                                <span className='ml-4 text-sm sm:block capitalize hidden'>{link.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar