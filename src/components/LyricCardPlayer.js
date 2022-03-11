import { margin } from "@mui/system";
import { useEffect, useState } from "react";
import "./LyricCardPlayer.css";

class LyricEntry {
  constructor([text, startTime, endTime, top, left]) {
    this.text = text;
    this.startTime = startTime;
    this.endTime = endTime;
    this.top = top;
    this.left = left
  }
}

const LyricCardPlayer = ({ selectedSong, elapsedTime, seekToTime }) => {
  const [previousSeekToTime, setPreviousSeekToTime] = useState(0);
  const [lyricCard, setLyricCard] = useState();
  const [nextLyricIndex, setNextLyricIndex] = useState(0);
  const [displayedLyrics, setDisplayedLyrics] = useState([]);

  useEffect(() => {
    if (selectedSong) {
      const newLyricCardRaw =
        require(`../lyric-cards/${selectedSong.lyricCard}.js`).default;
      const newLyricCard = newLyricCardRaw.map(
        (rawEntry) => new LyricEntry(rawEntry)
      );
      setLyricCard(newLyricCard);
      setNextLyricIndex(0);
    }

    setDisplayedLyrics([]);
  }, [selectedSong]);

  useEffect(() => {
    if (lyricCard) {
      const nextLyric = lyricCard[nextLyricIndex];
      const newDisplayedLyrics = displayedLyrics.filter(
        ({ endTime }) => endTime > elapsedTime
      );

      if (elapsedTime >= nextLyric?.startTime) {
        setDisplayedLyrics([...newDisplayedLyrics, nextLyric]);
        setNextLyricIndex(nextLyricIndex + 1);
      } else {
        setDisplayedLyrics[newDisplayedLyrics];
      }
    }
  }, [elapsedTime]);

  useEffect(() => {
    if (seekToTime !== previousSeekToTime) {
      const newDisplayedLyrics = lyricCard.filter(
        ({ startTime, endTime }) =>
          startTime < seekToTime && endTime > seekToTime
      );

      const newNextLyricIndex = lyricCard.filter(
        ({ startTime }) => startTime < seekToTime
      ).length;

      setDisplayedLyrics(newDisplayedLyrics);
      setNextLyricIndex(newNextLyricIndex);
      setPreviousSeekToTime(seekToTime);
    }
  }, [seekToTime]);

  if (!lyricCard) {
    return null;
  }

  let formattedLyrics = [];
  for (const { text, top, left } of displayedLyrics) {
    formattedLyrics.push(
      <div style={top ? { position: 'absolute', top: `${top}%`} : {}}>
        {text} 
      </div>
    );
  }

  return !selectedSong ? null : (
    <div className="lyric-card lyric-card-font">{formattedLyrics}</div>
  );
};

export default LyricCardPlayer;
