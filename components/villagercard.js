//create a card component

// Path: components/villagercard.js
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/VillagerCard.module.css'
import villagers from '@/data/villagers.json'

const inter = Inter({ subsets: ['latin'] })

//header component
export default function VillagerCard(props) {
     
   return (
      <>
            <div className={styles.card}>
                  <div className={styles.cardImage}>
                     <img src={props.image}/>
                  </div>
               <div className={styles.cardText}>
                  <h2>{props.name}</h2>
                  <p>{props.catchphrase}</p>
               </div>
            </div>
      </>
   )
}