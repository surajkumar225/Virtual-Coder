import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/Script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import styles1 from '../styles/Home1.module.css'
// import styles2 from '../styles/Home2.module.css'
// import Trase from '../components/trase'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Trase/> */}
      <style jsx>
        {`
         .myimg{
          border-radius: 10px;
          margin-top: 30px;
        }
        `}
      </style>
      <Head>
        <title>Virtual Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="An interactive puzzle game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <script src='/sc.js' strategy="lazyOnload"> </script> */}
      {/* <nav className={styles.mainNav}>
        <ul>
          <Link href='/'><a><li>Home</li></a></Link>
          <Link href='/about'><a><li>About</li></a></Link>
          <Link href='/hackathons'><a><li>Hackathons</li></a></Link>
          <Link href='/projects'><a><li>Projects</li></a></Link>
        </ul>
      </nav> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
        <span className='myspan'> Virtual Coder </span>
        </h1>

      <img className={styles.myimg} src="/home.jpg" width={537} height={358} />

        <p className={styles.description}>
        It is designed for children and/or adults who don't have any experience with coding.
        </p>

        <div className="game">
        {/* <div className={`${styles2.con} ${styles1.con}`}> */}
        {/* <div className={styles1.con}> */}
          <div className="gameItem">
            <h1>An Interactive Puzzle Game</h1>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
          <div className="gameItem">
            <h1>An Interactive Puzzle Game</h1>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
          <div className="gameItem">
            <h1>An Interactive Puzzle Game</h1>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
        </div>

       
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
