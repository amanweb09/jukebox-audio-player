import React from 'react'
import { PlayCircleIcon, ForwardIcon, BackwardIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline'

const PlayerBanner = ({ title, thumbnail, artist, src, id, duration }) => {



    return (
        <div className='w-full h-16 fixed bottom-0 left-0 flex items-center py-2 px-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <div className='flex-1 flex'>
                {/* artist */}
                <div className='flex'>
                    <img
                        className='w-16 mr-2'
                        src={thumbnail}
                        alt="thumbnail" />
                    <div>
                        <h3 className="text-white block font-semibold">{title}</h3>
                        <p className='font-sm text-neutral-400'>{artist}</p>
                    </div>
                </div>

                {/* controls */}
                <div className="flex-center w-max ml-12">
                    <BackwardIcon className='text-light cursor-pointer hover:scale-105 transition-all w-8 h-8' />
                    <PlayCircleIcon className='text-light cursor-pointer hover:scale-105 transition-all w-8 h-8 mx-4' />
                    <ForwardIcon className='text-light cursor-pointer hover:scale-105 transition-all w-8 h-8' />
                </div>

                {/* song progress */}
                <div className="ml-10 flex-center w-max">
                    <audio
                        autoPlay
                        className='' >
                        <source src={src} />
                    </audio>
                    <div className="w-96 bg-neutral-500 rounded-full h-1">
                        <div className="w-64 bg-light rounded-full h-1"></div>
                    </div>
                    <span className='text-xs text-neutral-200 ml-2'>7:20</span>
                </div>

            </div>

            {/* volume */}
            <div className="flex-center ml-10">
                <SpeakerWaveIcon className='w-6 h-6 text-light' />
                <div className="w-40 bg-neutral-500 rounded-full h-1">
                    <div className="w-32 bg-light rounded-full h-1"></div>
                </div>
            </div>
        </div >
    )
}

export default PlayerBanner