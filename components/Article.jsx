import React from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

// Code du composant Article qui représente un article de presse.

function Article(props) {
  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>{props.title}</h3>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
        </div>
        <h4 style={{ textAlign: 'right' }}>{props.author}</h4>
        <div className={styles.divider}></div>
        <Image
          src={props.urlToImage}
          alt="une image"
          width={400}
          height={225}
        />
      </div>
    </>
  );
}

export default Article;
