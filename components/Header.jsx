import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';
import { Modal } from 'antd';

// Code du composant Header qui représente l'en-tête de l'application.

function Header() {
  const date = DateTime.now().toFormat('MMMM dd yyyy'); // On utilise la librairie Luxon pour afficher la date du jour.
  const [isModalVisible, setIsModalVisible] = useState(false); // On utilise le hook useState pour gérer l'état du modal. Par défaut, le modal n'est pas visible.

  const showModal = () => {
    // Cette fonction permet de changer l'état du modal. Si le modal est visible, on le cache et inversement.
    setIsModalVisible(!isModalVisible);
  };

  let userSection;
  if (isModalVisible) {
    // Si le modal est visible, on affiche l'icône de fermeture.
    userSection = (
      <FontAwesomeIcon
        onClick={() => showModal()}
        icon={faXmark}
        className={styles.userIcon}
      />
    );
  } else {
    // Sinon, on affiche l'icône de connexion.
    userSection = (
      <FontAwesomeIcon
        onClick={() => showModal()}
        icon={faUser}
        className={styles.userIcon}
      />
    );
  }

  const modalContent = // On définit le contenu du modal. Il s'agit de deux formulaires d'authentification (signup et signin).
    (
      <div className={styles.registerContainer}>
        <div className={styles.registerSection}>
          <p>Sign-up</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Register</button>
        </div>
        <div className={styles.registerSection}>
          <p>Sign-in</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Connect</button>
        </div>
      </div>
    );

  return (
    // On affiche le header avec la date du jour, le titre de l'application, les liens vers les pages Articles et Bookmarks et le modal.
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div>{date}</div>
        <h1 className={styles.title}>My News</h1>
        {userSection}
      </div>
      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>
          Articles
        </Link>
        <Link href="/bookmarks" className={styles.link}>
          Bookmarks
        </Link>
      </div>
      {isModalVisible && ( // On affiche le modal si l'état du modal est vrai (if isModalVisible === true => show modal else => hide modal).
        // On utilise la librairie Ant Design pour afficher le modal (https://4x.ant.design/components/modal/).
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            visible={isModalVisible}
            closable={false}
            footer={null}
          >
            {modalContent}
          </Modal>
        </div>
      )}
    </header>
  );
}

export default Header;
