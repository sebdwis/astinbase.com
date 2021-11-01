import { useEffect, useState } from 'react';
import './SongControl.css'

const SongControl = ({ selectedSong }) => {
    if (!selectedSong) {
        return null;
    }

    const [elapsedTime, setElapsedTime] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!paused) {
            setTimeout(() => {
                setElapsedTime(elapsedTime + .01);
            }, 10)
        }
        
    }, [elapsedTime, paused])

    const togglePause = () => {
        paused ? selectedSong.play() : selectedSong.pause();
        setPaused(!paused);
    }

    const totalDuration = `${Math.floor(selectedSong.duration / 60)}:${(selectedSong.duration % 60).toPrecision(2)}`
    const formattedTime = `${Math.floor(elapsedTime / 60)}:${elapsedTime % 60 < 10 ? '0': ''}${Math.floor(elapsedTime % 60)} / ${totalDuration}`

    return (
        <div className='song-control'>
            <button onClick={togglePause}>{paused ? 'play' : 'pause'}</button>
            volume: {selectedSong.volume}
            time: {formattedTime}
        </div>
    )
}

export default SongControl;