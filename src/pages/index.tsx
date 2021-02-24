import { ExperienceBar } from "../Components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../Components/Profile";
import { CompletedChallenges } from "../Components/CompletedChallenges";


import styles from '../styles/pages/Home.module.css'
import { Countdown } from "../Components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | Move.It</title>    
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
