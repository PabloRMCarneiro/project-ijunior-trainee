import { React, useState, useEffect } from 'react'
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import LoginApi from '../../Api/LoginApi'
import SimpleBackdrop from '../../utils/Backdrop';
import SimpleAlert from '../../utils/Alert'

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backdrop, setBackdrop] = useState(false);
  const [simpleAlert, setSimpleAlert] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    localStorage.getItem('stateLog') === 'true' ? navigate('/artistas') : navigate('/');
  }, [navigate]);


  function handleSubmit(e) {
    e.preventDefault();

    setBackdrop(true);


    LoginApi(email, password)
      .then((response) => {

        setSimpleAlert(false);
        setBackdrop(false);

        localStorage.setItem('stateLog', true);
        navigate('/artistas');
      })
      .catch((error) => {
        setSimpleAlert(true);
        setBackdrop(false);        
      })
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="main-container-login-page">
        {backdrop && <SimpleBackdrop />}
        <div className="container-login">
          <p className="login-title">iSpotify ®</p>
          <p className="login-description">Músicas para todos.</p>
          {simpleAlert && <SimpleAlert message = "Usário e/ou senha inválido(s)!"/>}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-icons">
              <input className="input-email" type="email" placeholder="Email" onChange={handleEmail} value={email} />
              <span className="material-symbols-outlined">
                mail
              </span>
            </div>
            <div className="input-icons">
              <input className="input-password" type="password" placeholder="Senha" onChange={handlePassword} value={password} />
              <span className="material-symbols-outlined">
                lock  
              </span>
            </div>
            <button type="submit">Entrar</button>
          </form>
          <p className="page-create-acount">NÃO TEM UMA CONTA?
            <Link to="/cadastro" className="a"> INSCREVA-SE</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage