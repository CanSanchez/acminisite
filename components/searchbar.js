//create a searchbar component

// Path: components/searchbar.js

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/SearchBar.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import villagers from '@/data/villagers.json'

const inter = Inter({ subsets: ['latin'] })

//header component

export default function SearchBar(props) {
    const router = useRouter();

    const [search, setSearch] = useState('');
    // console.log(search)

    const [found, setFound] = useState(villagers);
    // console.log(found)

    //handlesubmit when pressing enter

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search !== '') {
        //    if search matches a villager name, redirect to that villager's page
            const villager = villagers.find(villager => villager.Name === search || villager.Name.toLowerCase() === search)
            if (villager) {
                console.log(villager)
                setFound([villager])
            }
            else {
                console.log('not found')
                setFound('')
            }
        }
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    props.setSearch(found)

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.searchbar}>
                    <input 
                        type="text" 
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleEnter}
                        />
                    <button type="submit" onClick={handleSubmit}
                    onk
                    >
                        <img src="/images/search.png" alt="search" />
                    </button>
                </div>
                <p
                    onClick={() => {
                        setSearch('')
                        setFound(villagers)
                    }}
                >Reset search</p>
            </div>
        </>
    )
}
