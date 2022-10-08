import {React} from "react";
import "./InfosPlaylistArtist.css";

function InfosPlaylistArtist(props) {
  const {name, type, image} = props;

  return (
    <>
      <div className="infos-container-art">
        <img src={image} alt="" className="thumbnail-playlist" />
        <div className="container-description">
          <p className="playlist-name">{name}</p>
          <p className="type">{type}</p>
        </div>
      </div>
    </>
  );
}

export default InfosPlaylistArtist;
