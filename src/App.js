import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import SongControl from './components/SongControl';
import Music from './components/Music';

function App() {

  const [selectedSong, setSelectedSong] = useState();

  return (
    <div className="app">
      <Header />
      <Music setSelectedSong={setSelectedSong} />
      <SongControl selectedSong={selectedSong} />
    </div>
  );
}

export default App;
