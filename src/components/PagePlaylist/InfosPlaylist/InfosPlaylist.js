import React from "react";
import "./InfosPlaylist.css";
import thumbnail from '../../../img/musicas-curtidas-img.png'
function InfosPlaylist(props) {
  const {name, type, image} = props;

  return (
    <>
      <div className="infos-container">
        <img src={image || thumbnail} alt="" className="thumbnail-playlist" />
        <div className="container-description">
          <p className="playlist-name">{name}</p>
          <p className="type">{type}</p>
          {/* <div className="auxiliar-display">
            <p className="playlist-infos">Spotify - 50 músicas</p>
            <p className="playlist-duration">1h 7min </p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default InfosPlaylist;
