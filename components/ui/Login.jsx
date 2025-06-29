import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function LoginPopup({ open, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de login
    alert('Login enviado');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Inicio de Sesión</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            autoFocus
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
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
