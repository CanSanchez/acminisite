import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import VillagerCard from '@/components/villagercard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import villagers from '@/data/villagers.json'
import SearchBar from '@/components/searchbar'
import Splash from '@/components/splash'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const [neighbours, setNeighbours] = useState(villagers)
  // console.log(neighbours)

  //loading state
  const [isLoading, setIsLoading] = useState(true)

  //initial loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      <Header title='Hello Neighbour'/>

      <main className={styles.main}>
      
        { 
          isLoading &&
            <div className={styles.splash}>
              <Splash />
            </div>
        }

        <div className={styles.navbar}>
          <SearchBar
            setSearch={setNeighbours}
          />
        </div>

        <div className={styles.header} >
          <img 
            src="/images/header.png" 
            alt="aclogo" 
          />
        </div>

       <div className={styles.board}>
          {
            neighbours ?
            neighbours.map((villager, index) => (
              <VillagerCard
                key={index}
                name={villager.Name}
                catchphrase={villager.Catchphrase}
                image={villager.image_uri}
                id={villager.Filename}
              />
            ))
            :
            <h1>Not Found</h1>
          }
        </div>
      </main>
    </>
  )
}
