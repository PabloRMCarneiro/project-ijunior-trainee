import React from "react";
import "./Main.css";
import Nav from "../Nav/Nav";
import Playlist from "../Playlist/Playlist";

function Main() {
  return (
    <div className="main">
      <Nav />
      <Playlist />
    </div>
  );
}

export default Main;
