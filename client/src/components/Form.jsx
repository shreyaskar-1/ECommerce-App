import { useState } from 'react';
import { TextField, Grid, Box, Snackbar, Alert } from '@mui/material';
import CustomButton from './Button';

const Form = ({ isRegister, handleSubmit }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // State variables for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation state
  const [error, setError] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form behavior
  
    if (isRegister && (!name || !phone || !address)) {
      setError('All fields are required for registration');
      return;
    }
  
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
  
    setError(''); 
  
    const userData = {
      name,
      phone,
      address,
      email,
      password,
    };
  
    handleSubmit(e, userData);
  };

    setMessage(isRegister ? 'Registration Successful!' : 'Login Successful!');
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <Grid container spacing={2} maxWidth="400px" direction="column">
        {isRegister && (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={Boolean(error && !name)}
                helperText={error && !name ? 'Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={Boolean(error && !phone)}
                helperText={error && !phone ? 'Phone is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={Boolean(error && !address)}
                helperText={error && !address ? 'Address is required' : ''}
              />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error && (!email || !validateEmail(email)))}
            helperText={error && (!email || !validateEmail(email)) ? 'Please enter a valid email' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error && (password.length < 6))}
            helperText={error && (password.length < 6) ? 'Password must be at least 6 characters' : ''}
          />
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <CustomButton
            text={isRegister ? 'Register' : 'Login'}
            onClick={handleFormSubmit}
          />
        </Grid>
      </Grid>

      {/* Snackbar for Success Toast */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
