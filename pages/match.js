import React from 'react'
import styles from '@/styles/Match.module.css'
import Header from '@/components/header'
import Form from '@/components/Form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import villagers from '@/data/villagers.json'
import VillagerCard from '@/components/villagercard';


//Match page
export default function Results() {

    //router
    const router = useRouter();

    //villager match state
    const [match, setMatch] = useState([]);
    const [randomVillagers, setRandomVillagers] = useState([]);

    //find match
    const findMatch = (matchKey) => {
        const filteredVillagers = villagers.filter((villager) => {
            if (villager.Species.toLowerCase() === matchKey.species.toLowerCase() 
                && villager.Personality.toLowerCase() === matchKey.personality.toLowerCase() 
                && villager.Hobby.toLowerCase() === matchKey.hobby.toLowerCase()) {
                return villager;
            }
        })
        setMatch(filteredVillagers);
    };

    // console.log(match)

    //randomize villagers
    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const randomizedVillagers = shuffle(villagers);

    useEffect(() => {
        setRandomVillagers(randomizedVillagers);
    }, [])
    
    return (
        <>
            <Header title='Hello Neighbour: Match Making' />
            <main className={styles.main}>
                <button 
                    name='Go to Home' 
                    onClick={()=>router.push('/')}>
                    Go to Home
                </button>
                <Form
                    passData={findMatch}/>
                {/* Parallax Section */}
                <section className={styles.parallax}>
                    <img src='/images/cloud.svg' className={styles.cloud1} />
                    {/* Perfect match villager card */}
                    { match.length > 0 ? 
                        <div className={styles.results}>
                            <p>Here's your perfect neighbour!</p>
                            {
                                match.map((villager, index) => (
                                    <VillagerCard
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
                            }
                            {/* Reload page to find another match */}
                            <button onClick={()=>location.reload()}>Try Another Match</button>
                        </div> 
                        :
                        <div className={styles.results}>
                            <p>Sorry, we couldn't find a perfect match for you. But check this neighbour out!</p>
                            {/* Random villager card for non-match */}
                            {
                                randomVillagers.slice(0, 1).map((villager, index) => (
                                    <VillagerCard
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
                            }
                            {/* Reload page to find another match */}
                            <button onClick={()=>location.reload()}>Try Another Match</button>
                    </div>
                    }
                    <img src='/images/cloud.svg' className={styles.cloud2} />
                    <img src='/images/cloud.svg' className={styles.cloud3} />
                </section>
            </main>
        </>
    )
}
