import './Music.css'

const Music = ({ setSelectedSong }) => {
    // const audio = new Audio('http://www.astinbase.com.s3-website-us-east-1.amazonaws.com/audio/Vignette.wav');
    const audio = new Audio('http://localhost:3000/media/Vignette.wav');

    const playAudio = () => {
        console.log(audio.readyState);
        if (audio.readyState) {
            setSelectedSong(audio);
            audio.play();
        }
    }

    return (
        <div className="music">
            <div className="album-title">Finding Homes Where There Were None</div>
            <div className="songs">
                <a className="song" onClick={playAudio}>
                    Vignette
                </a>
            </div>
        </div>
    )
}

export default Music;