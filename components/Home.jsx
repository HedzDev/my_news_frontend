import React from 'react';
import styles from '../styles/Home.module.css';
import Article from './Article';
import TopArticle from './TopArticle';

export default function Home() {
  const articles = [];

  for (let i = 0; i < 8; i++) {
    articles.push(<Article />);
  }

  return (
    <>
      <TopArticle />
      <div className={styles.articlesContainer}>{articles}</div>
    </>
  );
}
