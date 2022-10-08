import { React } from "react";
import "./ListTracks.css";
import api from '../../../Api/Api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function ListTracks(props) {

  const { musics } = props;
  const [artist, setArtist] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.target.parentNode.parentNode.remove();
    changeOrder();
  };

  const changeOrder = (e) => {
    const list = document.querySelectorAll(".list-musics");
    list.forEach((item, index) => {
      item.childNodes[0].innerHTML = index + 1;
    });
  };

  useEffect(() => {
    api.get("/artists")
      .then((response) => {
        setArtist(response.data);
      })
  }, []);

  const listenerTracks = () => {
    return musics.map((track, index) => {
      return (
        <div className="list-musics" key={track.id}>
          <p className="order">{1 + index}</p>
          <img src={track.cover_image} alt="" className="img-track" />
          <div className="track-ids">
            <p className="track-name">{track.title}</p>
            <p className="track-artist" onClick={(e) => navigate(`/musicas/artistas/${track.artist_id}`)}>{artist.map((art) => {
              if (art.id === track.artist_id) {
                return art.name;
              }
            })}</p>
          </div>
          <p className="track-album">{track.genre}</p>
          <div className="btn-favorite"></div>
          <button className="btn-delete" onClick={handleDelete}>
            <span className="material-symbols-outlined" id="delete">
              delete
            </span>
          </button>
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