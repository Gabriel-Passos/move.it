import { Profile } from "./Profile";

import styles from '../styles/components/LeaderboardCard.module.css';

interface LeaderboardCardProps {
  name: string;
  gitHubAvatar: string;
  level?: number;
  challengesCompleted?: number;
  xp?: number;
}

export const LeaderboardCard:React.FC <LeaderboardCardProps> = ({ 
  name, 
  gitHubAvatar,
  level,
  challengesCompleted,
  xp
}) => {
  return (
    <div className={styles.LeaderboardCardContainer}>
      <strong>1</strong>

      <div>
        <Profile 
          name={name} 
          avatar={gitHubAvatar}
          level={level} 
        />

        <div>
          <span>
            <p>{challengesCompleted}</p> completados
          </span>
          <span>
            <p>{xp}</p> xp
          </span>
        </div>
      </div>
    </div>
  );
}