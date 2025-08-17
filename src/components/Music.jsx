import { useEffect, useRef, useState } from "react";
import PlayIcon from "../assets/play-outline.svg";
import PauseIcon from "../assets/pause-outline.svg";
import Cancion from "../assets/Casamiento.mp3";

export default function Music() {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!visible && !isPlaying) return null;

  return (
    <div className="music-container">
      <button className="music-btn" onClick={togglePlay}>
        <img
          src={isPlaying ? PauseIcon : PlayIcon}
          aria-hidden="true"
          width={30}
          height={30}
        />
      </button>
      <audio ref={audioRef} src={Cancion} preload="auto" loop />
    </div>
  );
}
