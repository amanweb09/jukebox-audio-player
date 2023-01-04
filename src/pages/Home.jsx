import React, { useEffect, useState } from 'react'
import Layout from '../components/shared/Layout'
import Navbar from '../components/shared/Navbar'
import { assets } from '../assets'
import { PlayIcon } from '@heroicons/react/24/solid'
import { ShareIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import SongCard from '../components/shared/SongCard'
import { songs as dummySongs } from '../constants/songs'
import { getTop200Tracks, getTop20Tracks } from '../api/spotify'
import { useSelector } from 'react-redux'
import TrackDto from '../dtos/trackDTO'

const Home = () => {

  const [songs, setSongs] = useState([])

  const {top10Tracks} = useSelector((state) => state.tracks)

  useEffect(() => {

    async function getAllTracks() {

      if(top10Tracks.length) {
        setSongs(top10Tracks)
        return;
      }

      try {
        const songsData = await getTop200Tracks()
        setSongs(songsData.slice(0, 10))

      } catch (error) {
        console.log(error);
      }

    }
    getAllTracks()
  }, [])

  return (
    <Layout>
      <div className='w-full'>
        <Navbar />

        {/* ad banner */}
        <div className='w-full h-max relative pt-4 pr-4 sm:block hidden'>
          <div className="absolute pt-8 left-4">
            <h1 className='text-4xl font-bold'>Subhanallah</h1>
            <p className='font-semibold'>Yeh Jawani Hai Deewani</p>
            <button
              className="w-56 mt-4 h-12 hover:text-black hover:bg-light transition-all bg-dark text-white font-bold rounded-md">
              Explore
            </button>
          </div>
          <div className="absolute bottom-8 left-4 flex-center w-max">
            <div className="w-20 h-20 text-light cursor-pointer bg-black hover:text-black hover:bg-light transition-all rounded-full flex-center">
              <PlayIcon className='w-8 h-8 ' />
            </div>
            <div className="w-10 h-10 ml-4 bg-light hover:bg-neutral-200 cursor-pointer rounded-full flex-center">
              <ShareIcon className='w-6 h-6 text-black' />
            </div>
            <div className="w-10 h-10 ml-4 bg-light hover:bg-neutral-200 cursor-pointer rounded-full flex-center">
              <ArrowUpOnSquareIcon className='w-6 h-6' />
            </div>
          </div>
          <img
            className='w-full  h-[60vh] block mx-auto'
            alt='ad'
            src={assets.adBanner} />
        </div>

        <div className='mt-8'>
          {
            songs.length > 0 && songs.map(({ trackMetadata }, ix) => {
              const trackData = new TrackDto(trackMetadata)
              return <SongCard
                {...trackData}
                key={ix} />
            })
          }
        </div>

      </div>
    </Layout>
  )
}

export default Home