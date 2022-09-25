import {React, useState} from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'
import LogoutApi from '../../Api/LogoutApi'
import SimpleBackdrop from '../../utils/Backdrop';

function Nav() {

  const [backdrop, setBackdrop] = useState(false);

  function handleLogout() {

    setBackdrop(true);
    localStorage.setItem('stateLog', false);
    LogoutApi()
      .then(() => {
        setBackdrop(false)
        window.location.reload()
      })
      .catch((error) => {
        setBackdrop(false);
        console.log(error)
      })

  }

  return (
    <div className="nav-menu">
      {backdrop && <SimpleBackdrop/>}
      <p className="title">iSpotify ®</p>
      <div className="nav-links">
        <Link to="/artistas">
          <span className="material-symbols-outlined">album</span>
          Artistas
        </Link>
        <Link to="/musicas-curtidas">
          <span className="material-symbols-outlined">favorite</span>
          Músicas Curtidas
        </Link>
      </div>
      <footer className="logout">
        <Link to="/" onClick={handleLogout}>
          <span className="material-symbols-outlined">logout</span>
          Logout
        </Link>
      </footer>
    </div>
  );
}

export default Nav;
