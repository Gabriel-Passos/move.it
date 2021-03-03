import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Sidebar } from '../components/Sidebar';
import { LeaderboardCard } from '../components/LeaderboardCard';

import { HomeProps } from './home';

import api from '../services/github.api';

import styles from '../styles/pages/Leaderboard.module.css';

interface GitHubFollowers {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

type LeaderboardProps = HomeProps;

export default function Leaderboard(props: LeaderboardProps) {
  const [gitFollowers, setGitFollowers] = useState<GitHubFollowers[]>([]);
  const [xp, setXp] = useState(Number);

  useEffect(() => {
    api.get(`users/${props.login}/followers`).then(response => 
      setGitFollowers(response.data),
    );

  }, []);

  return (
    <div className={styles.leaderboardContainer}>
      <Head>
        <title>Leaderboard</title>
      </Head>

      <Sidebar />

      <section>
        <h2>Leaderboard</h2>

        <div className={styles.leaderboardInfo}>
          <div>
            <span>Posição</span>
            <span>Usuário</span>
          </div>

          <div>
            <span>Desafios</span>
            <span>Experiência</span>
          </div>
        </div>

        <LeaderboardCard
          name={props.name}
          gitHubAvatar={props.avatar_url}
          level={props.level}
          challengesCompleted={props.challengesCompleted}
        />

        {gitFollowers.map(followers => (
          <LeaderboardCard 
            key={followers.id}
            name={followers.login}
            gitHubAvatar={followers.avatar_url}
          />
        ))}
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level, 
    currentExperience, 
    challengesCompleted,
    name,
    login,
    avatar_url
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      name: name,
      login: login,
      avatar_url: avatar_url
    }
  }
}