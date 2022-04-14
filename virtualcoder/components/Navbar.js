import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
    <ul>
      <Link href='/'><a><li>Home</li></a></Link>
      <Link href='/about'><a><li>About</li></a></Link>
      <Link href='/hackathons'><a><li>Hackathons</li></a></Link>
      <Link href='/projects'><a><li>Projects</li></a></Link>
    </ul>
  </nav>
  )
}

export default Navbar