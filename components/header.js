import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import villagers from '@/data/villagers.json'

//Header component
export default function Header(props) {
    
      return (
     <>
        <Head>
          <title>{props.title}</title>
          <meta name="description" content="Meet your neighbours from Animal Crossing New Horizon" />
          <meta name="author" content="Can Sanchez" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/aclogo.png" />
        </Head>
     </>
      )
    }