import Link from 'next/link';
import { FiHome, FiAward } from 'react-icons/fi';

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
  
  return (
    <div className={styles.sideBarContainer}>
      <img src="/images/logo-brand.png" alt="Logo"/>
      <nav>
        <Link as="/home" href="/home">
          <a><FiHome size={30}/></a>
        </Link>
        <Link as="/leaderboard" href="/leaderboard">
          <a><FiAward size={30}/></a> 
        </Link>
      </nav>
    </div>
  );
}