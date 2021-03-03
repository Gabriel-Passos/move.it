import { useContext } from 'react';
import { FaTwitter } from 'react-icons/fa';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>


        <button 
          type="button"
          className={styles.levelUpBtnCloseModal}
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>

        <button 
          type="button" 
          className={styles.levelUpBtnShareTwitter}
          onClick={() => {}}
        >
          Compartilhar no Twitter
          <FaTwitter size={20}/>
        </button>
      </div>
    </div>
  );
}