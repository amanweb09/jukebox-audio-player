import axios from 'axios'
import { creds } from '../creds';

async function spotify({ method, url, params = {} }) {
    const options = {
        method,
        url: 'https://spotify81.p.rapidapi.com/' + url,
        headers: {
            'X-RapidAPI-Key': creds.API_KEY,
            'X-RapidAPI-Host': creds.API_HOST
        },
        params
    };

    const { data } = await axios.request(options)

    return data;
}


export const getTop200Tracks = async (params) => {
    return await spotify({
        method: "GET",
        url: 'top_200_tracks',
        params: { country: 'IN', ...params }
    })
}

export const getTop20Tracks = async (params) => {
    return await spotify({
        method: "GET",
        url: 'top_20_by_monthly_listeners',
        params: { country: 'IN', ...params }
    })
}

export const searchSong = async ({ q, params }) => {
    return await spotify({
        method: "GET",
        url: 'search',
        params: { ...params, q }
    })
}

export const getTrack = async ({ id }) => {
    return await spotify({
        method: "GET",
        url: 'tracks',
        params: { id }
    })
}
