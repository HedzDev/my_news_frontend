import React from 'react';
import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';

function Bookmarks() {
  return (
    <>
      <Head>
        <title>My News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <p>No bookmarks</p>
      </div>
    </>
  );
}

export default Bookmarks;
