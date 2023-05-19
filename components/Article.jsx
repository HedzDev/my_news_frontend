import React from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Article() {
  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>Un titre</h3>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
        </div>
        <h4 style={{ textAlign: 'right' }}>Un auteur</h4>
        <div className={styles.divider}></div>
        <Image src="/examplePic.png" alt="une image" width={400} height={225} />
      </div>
    </>
  );
}

export default Article;
