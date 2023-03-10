import { useEffect } from 'react';
import CompanyList from '../components/CompanyList';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { sanityClient } from '../sanity';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
import Layout from '../components/Layout';

export default function Home({schools}) {
  console.log(schools)
  // ...
  return (
   
    <div className={styles.home}>
       <Layout>
      <div className=''>
        <Hero/>
        
      </div>
      </Layout>
    </div>
    
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "school"]'
  const schools = await sanityClient.fetch(query)

  if (!schools.length) {
    return {
      props: {
        schools: [],
      },
    }
  } else {
    return {
      props: {
        schools,
      },
    }
  }
}
