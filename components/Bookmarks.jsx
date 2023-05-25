import React from 'react';
import Head from 'next/head';
import styles from '../styles/Bookmarks.module.css';
import { useSelector } from 'react-redux';
import Article from './Article';

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const content = bookmarks.map((data) => {
    return <Article {...data} isBookmarked />;
  });
  return (
    <>
      <Head>
        <title>My News - Bookmarks</title>
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Bookmarks</h2>
        <p>No bookmarks</p>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Bookmarks;
