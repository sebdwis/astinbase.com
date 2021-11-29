import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeMute, faVolumeUp, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import './SongControl.css'
import { Slider } from '@mui/material';

const SongControl = ({ selectedSong, elapsedTime, setElapsedTime }) => {
    const [songTitle, setSongTitle] = useState();
    const [audio, setAudio] = useState();

    useEffect(() => {
        if (!selectedSong) return;

        if (selectedSong.name === songTitle) {
            seekSong(0);
        } else {
            audio?.pause(); // pause currently playing audio

            const newAudio = new Audio(selectedSong.location);
            setElapsedTime(0);
            setSongTitle(selectedSong.name);
            
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

    const seekSong = (seekToTime) => {
        audio.currentTime = seekToTime;
        setAudio(audio);
    }

    const togglePause = () => {
        if (audio.currentTime == audio.duration) {
          seekSong(0)
        } else {
            audio.paused ? audio.play() : audio.pause();
        }
    }
  
    const getPlayIcon = () => {
        if (audio.currentTime == audio.duration) {
            return faRedoAlt;
        }

        return audio.paused ? faPlay : faPause
    }

    const totalDuration = `${Math.floor(audio.duration / 60)}:${('' + Math.floor(audio.duration % 60)).padStart(2, 0)}`
    const formattedTime = `${Math.floor(elapsedTime / 60)}:${('' + Math.floor(elapsedTime % 60)).padStart(2, '0')} / ${totalDuration}`

    return (
        <div className="song-control-panel">
            <div className="song-control-title">{songTitle}</div>
            <div className="song-control">
                <FontAwesomeIcon className="song-control-button" 
                                 icon={getPlayIcon()} 
                                 onClick={togglePause} />
                <FontAwesomeIcon className="song-control-button mute-button" 
                                     icon={audio.muted ? faVolumeMute : faVolumeUp} 
                                     onClick={() => {audio.muted = !audio.muted}} />
                <Slider className="volume-slider"
                        min={0} 
                        max={1} 
                        step={.01} 
                        defaultValue={1}
                        size="small"
                        valueLabelDisplay="auto"
                        valueLabelFormat={() => Math.floor(audio.volume * 100) + '%'}
                        onChange={(e) => {audio.volume = e.target.value}} />
                <span className="elapsed-text">time: {formattedTime}</span>
            </div>
            <div className="duration-indicator" 
                 onClick={(e) => { seekSong((e.clientX / window.innerWidth) * audio.duration) }}>
                <div className="elapsed-bar" 
                     style={{ width: `${(elapsedTime / audio.duration) * 100}vw` }} />
            </div>
        </div>
    )
}
export default SongControl;