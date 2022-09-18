import { React, useEffect, useState } from "react";
import "./PageArtists.css";
import Api from "../../../Api/Api";

function PageArtists() {
  
  const [artist, setArtist] = useState([]);

  useEffect(() => {

    Api.get("/artists")
      .then((response) => {
        setArtist(response.data);
      })
      .catch((error) => console.log(error));
      
  }, []);



  const handleArtists = () => {
    return artist.map((artist) => {
      return (
        <div className="card-artists" key ={artist.id}>
          <img src={artist.image} alt="" className="image-artists" />
          <div className="infos-artists">
            <p className="name-artists">{artist.name}</p>
            <p className="class-artists">Artista</p>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div className="main-container-artists">
      <p className="main-title">Artistas</p>

      <div className="container-artists">
        {handleArtists()}
      </div>
    </div>
  );
}

export default PageArtists;
