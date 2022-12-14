import { React, useEffect, useState } from "react";
import "./PageArtists.css";
import Api from "../../Api/Api";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom"
import SimpleBackdrop from '../../utils/Backdrop';

function PageArtists() {

  const [backdrop, setBackdrop] = useState(false);
  const [artist, setArtist] = useState([]);
  const [musicsArtist, setMusicsArtist] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    
    localStorage.getItem('stateLog') === 'false' ? navigate('/') : navigate('/artistas');
    
    setBackdrop(true);

    Api.get("/artists")
      .then((response) => {
        setBackdrop(false);
        setArtist(response.data);
      })
      .catch((error) => {
        console.log(error)
        setBackdrop(false);
      });

  }, [navigate]);

  
  const handleArtistPlaylist = (id) => {
    setMusicsArtist(!musicsArtist);
    musicsArtist ? navigate(`/musicas/artistas/${id}`) : navigate('/artistas');
  }

  return (
    <>
      <Nav />
      <div className="main-container-artists">
        {backdrop && <SimpleBackdrop />}
        <p className="main-title">Artistas</p>
        <div className="container-artists">
          {artist.map((art) => {
            return (
              <div className="card-artists" key={art.id} onClick={e => handleArtistPlaylist(art.id)}  >
                <img src={art.image} alt="" className="image-artists" />
                <div className="infos-artists">
                  <p className="name-artists">{art.name}</p>
                  <p className="class-artists">Artista</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PageArtists;
