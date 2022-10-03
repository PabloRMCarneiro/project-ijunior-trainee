import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <>
      <div className="container-top-bar">
        <div className="top">
          <div className="title-hashtag">
            <p className="hashtag">#</p>
            <p className="title">Título</p>
          </div>
          <p className="album">Gênero</p>
          <span className="material-symbols-outlined">schedule</span>
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default TopBar;
