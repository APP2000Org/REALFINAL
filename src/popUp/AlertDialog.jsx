/*Laget av Patrick S. Lorentzen og Sondre Reinholdtsen StudNr:225274 
Denne koden sørger for alt som skjer i ett pop up vindu. Data blir sendt hit og skrevet ut i dialogBoksen */ 

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
//Toogler om vinduet blir vist eller skjult
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant={props.enVariant} color="inherit" onClick={handleClickOpen} style={{margin:10}}>
       {props.beskrivelse}
      </Button>

      {/*denne dialogboksen blir vist når knapp er trykket på*/}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {props.innhold}
      </Dialog>
    </div>
  );
}