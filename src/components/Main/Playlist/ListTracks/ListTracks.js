import { React, useState } from "react";
import "./ListTracks.css";
import data from "../../../../data/musics.json";
import BtnFavorite from "../../../BtnFavorite/BtnFavorite";

function ListTracks() {
  const [btnDelete, setBtnDelete] = useState(false);
  
  const handleDelete = (e) => {
    setBtnDelete(!btnDelete);
    if (btnDelete) {
      e.target.parentNode.parentNode.remove();
      changeOrder();
    }
  };

  const changeOrder = (e) => {
    const list = document.querySelectorAll(".list-musics");
    list.forEach((item, index) => {
      item.childNodes[0].innerHTML = index +1;
    });
  };

  const listenerTracks = () => {
    return data.musics.map((track) => {
      return (
        <div className="list-musics">
          <p className="order">{1 + Number(track.id)}</p>
          <img src={track.image} alt="" className="img-track" />
          <div className="track-ids">
            <p className="track-name">{track.name}</p>
            <p className="track-artist">{track.artist}</p>
          </div>
          <p className="track-album">{track.album}</p>
          <BtnFavorite />
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
