import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Loginstyle.module.css';
import Login from './Login.js';
import Reset from '../pages/Reset-password.js';
import Forgot from '../pages/Forgot-password.js';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PAT-Work with empathy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blacklogo.png" />
      </Head>
        
          <Login />
        
    </div>
  );
}
