import { React } from "react";
import "./Main.css";
import Nav from "./Nav/Nav";
/* import Playlist from "./Playlist/Playlist"; */

import PageArtists from "./PageArtists/PageArtists";

function Main() {
  

  return (
    <div className="main">
      <Nav />
      <PageArtists />
      {/* <Playlist /> */}
    </div>
  );
}

export default Main;
