import Layout from '../../components/Layout/Layout';
import { Grid, Box } from '@mui/material';
import Form from '../../components/Form';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login API call simulation');
  };

  return (
    <Layout>
    <Grid container>
      <Grid item xs={12} md={6}>
        {/* Use an image from Pexels */}
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="Login"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Form isRegister={false} handleSubmit={handleLogin} />
        </Box>
      </Grid>
    </Grid>
    </Layout>
  );
};

export default Login;
