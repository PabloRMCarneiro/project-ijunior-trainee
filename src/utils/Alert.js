import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleAlert(props) {

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  return (
    <Box sx={{ width: '454px', marginTop: '25px', marginBottom: '-25px'}}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          color="error"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={handleOpen}
            > 
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.message}
        </Alert>
      </Collapse>
    </Box>
  );
}
