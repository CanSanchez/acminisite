import React from 'react'
import styles from '@/styles/Match.module.css'
import Header from '@/components/header'
import Form from '@/components/form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import villagers from '@/data/villagers.json'
import VillagerCard from '@/components/villagercard';


export default function Results() {

    const [match, setMatch] = useState([]);
    const [randomVillagers, setRandomVillagers] = useState([]);

    const findMatch = (matchKey) => {
        const filteredVillagers = villagers.filter((villager) => {
            if (villager.Species === matchKey.species && villager.Personality === matchKey.personality && villager.Hobby === matchKey.hobby) {
                return villager;
            }
        })
        setMatch(filteredVillagers);
    };

    console.log(match)

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
            <Header title='Hello Neighbour: Poll' />
            <main className={styles.main}>
                <Form
                    passData={findMatch}
                />
                <section className={styles.parallax}>
                    {/* <img 
                        src='/background/background.jpeg'
                        className={styles.background} /> */}

                    <img src='/images/cloud.svg' className={styles.cloud1} />
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
                    </div> 
                    :
                    <div className={styles.results}>
                        <p>Sorry, we couldn't find a perfect match for you. But check this neighbour out!</p>
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
                    </div>
                    }
                    
                    <img src='/images/cloud.svg' className={styles.cloud2} />
                    <img src='/images/cloud.svg' className={styles.cloud3} />
                    
                </section>
                <section>
                    
{/* 
                    <div className={styles.random}>
                        <p>Or maybe you'd like to try a random villager?</p>
                        <div className={styles.results}>
                            {
                                randomVillagers.slice(0, 3).map((villager, index) => (
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
                    </div>
                    </div> */}
                </section>
            </main>
        </>
       
    )
}
