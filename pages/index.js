import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import VillagerCard from '@/components/villagercard'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import villagers from '@/data/villagers.json'
import SearchBar from '@/components/searchbar'
import Splash from '@/components/splash'


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
      <Header title='Hello Neighbour: Home'/>

      <main className={styles.main}>
      
        { 
          isLoading &&
          
            <div className={styles.splash}>
              <Splash />
            </div>
        }

        <div className={styles.navbar}>
          <SearchBar
            setSearch={setNeighbours}/>
          <button name='Match Maker' onClick={()=>router.push('/match')}>Try Match Maker</button>
        </div>

        <div className={styles.header} >
          <img 
            src="/images/header.png" 
            alt="Hello Neighbour Header" 
          />
        </div>

       <div className={styles.board}>
          {
            neighbours.length > 0 ?
            neighbours.map((villager, index) => (
              <VillagerCard
                data={villager}
                key={index}
                name={villager.Name}
                catchphrase={villager.Catchphrase}
                icon={villager.icon_uri}
                image={villager.image_uri}
                id={villager.Filename}
                species={villager.Species}
                personality={villager.Personality}
                bday={villager.Birthday}
                hobby={villager.Hobby}
                song={villager['Favorite Song']}
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
