import Layout from '../../components/Layout/Layout';
import { Grid, Box, Alert } from '@mui/material';
import Form from '../../components/Form';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
  const [alert, setAlert] = useState({ message: '', severity: '' });

  const handleRegister = async (e, userData) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        userData
      );

      if (res.data.success) {
        setAlert({ message: 'Registration Successful!', severity: 'success' });
      } else {
        setAlert({ message: res.data.message || 'Registration Failed!', severity: 'error' });
      }
    } catch (error) {
      setAlert({ message: error.response?.data?.message || 'An error occurred', severity: 'error' });
      console.error(error);
    }
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Register"
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {alert.message && (
              <Alert severity={alert.severity} onClose={() => setAlert({ message: '', severity: '' })}>
                {alert.message}
              </Alert>
            )}
            <Form isRegister={true} handleSubmit={handleRegister} />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Register;
