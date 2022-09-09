import React from "react";
import "./InfosPlaylist.css";
import thumbnail from "../../../../img/thumbnail-playlist.png";
function InfosPlaylist() {
  return (
    <>
      <div className="infos-container">
        <img src={thumbnail} alt="" className="thumbnail-playlist" />
        <div className="container-description">
          <p className="type">Playlist</p>
          <p className="playlist-name">Brazilian Drum and Bass</p>
          <p className="playlist-bands">
            DJ Patife, DJ Marky, Marcelinho da Lua e mais
          </p>
          <div className="auxiliar-display">
            <p className="playlist-infos">Spotify - 50 músicas</p>
            <p className="playlist-duration">1h 7min </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfosPlaylist;
