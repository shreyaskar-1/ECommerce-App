import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title> {/* Corrected here */}
      </Helmet>
      <Header />
      <main style={{ minHeight: '70vh' }} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce App',
  description: 'Mern Stack Project',
  keywords: 'React Next Vite Tailwind MUI',
  author: 'Shreyaskar Upadhyay',
};

export default Layout;
