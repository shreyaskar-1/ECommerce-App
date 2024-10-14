import Layout from '../components/Layout/Layout';
import Button from '../components/Button';

// Reusable Card Component
const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-full p-2 text-center bg-[#ede8d0] rounded-lg shadow-md flex flex-col justify-cente items-centerr">
        <h6 className="text-[#6F4E37] font-semibold text-lg md:text-[1.5vw] h-[35%]">{title}</h6>
        <p className="text-sm md:text-[1vw] h-[65%]">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const coreValues = [
    {
      title: 'Quality',
      description: 'We prioritize quality in every product we offer to ensure customer satisfaction.',
    },
    {
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do; we listen and adapt to your needs.',
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and strive for innovative solutions to enhance your shopping experience.',
    },
    {
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices, ensuring our products and processes are sustainable for the environment.',
    }
  ];

  return (
    <Layout 
    title={'About'}
    >
      <div className="p-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center pb-[2vw] gap-2">
          <h2 className="text-[#6F4E37] text-center font-semibold text-[3vh] md:text-[3vw]">
            Welcome to Shrey Store
          </h2>
          <h5 className="text-center text-lg md:text-[1.9vw]">
            Discover a diverse range of quality products curated to enhance your lifestyle.
          </h5>
          <div className='pt-[1vw]'>
          <Button
            text="Explore Our Products"
            onClick={() => (window.location.href = '/shop')}
          />
          </div>
        </div>

        {/* Our Story Section */}
        <h4 className="text-center text-[#6F4E37] font-semibold text-xl md:text-[2.5vw]">
          Our Story
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="w-full h-full md:w-[40%]">
            <img
              src="https://img.freepik.com/free-vector/ecommerce-concept-illustration_114360-1171.jpg"
              alt="Our Story"
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-justify text-[3vw] md:text-[2vw] w-full md:w-[60%] gap-[2vw]">
            <p className="text-[#6F4E37]">
              Founded in 2024, Shrey Store is born from a passion for curating unique products that resonate with our customers. Our journey began with a simple idea: to offer high-quality items that enhance your everyday life.
            </p>
            <p className="text-[#6F4E37]">
              With a commitment to excellence and customer satisfaction, we have grown to become a trusted source for quality products. Explore our extensive collection and find what you need to elevate your lifestyle.
            </p>
          </div>
        </div>

        {/* Our Core Values Section */}
        <h4 className="text-center text-[#6F4E37] font-semibold text-xl md:text-[2.5vw] py-4">
          Our Core Values
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {coreValues.map((value, index) => (
            <Card key={index} title={value.title} description={value.description} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col justify-center items-center py-[2vw] gap-4 text-center">
          <h1 className="text-xl md:text-[2.3vw] text-[#6F4E37] font-semibold">
            Join Our Community
          </h1>
          <div className="text-center text-[4vw] md:text-[2vw] leading-tight">
            <p>Be part of the Shrey Store family!</p>
            <p>
              Sign up for our newsletter to receive the latest updates and exclusive offers straight to your inbox.
            </p>
          </div>
          <div>
            <Button
              text="Subscribe Now"
              onClick={() => (window.location.href = '/subscribe')}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
