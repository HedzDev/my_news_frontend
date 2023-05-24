import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Article from './Article';
import TopArticle from './TopArticle';

export default function Home() {
  const [topArticle, setTopArticle] = useState({});
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then((res) => res.json())
      .then((data) => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.slice(1));
      });
  }, []);

  const articles = articlesData.map((data, i) => {
    // On map sur le tableau articlesData pour créer un composant Article pour chaque article, et on lui passe les props.
    return (
      <Article
        key={i}
        // author={data.author}
        // title={data.title}
        // description={data.description}
        // urlToImage={data.urlToImage}
        {...data} // On passe toutes les props d'un coup avec l'opérateur spread (...)
      />
    );
  });

  return (
    <>
      <Head>
        <title>My News - Accueil</title>
      </Head>
      <TopArticle
        // author={topArticle.author}
        // title={topArticle.title}
        // description={topArticle.description}
        // urlToImage={topArticle.urlToImage}
        {...topArticle} // On passe toutes les props d'un coup avec l'opérateur spread (...)
      />
      <div className={styles.articlesContainer}>{articles}</div>
    </>
  );
}
