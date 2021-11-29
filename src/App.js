import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import SongControl from './components/SongControl';
import Music from './components/Music';
import LyricCardPlayer from './components/LyricCardPlayer';

function App() {

  const [selectedSong, setSelectedSong] = useState();
  const [elapsedTime, setElapsedTime] = useState(0);

  return (
    <div className="app">
      <Header />
      <Music setSelectedSong={setSelectedSong} />
      <LyricCardPlayer selectedSong={selectedSong} elapsedTime={elapsedTime} />
      <SongControl selectedSong={selectedSong} setElapsedTime={setElapsedTime} elapsedTime={elapsedTime} />
    </div>
  );
}

export default App;
