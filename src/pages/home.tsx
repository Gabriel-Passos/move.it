import { GetServerSideProps } from 'next'
import Head from 'next/head';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { Sidebar } from '../components/Sidebar';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Home.module.css';

export interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  name: string;
  login: string;
  avatar_url: string;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level = {props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <Sidebar />

        <div className={styles.content}>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile 
                  name={props.name}
                  avatar={props.avatar_url}
                  level={props.level}
                />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>

      </div>
    </ChallengesProvider>
  )
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