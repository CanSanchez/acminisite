import villager from '@/data/villagers.json'


// Unique values for species, personality and hobby
export const uniqueSpecies = [...new Set(villager.map(item => item.Species))]

export const uniquePersonality = [...new Set(villager.map(item => item.Personality))]

export const uniqueHobby = [...new Set(villager.map(item => item.Hobby))]
