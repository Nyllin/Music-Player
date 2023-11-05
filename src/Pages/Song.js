import React, { useState, useRef, useEffect } from "react";
import "../Styles/Song.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import LoopIcon from "@mui/icons-material/Loop";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import DevicesIcon from '@mui/icons-material/Devices';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import user from "../images/weekend.jpg";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import song from '../assets/The Weeknd - Like A God (Music from the HBO Original Series The Idol)_p1D7pg-vtf0.mp3';
import song1 from '../assets/The Weeknd, JENNIE, Lily-Rose Depp - One Of The Girls (Official Video)_Mx92lTYxrJQ.mp3';
import song2 from '../assets/The Weeknd, Playboi Carti, Madonna - Popular (Official Live)_bLRuz63w_SM.mp3';

const Song = () => {
  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songs, setSongs] = useState([]);
  const [isLooping, setIsLooping] = useState(false);

  const fetchTitleAndArtist = () => {
    fetch("https://theaudiodb.com/api/v1/json/2/track.php?m=2115888")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        if (data.track && data.track.length > 0) {
          const songsData = data.track.slice(0, 3).map((track, index) => ({
            title: track.strTrack,
            artist: track.strArtist,
            audio: index === 0 ? song : index === 1 ? song1 : song2
          }));

          setSongs(songsData);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  useEffect(() => {
    fetchTitleAndArtist();
  }, []);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = () => {
    const newValue = sliderRef.current.value;
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const playNextTrack = () => {
    if (currentTrackIndex < songs.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const playPreviousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    if (songs.length > 0) {
      audioRef.current.src = songs[currentTrackIndex].audio;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, isPlaying, songs]);
  
  useEffect(() => {
    if (isLooping) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  }, [isLooping]);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="song-container d-lg-flex d-md-flex">
      <div className="song-title d-flex justify-content-between">
        <div className="song-image">
          <img src={user} alt="song" />
        </div>
        <div className="d-flex flex-column">
          <h4 className="fw-bold text-light">
            {songs.length > 0 ? songs[currentTrackIndex].title : "Loading..."}
          </h4>
          <p>{songs.length > 0 ? songs[currentTrackIndex].artist : "Loading..."}</p>
        </div>
        <AddCircleIcon className="text-light" />
      </div>
      <div className="song-icons d-flex justify-content-between">
        <SkipPreviousIcon fontSize="large" onClick={playPreviousTrack} />
        {isPlaying ? (
          <PauseCircleIcon fontSize="large" onClick={playPauseToggle} />
        ) : (
          <PlayCircleFilledWhiteIcon fontSize="large" onClick={playPauseToggle} />
        )}
        <SkipNextIcon fontSize="large" onClick={playNextTrack} />
        <LoopIcon
            fontSize="large"
            onClick={toggleLoop}
            style={{ color: isLooping ? "green" : "inherit" }}
          />
          {isLooping && <span className="loop-indicator">Loop</span>}
      </div>
      <div className="song-slider ">
        <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
        <input
          type="range"
          min="0"
          max={duration || 1}
          step="1"
          value={currentTime}
          onChange={handleSliderChange}
          ref={sliderRef}
        />
      </div>
      <div className="song-icons d-flex justify-content-between">
        <QueueMusicIcon fontSize="small"/>
        <DevicesIcon fontSize="small"/>
        <div className="song-volume d-flex">
        <VolumeUpIcon className="song-volume-icon" fontSize="small"/>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          onChange={handleVolumeChange}
          className="mb-5"
        />
        </div>
      </div>
    </div>
  );
};

export default Song;
