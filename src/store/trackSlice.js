import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    track: null,
    top10Tracks: []
}

const trackSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setTrack(state, action) {
            state.track = action.payload.track;
        },
        setTopTracks(state, action) {
            state.top10Tracks = action.payload.tracks;
        },
    }
})

export const { setTrack, setTopTracks } = trackSlice.actions
export default trackSlice.reducer