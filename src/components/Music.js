import './Music.css'

const Music = ({ setSelectedSong, selectedSong }) => {
    const songs = [
        {name: 'Vignette', lyricCard: 'Vignette', location: 'http://astinbase.com.s3-website-us-east-1.amazonaws.com/media/Vignette.wav'},
        {name: 'Round and Blue', lyricCard: 'RoundAndBlue', location: 'http://astinbase.com.s3-website-us-east-1.amazonaws.com/media/RoundAndBlue.wav'}
    ]

    return (
        <div className="music">
            <div className="album-title">Finding Homes Where There Were None</div>
            <div className="songs">
                {songs.map((song) => 
                    <a className="song" 
                       onClick={() => selectedSong?.name === song.name ? setSelectedSong(null) : setSelectedSong(song)} 
                       style={selectedSong?.name === song.name ? {color: 'lightcoral'} : {}}>
                        {song.name}
                    </a>
                )}
            </div>
            {!selectedSong && <div className="coming-soon">Summer 2022</div>}
        </div>
    )
}

export default Music;