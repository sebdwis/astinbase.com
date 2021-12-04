import { useEffect, useState } from 'react';
import './LyricCardPlayer.css'

const LyricCardPlayer = ({selectedSong, elapsedTime}) => {
  const [lyricCard, setLyricCard] = useState();
  const [nextLyricIndex, setNextLyricIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);

  useEffect(() => {
    if (selectedSong) {
      const newLyricCard = require(`../lyric-cards/${selectedSong.lyricCard}.js`).default;
      setDisplayedText([]);
      setNextLyricIndex(0);
      setLyricCard(newLyricCard);
    }
  }, [selectedSong])

  useEffect(() => {
    if (lyricCard) {
      const [lyricText, nextLyricStartTime] = lyricCard[nextLyricIndex];

      console.log(lyricText);

      if (elapsedTime >= nextLyricStartTime) {
        setDisplayedText([...displayedText, lyricText])
        setNextLyricIndex(nextLyricIndex + 1);
      }
    }
  }, [elapsedTime])

  if (!lyricCard) {
    return null;
  }

  let formattedLyrics = []
  for (const line of displayedText) {
    formattedLyrics.push((<div>{line}</div>))
  }
  
  return (<div className="lyric-card">{formattedLyrics}</div>) 
}

export default LyricCardPlayer;