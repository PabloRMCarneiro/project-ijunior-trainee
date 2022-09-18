import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-menu">
      {/* <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
        className="logo-img"
      /> */}
      <p className="title">iSpotify ®</p>
      <div className="nav-links">
        <a href="/">
          <span className="material-symbols-outlined">album</span>
          Artistas
        </a>
        <a href="/">
          <span className="material-symbols-outlined">favorite</span>
          Músicas Curtidas
        </a>
      </div>
      <footer className="logout">
        <a href="/">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </a>
      </footer>
    </div>
  );
}

export default Nav;
