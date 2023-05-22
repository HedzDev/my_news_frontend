import React from 'react';
import Image from 'next/image';
import styles from '../styles/TopArticle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

// Code du composant TopArticle qui représente l'article principal.

function TopArticle(props) {
  return (
    <>
      <div className={styles.topContainer}>
        <Image
          src={props.urlToImage}
          alt={props.title}
          width={700}
          height={400}
        />
        <div className={styles.topText}>
          <h2>{props.title}</h2>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
          <h4>{props.author}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default TopArticle;
