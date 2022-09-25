/* import { render } from "react-dom";
import {
  BrowserRouter,
  Route,

} from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import CreateUserPage from "./components/CreateUserPage/CreateUserPage";
import PageArtists from "./components/PageArtists/PageArtists";
import Playlist from "./components/PagePlaylist/PagePlaylist"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('stateLog') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

render(
  <BrowserRouter>
    <Switch>

      <Route path="/" exact component={<LoginPage />} >
      </Route>
      <Route path="/cadastro" component={<CreateUserPage />}>
      </Route>
      <PrivateRoute path="/artistas" component={<PageArtists />}>
      </PrivateRoute>
      

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);  */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)