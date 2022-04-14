import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>About Section</h1>
          <div>
            <Link href={'/Vcode/hello-there'}>
            <h2 className={styles.gameItemh2}>An Interactive Puzzle Game</h2></Link>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
          <div className="gameItem">
            <h2>An Interactive Puzzle Game</h2>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
          <div className="gameItem">
            <h2>An Interactive Puzzle Game</h2>
            <p>It teaches programming principles and introduces JavaScript using a block-based programming approach.</p>
          </div>
          </main>
        </div>
  )
}

export default About