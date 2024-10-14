import Layout from '../components/Layout/Layout';
import { Box, Grid, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '../components/Button';

const Contact = () => {

  const handleSubmit = ()=>{
    console.log('Form submitted');
  }

  return (
    <Layout
    title={'Contact Us'}
    >
      <div className="flex flex-col items-center justify-center bg-white py-[3vw]">
        
        {/* Business Description Section */}
        <section className="w-full mb-12 px-[4vw]">
          <h2 className="font-bold text-gray-800 mb-4 text-[4vw] text-center">
            Let&apos;s Connect
          </h2>
          <h4  className="text-[1.9vh] sm:text-[2.6vw] md:text-[2vw] text-gray-600 text-center">
            Have any questions about our products, shipping policies, or need help with your order? We&apos;re here to assist you! Contact us for any queries regarding your shopping experience.
          </h4>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-3xl mb-12">
          <h2 className="font-bold text-gray-800 mb-4 text-[4vw] text-center">
            Frequently Asked Questions
          </h2>
          <Accordion className="rounded-xl">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-100">
              <h4 className="font-semibold">What payment methods do you accept?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <h4>
                We accept credit/debit cards, PayPal, and several other payment gateways to make your shopping experience seamless.
              </h4>
            </AccordionDetails>
          </Accordion>
          <Accordion className="rounded-xl mt-4">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-gray-100">
              <h4 className="font-semibold">What is your return policy?</h4>
            </AccordionSummary>
            <AccordionDetails>
              <h4>
                You can return items within 30 days of delivery. Please ensure that the items are in their original condition for a full refund or exchange.
              </h4>
            </AccordionDetails>
          </Accordion>
          {/* Add more FAQ items specific to e-commerce */}
        </section>

        {/* Contact Section */}
        <section className="w-full max-w-5xl">
          <Grid container spacing={4} className="flex items-center">
            
            {/* Left Side: Image */}
            <Grid item xs={12} md={6} className="flex justify-center">
              <img
                src='https://img.freepik.com/free-vector/get-touch-abstract-concept-illustration_335657-4848.jpg?t=st=1728209669~exp=1728213269~hmac=8b089655929af3c77049842eb2ba4c72899cea145aff373d941990eeffe666df&w=740'
                alt="Contact Us"
                className="rounded-xl object-cover w-full"
                width={500}
                height={500}
              />
            </Grid>

            {/* Right Side: Contact Form */}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                className="bg-white rounded-xl shadow-lg p-8 space-y-6"
              >
                {/* Name Field */}
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  className="rounded-xl focus:ring-2 focus:ring-[#FF4500] transition duration-200"
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
                  className="rounded-xl focus:ring-2 focus:ring-[#FF4500] transition duration-200"
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
                  className="rounded-xl focus:ring-2 focus:ring-[#FF4500] transition duration-200"
                  InputProps={{
                    className: 'text-black',
                  }}
                />

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    text='Submit'
                    onClick={handleSubmit}
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
