import React from 'react';
import { Container, Typography } from '@mui/material';
import Layout from '../components/Layout/Layout';
import CustomButton from '../components/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Error = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHomeRedirect = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Image Section */}
        <div>
          <img
            src="/Error.png"
            alt="Error Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Error Text Section */}
        <Container maxWidth="md" className="text-center">
          <Typography variant="h5" className="text-2xl" style={{ color: '#6F4E37' }}>
            Oops! We can&apos;t seem to find the page you&apos;re looking for.
          </Typography>

          {/* Custom Button */}
        </Container>

        <div className="pt-[1.7vw]">
          <CustomButton
            text="Return Home"
            onClick={handleHomeRedirect}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Error;
