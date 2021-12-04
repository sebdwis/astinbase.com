import './Music.css'

const Music = ({ setSelectedSong }) => {
    return (
        <div className="music">
            <div className="album-title">Finding Homes Where There Are None</div>
            <div className="songs">
                <a className="song" onClick={() => setSelectedSong({name: 'Vignette', lyricCard: 'Vignette', location: 'http://localhost:3000/media/Vignette.wav'})}>
                    Vignette
                </a>
                <a className="song" onClick={() => setSelectedSong({name: 'Round and Blue', lyricCard: 'RoundAndBlue', location: 'http://localhost:3000/media/RoundAndBlue.wav'})}>
                    Round and Blue
                </a>
            </div>
        </div>
    )
}

export default Music;