import "./App.css";
import { useState } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import AlbumAnnounce from "./components/AlbumAnnounce";
import LinkIcons from "./components/LinkIcons";
import SongPlayer from "./components/SongPlayer";

function App() {
  const [selectedSong, setSelectedSong] = useState();

  let alteredBgColor;
  if (selectedSong?.name === "Round and Blue") {
    alteredBgColor = "#d0e7f6";
  } else if (selectedSong?.name === "Vignette") {
    alteredBgColor = "lightyellow";
  }

  return (
    <div
      className={`${selectedSong ? 'bg-song-playing' : ''} altered-background`}
      style={alteredBgColor ? { backgroundColor: alteredBgColor } : {}}
    >
      <div className="app">
        <Background />
        {!selectedSong && (
          <div>
            <Header />
            <hr className="section-break" />
          </div>
        )}
        <AlbumAnnounce />
        {/* <Music setSelectedSong={setSelectedSong} selectedSong={selectedSong} /> */}
        {!selectedSong && (
          <div>
            {/* <hr className="section-break" /> */}
            <LinkIcons />
          </div>
        )}
        <SongPlayer selectedSong={selectedSong} />
      </div>
    </div>
  );
}

export default App;
