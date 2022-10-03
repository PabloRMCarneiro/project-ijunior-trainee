import { React, useState } from "react";
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
      {backdrop && <SimpleBackdrop />}
      <p className="title">iSpotify ®</p>
      <div className="nav-links">
        <Link to="/artistas" className="links">
          <span className="material-symbols-outlined">album</span>
          <p className="link-name">Artistas</p>
        </Link>
        <Link to="/musicas-curtidas" className="links">
          <span className="material-symbols-outlined">favorite</span>
          <p className="link-name">Músicas Curtidas</p>
        </Link>
        <Link to="/minha-conta" className="links">
          <span className="material-symbols-outlined">account_circle</span>
          <p className="link-name">Minha Conta</p>            
        </Link>
      </div>
      <footer className="logout">
        <Link to="/" onClick={handleLogout} className="links">
          <span className="material-symbols-outlined">logout</span>
          <p className="link-name">Logout</p>          
        </Link>
      </footer>
    </div>
  );
}

export default Nav;
