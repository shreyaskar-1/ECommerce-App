import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';
import Button from '../components/Button'; // Import your  button

const About = () => {
  return (
    <Layout>
      <Box className="p-8">
        {/* Hero Section */}
        <Box className="flex flex-col items-center mb-8">
          <Typography variant="h2" className="text-[#6F4E37] mb-4 text-center font-semibold">
            Welcome to Shrey Store
          </Typography>
          <Typography variant="h5" className="text-center mb-4 max-w-2xl">
            Discover a diverse range of quality products curated to enhance your lifestyle.
          </Typography>
          <Button
            name="Explore Our Products"
            onClick={() => window.location.href = '/shop'} // Link to your shop page
          />
        </Box>

        {/* Our Story Section */}
        <Typography variant="h4" className="text-center text-[#6F4E37] mb-4 font-semibold">
          Our Story
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/ecommerce-concept-illustration_114360-1171.jpg"
              alt="Our Story"
              className="rounded-xl object-cover w-full h-auto"
            />
          </Grid>
          <Grid item xs={12} md={6}>
              <Typography variant="body1" className="text-[#6F4E37]">
                Founded in 2024, Shrey Store is born from a passion for curating unique products that resonate with our customers. Our journey began with a simple idea: to offer high-quality items that enhance your everyday life.
              </Typography>
              <Typography variant="body1" className="mt-2 text-[#6F4E37]">
                With a commitment to excellence and customer satisfaction, we have grown to become a trusted source for quality products. Explore our extensive collection and find what you need to elevate your lifestyle.
              </Typography>
          </Grid>
        </Grid>

        <Divider className="my-8" />

        {/* Values Section */}
        <Typography variant="h4" className="text-center text-[#6F4E37] mb-4 font-semibold">
          Our Core Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Paper elevation={2} className="p-4 text-center bg-[#ede8d0] shadow-md">
              <Typography variant="h6" className="text-[#6F4E37]">Quality</Typography>
              <Typography variant="body2">
                We prioritize quality in every product we offer to ensure customer satisfaction.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Paper elevation={2} className="p-4 text-center bg-[#ede8d0] shadow-md">
              <Typography variant="h6" className="text-[#6F4E37]">Customer Focus</Typography>
              <Typography variant="body2">
                Our customers are at the heart of everything we do; we listen and adapt to your needs.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Paper elevation={2} className="p-4 text-center bg-[#ede8d0] shadow-md">
              <Typography variant="h6" className="text-[#6F4E37]">Innovation</Typography>
              <Typography variant="body2">
                We embrace creativity and strive for innovative solutions to enhance your shopping experience.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider className="my-8" />

        {/* Call to Action */}
        <Box className="text-center mt-8">
          <Typography variant="h4" className="mb-4">Join Our Community</Typography>
          <Typography variant="body1" className="mb-4 max-w-2xl mx-auto">
            Be part of the Shrey Store family! Sign up for our newsletter to receive the latest updates and exclusive offers straight to your inbox.
          </Typography>
          <Button
            name="Subscribe Now"
            onClick={() => window.location.href = '/subscribe'} // Link to your subscription page
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
