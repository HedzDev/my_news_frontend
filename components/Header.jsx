import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';

function Header() {
  const date = DateTime.now().toFormat('MMMM dd yyyy');

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div>{date}</div>
        <h1 className={styles.title}>My News</h1>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
      </div>
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>
          Articles
        </Link>
        <Link href="/bookmarks" className={styles.link}>
          Bookmarks
        </Link>
      </div>
    </header>
  );
}

export default Header;
