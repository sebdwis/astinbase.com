import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

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
    const formattedTime = `${Math.floor(elapsedTime / 60)}:${elapsedTime % 60 < 10 ? '0' : ''}${Math.floor(elapsedTime % 60)} / ${totalDuration}`

    return (
        <div className="song-control-panel">
            <div className="song-control">
                <FontAwesomeIcon className="play-pause" icon={paused ? faPlay : faPause} onClick={togglePause} />
                <span>volume: {selectedSong.volume}</span>
                <span>time: {formattedTime}</span>
            </div>
            <div className="duration-indicator">
                <div className="elapsed-bar" style={{width: `${(elapsedTime / selectedSong.duration) * 100}vw` }} />
            </div>
        </div>
    )
}

export default SongControl;