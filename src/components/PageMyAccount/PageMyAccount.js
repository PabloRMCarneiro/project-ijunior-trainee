import { React, useState, useEffect} from 'react'
import './PageMyAccount.css'
import ModalEmail from './ModalEmail/ModalEmail'
import ModalPassword from './ModalPassword/ModalPassword'
import SimpleBackdrop from '../../utils/Backdrop'
import SimpleAlert from '../../utils/Alert'
import Api from '../../Api/Api'

import Nav from "../Nav/Nav";

function PageMyAccount() {

  const [backdrop, setBackdrop] = useState(false);
  const [simpleAlert, setSimpleAlert] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [modalEmail, setModalEmail] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleModalEmail = () => setModalEmail(!modalEmail);
  const handleModalPassword = () => setModalPassword(!modalPassword);


  useEffect(() => {
    Api.get('/users/user')
      .then((response) => {
        const user = response.data;
        setUserName(user.name);
        setUserEmail(user.email);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBackdrop(true);

    if( email !== userEmail || name !== userName){
      setTimeout(() => {
        setSimpleAlert(true);
        setBackdrop(false);
      }, 500);
    } 
    else if (name === '' || email === '') {
      setTimeout(() => {
        setSimpleAlert(true);
        setBackdrop(false);
      }, 500);
    }
    else {
      setSimpleAlert(false)
      setBackdrop(false);
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      }, 2000);
  };

  return (
    <>
      <Nav />
      <div className="main-container-my-account">
        <div className="container-my-account">
          {!simpleAlert && modalEmail ? <ModalEmail /> : null}
          {!simpleAlert && modalPassword && <ModalPassword />}
          {backdrop && <SimpleBackdrop />}
          <p className="main-title">Minha Conta</p>
          {simpleAlert && <SimpleAlert message="Nome e/ou email inválidos!" />}
          <form className="my-account-form" onSubmit={handleSubmit}>
            <div className="input-icons">
              <input className="input-name" type="text" placeholder="Nome" value={name} onChange={handleName} />
              <span className="material-symbols-outlined">
                account_circle
              </span>
            </div>
            <div className="input-icons">
              <input className="input-email" type="email" placeholder="Email" value={email} onChange={handleEmail} />
              <span className="material-symbols-outlined">
                mail
              </span>
            </div>
            <button type="submit" onClick={() => handleModalEmail()} >Trocar Email</button>
            <button type="submit" onClick={handleModalPassword} >Trocar Senha</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PageMyAccount