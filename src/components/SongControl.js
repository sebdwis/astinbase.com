import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faFastBackward } from '@fortawesome/free-solid-svg-icons';

import './SongControl.css'

const SongControl = ({ selectedSong }) => {
    const [songTitle, setSongTitle] = useState();
    const [audio, setAudio] = useState();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!selectedSong) return;

        if (selectedSong.name === songTitle) {
            seekSong(0);
        } else {
            audio?.pause();

            const newAudio = new Audio(selectedSong.location);
            setElapsedTime(0);
            setSongTitle(selectedSong.name);
            setPaused(false);
            
            newAudio.addEventListener('timeupdate', () => {
                setElapsedTime(newAudio.currentTime);
            })

            newAudio.addEventListener('canplay', () => {
                setAudio(newAudio);
                newAudio.play();
            })
        }
    }, [selectedSong])


    if (!audio) {
        return null;
    }

    const togglePause = () => {
        if (audio.currentTime == audio.duration) {
          seekSong(0)
        } else {
            paused ? audio.play() : audio.pause();
            setPaused(!paused);
        } 
    }

    const seekSong = (seekToTime) => {
        audio.currentTime = seekToTime;
        setAudio(audio);
    }

    const icon = (audio.currentTime == audio.duration) ? 
      faFastBackward : 
      paused ? faPlay : faPause

    const totalDuration = `${Math.floor(audio.duration / 60)}:${('' + Math.floor(audio.duration % 60)).padStart(2, 0)}`
    const formattedTime = `${Math.floor(elapsedTime / 60)}:${('' + Math.floor(elapsedTime % 60)).padStart(2, '0')} / ${totalDuration}`

    return (
        <div className="song-control-panel">
            <div className="song-control">
                {songTitle}
                <FontAwesomeIcon className="song-control-button" icon={icon} onClick={togglePause} />
                <span>volume: {audio.volume}</span>
                <span>time: {formattedTime}</span>
            </div>
            <div className="duration-indicator" onClick={(e) => { seekSong((e.clientX / window.innerWidth) * audio.duration) }}>
                <div className="elapsed-bar" style={{ width: `${(elapsedTime / audio.duration) * 100}vw` }} />
            </div>
        </div>
    )
}

export default SongControl;