import { React, useEffect, useState} from 'react'
import './ListTrackArtist.css'
import CreateUserSongs from '../../../Api/CreateUserSongs';
import GetAllSongsByUser from '../../../Api/GetAllSongsByUser';
import api from '../../../Api/Api'

function ListTrackArtist(props) {

  const { musics, artist,  stateBtnFavorite } = props;
  const [music, setMusic] = useState([]);
  const [btnColor, setBtnColor] = useState(true);

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

  const handleColor = (e) => {
    if (btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 1";
      e.target.style.color = "#3FE168";
      
    }
    if (!btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 0";
      e.target.style.color = "#CCCCCC";
    }
    setBtnColor(!btnColor);
  }

  const creteSongs = (track_id) => CreateUserSongs(track_id)

  const setColor = (e) => {
    for(let i = 0; i < musics.length; i++) {
      for(let j = 0; j < music.length; j++) {
        if(musics[i].title === music[j].title)  {
          const container = document.querySelector('.container-list-music-artist');
          for(let k = 0; k < container.childNodes.length; k++) {
            if(container.childNodes[k].childNodes[2].childNodes[0].innerHTML === music[j].title) {
              const btn = container.childNodes[k].childNodes[4].childNodes[0];
              btn.style.fontVariationSettings = "'FILL' 1";
              btn.style.color = "#3FE168";
            }
          }
        }
      }
    }
  }

  const listenerTracks = () => {
    return musics.map((track, index) => {
      return (
        <div className="list-musics" key={track.id}>
          <p className="order">{1 + index}</p>
          <img src={track.cover_image} alt="" className="img-track" />
          <div className="track-ids">
            <p className="track-name">{track.title}</p>
            <p className="track-artist">{artist}</p>
          </div>
          <p className="track-album">{track.genre}</p>
          
          {stateBtnFavorite && <button className="btn-favorite" onClick={(e) => {
            handleColor(e);
            creteSongs(track.id)
          }}  >
            <span className="material-symbols-outlined" id="favorite-art" >
              favorite
            </span>
          </button>}
          {!stateBtnFavorite && <div className="btn-favorite"></div>}
          <button className="btn-delete" onClick={handleDelete}>
            <span className="material-symbols-outlined" id="delete">
              delete
            </span>
          </button>
        </div>
      );
    });
  };

  useEffect(() => {
    api.get('/users/user')
      .then((response) => {
        GetAllSongsByUser(response.data.id)
          .then((response) => {
            setMusic(response.data)
          })
      })

      
  }, []);

  return (
    <>
      {setColor()}
      <div className="container-list-music-artist">{listenerTracks()}</div>
    </>
  );
}

export default ListTrackArtist