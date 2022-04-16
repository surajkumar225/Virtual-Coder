import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/AboutDec.module.css'

// Find the file corresponding to Slug 
// Populate them inside the page
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ipsam deserunt pariatur eligendi voluptate porro tenetur perferendis soluta modi magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste odio quibusdam voluptas impedit, veritatis maiores pariatur vitae, sed aspernatur tenetur laborum corporis neque cupiditate autem! Odio impedit dicta numquam. Molestias?
      </div>
      </main>
    </div>
  )
}

export default slug