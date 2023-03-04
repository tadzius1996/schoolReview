import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import schoolBook from '../public/schoolBook.png'
import  Header from '../components/Header'
import  Hero from '../components/Hero'
import  CompanyList from '../components/CompanyList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    
    <div className={styles.home}>
      <Header />
      <div className='md:px-32'>
      
      <Hero/>
      
      </div>
    </div>
    </div>
  )
}
