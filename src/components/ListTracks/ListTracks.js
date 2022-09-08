import { React, useState } from "react";
import "./ListTracks.css";
import data from "../../data/musics.json";

function ListTracks() {
  const [btnDelete, setBtnDelete] = useState(false);
  const [btnColor, setBtnColor] = useState(false);

  const handleColor = (e) => {
    setBtnColor(!btnColor);
    if (btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 1";
      e.target.style.color = "#3FE168";
    }
    if (!btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 0";
      e.target.style.color = "#CCCCCC";
    }
  };
  const handleDelete = (e) => {
    setBtnDelete(!btnDelete);
    if (btnDelete) {
      e.target.parentNode.parentNode.remove();
    }
  };

  const listenerTracks = () => {
    return data.musics.map((track) => {
      return (
        <div className="list-musics">
          <p className="order">{Number(track.id) + 1}</p>
          <img src={track.image} alt="" className="img-track" />
          <div className="track-ids">
            <p className="track-name">{track.name}</p>
            <p className="track-artist">{track.artist}</p>
          </div>
          <p className="track-album">{track.album}</p>
          <button className="btn-favorite" onClick={handleColor}>
            <span className="material-symbols-outlined" id="favorite">
              favorite
            </span>
          </button>
          <button className="btn-delete" onClick={handleDelete}>
            <span class="material-symbols-outlined" id="delete">
              delete
            </span>
          </button>
          <p className="track-duration">{track.duration}</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container-list-music">{listenerTracks()}</div>
    </>
  );
}

export default ListTracks;
