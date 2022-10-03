import {React, useEffect, useState} from 'react'
import './ArtistsPlaylist.css'
import Nav from '../Nav/Nav'
import InfosPlaylist from '../PagePlaylist/InfosPlaylist/InfosPlaylist'
import ActionNav from '../PagePlaylist/ActionNav/ActionNav'
import ListTrackArtist from './ListTrackArtist/ListTrackArtist'
import TopBar from '../PagePlaylist/TopBar/TopBar'
import { useParams} from "react-router-dom";
import Backdrop from '../../utils/Backdrop';
import Api from '../../Api/Api';


function ArtistsPlaylist() {
  
  const [backdrop, setBackdrop] = useState(false);
  const [artist, setArtist] = useState([]);
  const [musics, setMusics] = useState([]);

  const { id } = useParams();

  useEffect(() => {
       
        setBackdrop(true);

        Api.get(`/artists/${id}`)
        .then((response) => {
          setArtist(response.data);
          setBackdrop(false);
        })

        Api.get(`/songs/artist/${id}`)
        .then((response) => {
          setMusics(response.data);
          setBackdrop(false);
        })    
        
      }, [id]);

  
  return (
    <>
      <Nav />
      {backdrop && <Backdrop/>}
      <div className="main-container-artist">
      <InfosPlaylist className="infos-container" name={artist.name} type="Artista" image={artist.image} />
      <ActionNav className="actions-container" stateBtnFavorite ={true} />
      <TopBar className="top-bar-container" />
      <ListTrackArtist className="list-tracks-container" musics={musics} artist={artist.name} stateBtnFavorite={true}/>
      </div>
    </>
  )
}

export default ArtistsPlaylist