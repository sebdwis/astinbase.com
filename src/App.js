import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import SongControl from './components/SongControl';
import Music from './components/Music';
import LyricCardPlayer from './components/LyricCardPlayer';
import LinkIcons from './components/LinkIcons';

function App() {

  const [selectedSong, setSelectedSong] = useState();
  const [elapsedTime, setElapsedTime] = useState(0);

  let alteredBgColor;
  if (selectedSong?.name === 'Round and Blue') {
    alteredBgColor = '#d0e7f6'
  } else if (selectedSong?.name === 'Vignette') {
    alteredBgColor = 'lightyellow'
  }

  return (
    <div className="altered-background" style={alteredBgColor ? { backgroundColor: alteredBgColor } : {}}>
      <div className="app">
        <Header />
        <hr className="section-break" />
        <Music setSelectedSong={setSelectedSong} selectedSong={selectedSong} />
        <hr className="section-break" />
        <LinkIcons />
        <hr className="section-break" />
        <LyricCardPlayer selectedSong={selectedSong} elapsedTime={elapsedTime} />
        <SongControl selectedSong={selectedSong} setElapsedTime={setElapsedTime} elapsedTime={elapsedTime} />
      </div>
    </div>
  );
}

export default App;
