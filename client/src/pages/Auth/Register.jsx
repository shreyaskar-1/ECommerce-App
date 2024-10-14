import Layout from '../../components/Layout/Layout';
import { Grid, Box } from '@mui/material';
import Form from '../../components/Form';

const Register = () => {
  const handleRegister = () => {
    console.log('Register API call simulation');
    // Simulate an API call here
  };

  return (
    <Layout>
    <Grid container>
      <Grid item xs={12} md={6}>
        {/* Use an image from Pexels */}
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Register"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Form isRegister={true} handleSubmit={handleRegister} />
        </Box>
      </Grid>
    </Grid>
    </Layout>
  );
};

export default Register;
