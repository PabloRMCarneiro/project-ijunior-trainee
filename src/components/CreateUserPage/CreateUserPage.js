import { React, useState, useEffect } from 'react'
import './CreateUserPage.css'
import { Link, useNavigate } from 'react-router-dom';
import CreateUser from '../../Api/CreateUser'
import SimpleBackdrop from '../../utils/Backdrop';
import SimpleAlert from '../../utils/Alert'

function CreateUserPage() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backdrop, setBackdrop] = useState(false);
  const [simpleAlert, setSimpleAlert] = useState(false);
  const [alert1, setAlert1] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('stateLog') === 'true' ? navigate('/artistas') : navigate('/cadastro');
  }, [navigate]);


  function handleSubmit(e) {
    e.preventDefault();

    setBackdrop(true);

    if (name === '' || email === '' || password === '') {
      setTimeout(() => {
        setSimpleAlert(true);
        setBackdrop(false);
      }, 500);
    }
    else {
      CreateUser(name, email, password)
        .then((response) => {
          setBackdrop(false);
          navigate('/');
        })
        .catch((error) => {
          console.log(error)
          setBackdrop(false);
          setAlert1(true);
        })
    }
    /*  document.querySelector('.input-name').value = ''; // limpa o campo nome
     document.querySelector('.input-email').value = ''; // limpa o campo email
     document.querySelector('.input-password').value = ''; // limpa o campo senha */
  };

  function handleName(e) {
    setName(e.target.value);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  };

  function handlePassword(e) {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="main-container-create-user-page">
        {backdrop && <SimpleBackdrop />}
        <div className="container-create-user">
          <p className="create-user-title">Inscrever-se em uma conta grátis do iSpotify ®</p>
          {simpleAlert && <SimpleAlert message="Todos os campos são obrigatórios" />}
          {alert1 && <SimpleAlert message="Já existe usuário com esse email!" />}
          <form className="create-user-form" onSubmit={handleSubmit}>
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
            <div className="input-icons">
              <input className="input-password" type="text" placeholder="Como devemos chamar você?" onChange={handleName} value={name} />
              <span className="material-symbols-outlined">
                person
              </span>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
          <p className="page-create-acount">Já é um usário do iSpotify?
            <Link to="/" className="a"> FAÇA LOGIN</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default CreateUserPage