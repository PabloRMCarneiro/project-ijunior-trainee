import React from "react";
import "./Playlist.css";
import InfosPlaylist from "./InfosPlaylist/InfosPlaylist";
import ActionNav from "./ActionNav/ActionNav";
import TopBar from "./TopBar/TopBar";
import ListTracks from "./ListTracks/ListTracks";

function Playlist() {
  return (
    <>
      <div className="main-container">
        <InfosPlaylist className="infos-container" />
        <ActionNav className="actions-container" />
        <TopBar className="top-bar-container" />
        <ListTracks className="list-tracks-container" /> 
      </div>
    </>
  );
}

export default Playlist;
