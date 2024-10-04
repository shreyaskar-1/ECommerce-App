import Layout from '../components/Layout/Layout';
import { TextField, Box } from '@mui/material';
import Button from '../components/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white py-10 px-4">
        {/* Contact Header */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-lg text-center">
          Have questions or want to work together? We&apos;d love to hear from you!
        </p>

        {/* Contact Form */}
        <Box
          component="form"
          className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Name Field */}
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            className="rounded-xl focus:ring-2 focus:ring-[#6F4E37] transition duration-200"
            InputProps={{
              className: 'text-black',
            }}
          />

          {/* Email Field */}
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            className="rounded-xl focus:ring-2 focus:ring-[#6F4E37] transition duration-200"
            InputProps={{
              className: 'text-black',
            }}
          />

          {/* Message Field */}
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className="rounded-xl focus:ring-2 focus:ring-[#6F4E37] transition duration-200"
            InputProps={{
              className: 'text-black',
            }}
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button className="bg-[#6F4E37] text-white rounded-full hover:bg-[#6F4E37] transition duration-300">
              Send Message
            </Button>
          </div>
        </Box>

        {/* Contact Information Section */}
        <div className="mt-12 text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>

          {/* Icons with contact info */}
          <div className="flex flex-col md:flex-row space-x-8">
            <div className="flex flex-col items-center">
              <PhoneIcon className="text-[#6F4E37]" fontSize="large" />
              <p className="text-gray-600">+123 456 7890</p>
            </div>
            <div className="flex flex-col items-center">
              <EmailIcon className="text-[#6F4E37]" fontSize="large" />
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
            <div className="flex flex-col items-center">
              <LocationOnIcon className="text-[#6F4E37]" fontSize="large" />
              <p className="text-gray-600">123 Your Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
