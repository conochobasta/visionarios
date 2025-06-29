import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function RegisterPopup({ open, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
    alert('Registro enviado');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registro</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre completo"
            type="text"
            fullWidth
            required
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Correo electrónico"
            type="email"
            fullWidth
            required
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Contraseña"
            type="password"
            fullWidth
            required
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained" color="secondary">
            Crear cuenta
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
