import React, {useEffect, useState } from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link';

// Collect all the files from aboutdata directory
// Iterate through them and display them
const About = () => {
  const [about, getabout] = useState([]);

  useEffect(()=>{
    console.log("UseEffect is running");
    fetch('http://localhost:3000/api/about').then((a)=>{
      return a.json(); })
      .then((parsed)=> {
        console.log(parsed)
        getabout(parsed);       
    })
  }, [])
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>About section</h1>
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