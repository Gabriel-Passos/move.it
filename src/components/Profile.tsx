import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  name: string;
  avatar: string;
  level: number;
}

export const Profile: React.FC <ProfileProps> = ({ name, avatar, level }) => {
  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt={name}/>

      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}