import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChuckIt</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ChuckIt!
        </h1>

        <p className={styles.description}>
          Get started by downloading the extension{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Chrome &rarr;</h2>
            <p>

            </p>
          </a>

          <a href="" className={styles.card}>
            <h2>Firefox &rarr;</h2>
            <p>

            </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Safari &rarr;</h2>
            <p>

            </p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Opera &rarr;</h2>
            <p>
              
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
