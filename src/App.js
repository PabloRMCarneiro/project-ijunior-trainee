import "./App.css";
import { useEffect } from 'react';
import LoginApi from './Api/LoginApi';
import Main from "./components/Main/Main";

function App() {

  useEffect(() => {
  /*se não estiver logado chamar LoginApi()*/
    
  LoginApi();

  }, []);
  return (
    <>
      <Main className="main-container" />
    </>

  );
}

export default App;
