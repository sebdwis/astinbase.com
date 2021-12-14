import './Music.css'

const Music = ({ setSelectedSong, selectedSong }) => {
    const songs = [
        {name: 'Vignette', lyricCard: 'Vignette', location: 'http://192.168.1.201:3000/media/Vignette.wav'},
        {name: 'Round and Blue', lyricCard: 'RoundAndBlue', location: 'http://192.168.1.201:3000/media/RoundAndBlue.wav'}
    ]

    return (
        <div className="music">
            <div className="album-title">Finding Homes Where There Are None</div>
            <div className="songs">
                {songs.map((song) => 
                    <a className="song" 
                       onClick={() => selectedSong?.name === song.name ? setSelectedSong(null) : setSelectedSong(song)} 
                       style={selectedSong?.name === song.name ? {color: 'lightcoral'} : {}}>
                        {song.name}
                    </a>
                )}
            </div>
        </div>
    )
}

export default Music;