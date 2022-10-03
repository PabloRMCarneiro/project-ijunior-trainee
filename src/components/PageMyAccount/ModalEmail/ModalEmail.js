import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './ModalEmail.css'
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


  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [backdrop, setBackdrop] = React.useState(false);
  const [alert, setAlert] = React.useState(false);

  const [userEmail, setUserEmail] = React.useState('');
  const [userId, setUserId] = React.useState(0);

  const handleClose = () => setOpen(false);
  const handleEmail = (e) => setEmail(e.target.value);


  useEffect(() => {
    Api.get('/users/user')
      .then((response) => {
        setUserEmail(response.data.email);
        setUserId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setBackdrop(true);

    if (email === '') {
      setTimeout(() => {
        setBackdrop(false);
        setAlert(true);
      }, 700);
    }
    else if(email === userEmail){
      setTimeout(() => {
        setBackdrop(false);
        setAlert(true);
      }, 700);
    }
    else {
      UpdateUser(userId, email)
        .then(() => {
          setBackdrop(false);
          handleClose()
        })
        .catch(() => {
          setBackdrop(false);
          setAlert(true)
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
              Novo Email
            </Typography>
            {alert && <Alert message="Email Inválido!" />}
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <div className="input-icons" >
                  <input className="input-email" type="email" placeholder="Email" onChange={handleEmail} value={email} />
                  <span className="material-symbols-outlined">
                    mail
                  </span>
                </div>
                <div className="buttons">
                  <button className="btn-cancel" onClick={handleClose}>Cancelar</button>
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
