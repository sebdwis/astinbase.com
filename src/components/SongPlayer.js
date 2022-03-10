import { useState } from "react";
import LyricCardPlayer from "./LyricCardPlayer";
import SongControl from "./SongControl";

const SongPlayer = ({ selectedSong }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [seekToTime, setSeekToTime] = useState(0);

  return !selectedSong ? null : (
    <div className="song-player">
      <LyricCardPlayer
        selectedSong={selectedSong}
        elapsedTime={elapsedTime}
        seekToTime={seekToTime}
      />
      <SongControl
        selectedSong={selectedSong}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        setSeekToTime={setSeekToTime}
      />
    </div>
  );
};

export default SongPlayer;
