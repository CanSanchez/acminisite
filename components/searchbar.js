import { Inter } from '@next/font/google'
import styles from '@/styles/SearchBar.module.css'
import { useState } from 'react'
import villagers from '@/data/villagers.json'


//searchbar component
export default function SearchBar(props) {

    //searchbar state
    const [search, setSearch] = useState('');

    //searchbar results
    const [found, setFound] = useState(villagers);
    // console.log(found)

    //handlesubmit when clicking search button
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

    //pass search results to parent component
    props.setSearch(found)

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.searchbar}>
                {/* Search input */}
                    <input 
                        type="text" 
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleEnter}/>
                {/* Search button */}
                    <button type="submit" onClick={handleSubmit}>
                        <img src="/images/search.png" alt="search" />
                    </button>
                </div>
                {/* Reset search button */}
                <p
                    onClick={() => {
                        setSearch('')
                        setFound(villagers)
                    }}>
                    Reset search
                </p>
            </div>
        </>
    )
}
