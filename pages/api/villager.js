//api to https://acnhapi.com/v1/villagers/

// Path: pages/api/villager.js


import axios from 'axios'

export default async (req, res) => {
    const { data } = await axios.get('https://acnhapi.com/v1/villagers/')
    res.status(200).json(data)
}

