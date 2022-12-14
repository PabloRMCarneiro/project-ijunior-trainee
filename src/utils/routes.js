import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../components/LoginPage/LoginPage';
import PageArtists from '../components/PageArtists/PageArtists';
import PagePlaylist from '../components/PagePlaylist/PagePlaylist';
import CreateUser from '../components/CreateUserPage/CreateUserPage';
import ArtistsPlaylist from '../components/ArtistsPlaylist/ArtistsPlaylist';
import PageMyAccount from '../components/PageMyAccount/PageMyAccount';
import PrivateRoutes from './PrivateRoutes';


function routes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<PageArtists />} path="/artistas" />
          <Route element={<PagePlaylist />} path="/musicas-curtidas" />
          <Route element={<PageMyAccount />} path="/minha-conta" />
          <Route element={<ArtistsPlaylist />} path="/musicas/artistas/:id" />
        </Route>
        <Route element={<LoginPage />} path="/" exact />
        <Route element={<CreateUser />} path="/cadastro" exact />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default routes