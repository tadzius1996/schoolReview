import { useEffect } from 'react';
import CompanyList from '../components/CompanyList';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
import Layout from '../components/Layout';

export default function Home() {
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