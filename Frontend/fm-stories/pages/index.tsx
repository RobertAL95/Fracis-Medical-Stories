import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation'; // Importa tu componente de navegación

export default function Home() {
  return (
    <>
      <Head>
        <title>Francis Medical History</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1> <span>Francis</span> Medical History</h1>
        <p>La buena organización consiste en que el sistema sea comprensible en su conjunto y en sus partes.
          <br/>-Tsun su
        </p>
        <Navigation /> {/* Agrega el componente de navegación */}
      </main>
    </>
  );
}
