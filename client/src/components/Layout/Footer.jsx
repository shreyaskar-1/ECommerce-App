import React from 'react'
import { Box, Grid, Typography, IconButton } from '@mui/material'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-[#EDE8D0] text-gray-800 py-10 px-5 md:px-20"
    >
      <Grid container spacing={5} className="mb-8">
        {/* Text Logo Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            className="font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }} // Custom font
          >
            Shrey's Store
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            Welcome to Shrey's Store, your one-stop shop for high-quality products at unbeatable prices. Shop with confidence and enjoy the best customer service experience!
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" className="font-semibold text-gray-900 mb-4">
            Quick Links
          </Typography>
          <ul className="space-y-2">
            <li>
              <a href="/shop" className="text-gray-700 hover:text-gray-900">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-gray-700 hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-700 hover:text-gray-900">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" className="font-semibold text-gray-900 mb-4">
            Contact Us
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            Email: support@shreystore.com
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            Phone: +1 (123) 456-7890
          </Typography>
          <div className="flex space-x-3">
            <IconButton href="https://facebook.com" target="_blank" className="text-gray-800 hover:text-gray-600">
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" className="text-gray-800 hover:text-gray-600">
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" className="text-gray-800 hover:text-gray-600">
              <Twitter />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" className="text-gray-800 hover:text-gray-600">
              <YouTube />
            </IconButton>
          </div>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <div className="text-center border-t border-gray-300 pt-5">
        <Typography variant="body2" className="text-gray-700">
          &copy; 2024 Shreyaskar. All rights reserved.
        </Typography>
      </div>
    </Box>
  )
}

export default Footer
