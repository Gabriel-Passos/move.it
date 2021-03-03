import { useContext, useState, } from 'react';

import { UserContext } from '../contexts/UserContext';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const { hanldeSignIn, hasUserData } = useContext(UserContext);

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginContainer}>
        <img src="/images/logo-background.png" alt="Background"/>

        <section>
          <img src="/images/logo.png" alt="Logo"/>
          <strong>Bem-vindo</strong>
          <div className={styles.githubContainer}>
            <img src="/icons/github.svg" alt="Github logo"/>
            <p>Faça login com seu Github para começar</p>
          </div>
          <form onSubmit={() => hanldeSignIn(username)}>
            <input 
              type="text" 
              placeholder="Digite seu username"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />

            { !hasUserData  ? (
              <button type="submit">
                <img src="/icons/arrow-right.svg" alt="Arrow right"/>
              </button>
            ) : (
              <button type="submit" style={{background: 'var(--green)'}}>
                <img src="/icons/arrow-right.svg" alt="Arrow right"/>
              </button>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
