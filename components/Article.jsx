import React from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBookmarks, removeBookmarks } from '@/reducers/bookmarks';

// Code du composant Article qui représente un article de presse.

function Article(props) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    if (props.isBookmarked) {
      dispatch(removeBookmarks(props));
    } else {
      dispatch(addBookmarks(props));
    }
  };

  let iconStyle = {};

  if (props.isBookmarked) {
    iconStyle = { color: '#E9BE59' };
  } else {
    iconStyle = { color: '#000000' };
  }

  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>{props.title}</h3>
          <FontAwesomeIcon
            icon={faBookmark}
            style={iconStyle}
            className={styles.bookmarkIcon}
            onClick={() => handleBookmarkClick()}
          />
        </div>
        <h4 style={{ textAlign: 'right' }}>{props.author}</h4>
        <div className={styles.divider}></div>
        <Image
          src={props.urlToImage}
          alt="une image"
          width={400}
          height={225}
        />
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Article;
