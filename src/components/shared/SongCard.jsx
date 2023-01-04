import React from 'react'
import { ShareIcon, ArrowUpOnSquareIcon, PlayIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { getTrack, searchSong } from '../../api/spotify'
import { setTrack } from '../../store/trackSlice'
import TrackDto from '../../dtos/trackDTO'

const SongCard = ({ _id, thumbnail, title, artist, album, length, isPlayed = false }) => {

    const dispatch = useDispatch()

    async function handleTrackPlay() {

        const data = await searchSong({
            q: 'title=' + title,
            params: {
                'limit': '1',
                'type': 'tracks'
            }
        })

        const track = {
            thumbnail: data.tracks[0].data.albumOfTrack.coverArt.sources[0].url,
            artist: data.tracks[0].data.artists.items[0].profile.name,
            title: data.tracks[0].data.name,
            src: data.tracks[0].data.uri,
            id: data.tracks[0].data.id,
            duration: data.tracks[0].data.duration.totalMilliseconds,
        }
        
        dispatch(setTrack({ track }))
    }

    return (
        <div
            onClick={handleTrackPlay}
            className='flex items-center my-6 capitalize cursor-pointer hover:bg-neutral-800 p-2 rounded-md'>
            <div className='border border-neutral-600 rounded-full flex-center w-10 h-10'>
                <PlayIcon className='text-white w-6 h-6' />
            </div>
            <img
                className='w-16 ml-8'
                src={thumbnail}
                alt="thumbnail" />

            <div className="w-64 px-8 text-light">
                <h1>{title}</h1>
                <span className="text-gray-600">{artist}</span>
            </div>
            <div className='ml-6 w-64'>
                <h3 className="text-neutral-400">{album}</h3>
            </div>
            <div className='ml-6 w-20'>
                <h3 className="text-neutral-500">{length}</h3>
            </div>
            <div className='flex-center flex-1'>
                <div className='cursor-pointer hover:scale-105 transition-all border border-neutral-600 mr-4 rounded-full flex-center w-10 h-10'>
                    <HeartIcon className='text-white w-6 h-6' />
                </div>
                <div className='cursor-pointer hover:scale-105 transition-all border border-neutral-600 rounded-full flex-center w-10 h-10'>
                    <ShareIcon className='text-white w-6 h-6' />
                </div>
                <div className='cursor-pointer hover:scale-105 transition-all border border-neutral-600 rounded-full flex-center mx-4 w-10 h-10'>
                    <ArrowUpOnSquareIcon className='text-white w-6 h-6' />
                </div>
                {/* <div className='border border-neutral-600 rounded-full flex-center flex-col w-10 h-10'>
                    <div className="w-1 h-1 rounded-full bg-neutral-500"></div>
                    <div className="w-1 h-1 my-1 rounded-full bg-neutral-500"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-500"></div>
                </div> */}
            </div>
        </div>
    )
}

export default SongCard