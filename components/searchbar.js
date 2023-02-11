import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/SearchBar.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import villagers from '@/data/villagers.json'

const inter = Inter({ subsets: ['latin'] })

//searchbar component

export default function SearchBar(props) {
    const router = useRouter();

    const [search, setSearch] = useState('');
    console.log(search.length)

    const [found, setFound] = useState(villagers);
    // console.log(found)

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search !== '') {
            const villager = villagers.filter(villager => villager.Name.toLowerCase().includes(search.toLowerCase()))
            if (villager) {
                console.log(villager)
                setFound(villager.sort())
            } else {
                console.log('no match')
            }
        }
    }

    //handlesubmit when pressing enter

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
                    <button type="submit" onClick={handleSubmit}>
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
