import React from "react";
import "./PagePlaylist.css";
import InfosPlaylist from "./InfosPlaylist/InfosPlaylist";
import ActionNav from "./ActionNav/ActionNav";
import TopBar from "./TopBar/TopBar";
import ListTracks from "./ListTracks/ListTracks";
import Nav from "../Nav/Nav";

function PagePlaylist() {
  return (
    <>
      <Nav />
      <div className="main-container">
        <InfosPlaylist className="infos-container" />
        <ActionNav className="actions-container" />
        <TopBar className="top-bar-container" />
        <ListTracks className="list-tracks-container" />
      </div>
    </>
  );
}

export default PagePlaylist;
