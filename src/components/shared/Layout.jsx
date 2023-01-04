import React from 'react'
import { useSelector } from 'react-redux'
import useActiveSidebarLink from '../../hooks/useActiveSidebarLink'
import PlayerBanner from './PlayerBanner'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {

    const [activeLink] = useActiveSidebarLink()

    const { track } = useSelector((state) => state.tracks)

    return (
        <div className='w-full overflow-hidden min-h-screen bg-dark flex'>
            <Sidebar activeLink={activeLink} />
            <div className='pb-16'>
                {children}
                {
                    track && <PlayerBanner {...track} />
                }
            </div>
        </div>
    )
}

export default Layout