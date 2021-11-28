import './Music.css'

const Music = ({ setSelectedSong }) => {
    return (
        <div className="music">
            <div className="album-title">Finding Homes Where There Were None</div>
            <div className="songs">
                <a className="song" onClick={() => setSelectedSong({name: 'Vignette', location: 'http://localhost:3000/media/Vignette.wav'})}>
                    Vignette
                </a>
                <a className="song" onClick={() => setSelectedSong({name: 'Round and Blue', location: 'http://localhost:3000/media/Round-and-Blue.wav'})}>
                    Round and Blue
                </a>
            </div>
        </div>
    )
}

export default Music;