import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>demo</title>
        <meta name="description" content="demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          demo
        </h1>

        <ul>
          <li>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
          <li>
            <Link href="/observer">
              <a>Observer</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
