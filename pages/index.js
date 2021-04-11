import Head from 'next/head'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Naim</title>
        <link rel="icon" href="/me.svg" />
        <meta name="theme-color" content="#162A31" />
      </Head>

      <Layout setActiveLink="Portfolio">
        <h1>Welcome</h1>
      </Layout>
    </div>
  )
}
