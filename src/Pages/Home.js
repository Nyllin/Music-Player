import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const Home = () => {
  const [search, setSearch] = useState(false);
  const searchHandle = () => {
    setSearch(true);
  };
  const [songs, setSongs] = useState([]);

  const fetchTitleAndArtist = () => {
    fetch("https://theaudiodb.com/api/v1/json/2/track.php?m=2115888")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        if (data.track && data.track.length > 0) {
          const songsData = data.track.slice(0, 3).map((track, index) => ({
            title: track.strTrack,
            artist: track.strArtist,
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

  return (
    <div className="home-container">
      <div className="home-search d-flex justify-content-between">
        {search ? (
          <input type="text" placeholder="Search for songs,artists and album" />
        ) : (
          <SearchIcon onClick={searchHandle} fontSize="large" />
        )}
        <div className="home-notification">
          <NotificationsNoneIcon fontSize="large" />
          <span>1</span>
        </div>
      </div>
      <div className="home-genre d-flex justify-content-between">
        <div className="home-genre-one">
          <h1>
            GET LOST
            <span>in your music</span>
          </h1>

          <PlayCircleOutlineIcon
            fontSize="large"
            className="text-light home-genre-icons"
          />
        </div>
        <div className="home-genre-two">
          <h1>
            MELLOW
            <span>beats</span>
          </h1>

          <PlayCircleOutlineIcon
            fontSize="large"
            className="text-light home-genre-icons"
          />
        </div>
      </div>
      <div className="home-playlist">
        <div className="home-recently-played">
          <h4>Recently Played</h4>
          {songs.map((song) => (
            <div className="home-recently-music d-flex justify-content-between ">
              <div>
                <PlayCircleOutlineIcon
                  fontSize="small"
                  className="text-light home-recently-icon"
                />
              </div>
              <p>{song.title}</p>
              <span>{song.artist}</span>
              <span>13:20</span>
              <FavoriteBorderIcon />
              <span>...</span>
            </div>
          ))}
        </div>
        <div className="home-recommended ">
          <h4>Recommended for You</h4>
          <div className="d-flex justify-content-between">
            {songs.map((song) => (
              <div className="home-recommended-music">
                <div>
                  <PlayCircleOutlineIcon
                    fontSize="large"
                    className="text-light home-recommended-icon"
                  />
                </div>
                <p>
                  {song.title} <span>{song.artist}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
