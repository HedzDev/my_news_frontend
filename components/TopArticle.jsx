import React from 'react';
import Image from 'next/image';
import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function TopArticle() {
  return (
    <>
      <div className={styles.topContainer}>
        <Image src="/examplePic.png" alt="pic" width={700} height={400} />
        <div className={styles.topText}>
          <h2>Un titre</h2>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
          <h4>Un auteur</h4>
          <p>Une description</p>
        </div>
      </div>
    </>
  );
}

export default TopArticle;
