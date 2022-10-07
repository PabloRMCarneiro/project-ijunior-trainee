import { React, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './ModalPassword.css'

import SimpleBackdrop from '../../../utils/Backdrop';
import Alert from '../../../utils/Alert';
import UpdateUser from '../../../Api/UpdateUser';
import Api from '../../../Api/Api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000000',
  border: 'none',
  boxShadow: 24,
  p: 4,
  marginLeft: '130px',
  color: '#ffffff',
  fontFamily: 'Inter',
};


export default function TransitionsModal() {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [backdrop, setBackdrop] = useState(false);
  const [simpleAlert, setSimpleAlert] = useState(false); // quando algum dos campos estiver vazio
  const [alertDiferent, setAlertDiferent] = useState(false); // quando as senhas forem diferentes (nova senha e confirmar nova senha)
  const [alertEqual, setAlertEqual] = useState(false); // quando a senha atual for igual a nova senha
  const [alert, setAlert] = useState(false); // quando a senha atual for diferente da senha cadastrada

  const [open, setOpen] = useState(true); // abrir e fechar o modal

  const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
  const handleNewPassword = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPassword = (e) => setConfirmNewPassword(e.target.value);

  const handleClose = () => setOpen(false);

  const [data, setData] = useState({});

  useEffect(() => {
    Api.get('/users/user')
      .then((response) => {
        setData(response.data);
      })
  }, []);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBackdrop(true);
    setSimpleAlert(false);
    setAlertDiferent(false);
    setAlertEqual(false);

    if (currentPassword === '' || newPassword === '' || confirmNewPassword === '') {
      setTimeout(() => {
        setBackdrop(false);
        setSimpleAlert(true);
      }, 700);
    }
    else if (newPassword !== confirmNewPassword) {
      setTimeout(() => {
        setBackdrop(false);
        setAlertDiferent(true);
      }, 700);
    }
    else if (currentPassword === newPassword) {
      setTimeout(() => {
        setBackdrop(false);
        setAlertEqual(true);
      }, 700);
    }
    else {
      UpdateUser(data.id, data.email, data.name, newPassword)
        .then((response) => {
          console.log(response);
          setBackdrop(false);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
          setBackdrop(false);
          setAlert(true);
        });
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            {backdrop && <SimpleBackdrop />}
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Nova Senha
            </Typography>
            {simpleAlert && <Alert message="Preencha todos os campos!" />}
            {alertDiferent && <Alert message="As senhas não são iguais!" />}
            {alertEqual && <Alert message="A nova senha não pode ser igual a senha atual!" />}
            {alert && <Alert message="Senha inválida!" />}
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <div className="input-icons" >
                  <input className="input-password" type="password" placeholder="Senha Atual" value={currentPassword} onChange={handleCurrentPassword} />
                  <span className="material-symbols-outlined">
                    lock
                  </span>
                </div>
                <div className="input-icons" >
                  <input className="input-password" type="password" placeholder="Nova Senha" value={newPassword} onChange={handleNewPassword} />
                  <span className="material-symbols-outlined">
                    lock
                  </span>
                </div>
                <div className="input-icons" >
                  <input className="input-password" type="password" placeholder="Confirmar Nova Senha" value={confirmNewPassword} onChange={handleConfirmNewPassword} />
                  <span className="material-symbols-outlined">
                    lock
                  </span>
                </div>
                <div className="buttons">
                  <button type="submit" className="btn-cancel" onClick={handleClose}>Cancelar</button>
                  <div className="spacing"></div>
                  <button type="submit" className="btn-confirm">Confirmar</button>
                </div>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
