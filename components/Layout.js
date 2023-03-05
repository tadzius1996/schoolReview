import Head from 'next/head';
import Header from '../components/Header';

const Layout = ({ children }) => {
  return (
    <div className='md:px-32'>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js App" />
        <meta name="keywords" content="Next.js, React" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
