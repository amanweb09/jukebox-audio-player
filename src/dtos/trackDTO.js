export default class TrackDto {

    constructor({ displayImageUri, artists, trackName, songUri, id = null, duration = null }) {
        this.thumbnail = displayImageUri
        this.artist = artists && artists[0].name
        this.title = trackName
        this.src = songUri
        this.id = id
        this.duration = duration
    }
}