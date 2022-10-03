import React from "react";
import "./PagePlaylist.css";
import InfosPlaylist from "./InfosPlaylist/InfosPlaylist";
import ActionNav from "./ActionNav/ActionNav";
import TopBar from "./TopBar/TopBar";
import ListTracks from "./ListTracks/ListTracks";
import Nav from "../Nav/Nav";
import { useEffect, useState } from 'react';
import api from '../../Api/Api';
import GetAllSongsByUser from '../../Api/GetAllSongsByUser';
import Backdrop from '../../utils/Backdrop';

function PagePlaylist() {

  const [backdrop, setBackdrop] = useState(false);
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    setBackdrop(true);
    api.get('/users/user')
      .then((response) => {
        GetAllSongsByUser(response.data.id)
          .then((response) => {
            setMusics(response.data)
            setBackdrop(false);
          })
      })
  }, []);



  return (
    <>
      <Nav />
      <div className="main-container">
        {backdrop && <Backdrop />}
        <InfosPlaylist className="infos-container" name="Músicas Curtidas" type="Playlist" />
        <ActionNav className="actions-container" stateBtnFavorite={false}/>
        <TopBar className="top-bar-container" />
        <ListTracks className="list-tracks-container" musics={musics} stateBtnFavorite={false} />
      </div>
    </>
  );
}

export default PagePlaylist;
