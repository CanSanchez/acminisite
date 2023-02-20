import React from 'react';
import styles from '@/styles/Form.module.css';
import { useState } from 'react';

//Data for unique values
import { uniqueSpecies } from './data';
import { uniquePersonality } from './data';
import { uniqueHobby } from './data';

export default function Form({passData}) {

    //store form data in state
    
        const [species, setSpecies] = useState('');
        const [personality, setPersonality] = useState('');
        const [hobby, setHobby] = useState('');

        const [isSubmitted, setIsSubmitted] = useState(false);

    //object to store form data and pass to parent/match component

        const matchKeys = {
            species: species,
            personality: personality,
            hobby: hobby
        }

        console.log(matchKeys)

    //function to handle form submission

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitted(true);
        }

    return (
        <>
            <div 
                className={styles.form}
                style={{ display: isSubmitted ? 'none' : 'block' }}>
                <p>Let us match you with your perfect neighbour! <br/>
                <br />
                Select the species, personality or hobby you'd like your dream neighbour to have.</p>
                <form onSubmit={handleSubmit}>
                    {/* Species Selection */}
                    <div className={styles.inputcontainer}>
                        <select
                            required
                            id="species"
                            name="species"
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}>
                            <option value=""></option>
                            {
                                uniqueSpecies.sort().map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="species">Species</label>
                    </div>
                    {/* Personality Selection */}
                    <div className={styles.inputcontainer}>
                        <select
                            required
                            id="personality"
                            name="personality"
                            value={personality}
                            onChange={(e) => setPersonality(e.target.value)}>   
                            <option value=""></option>
                            {
                                uniquePersonality.sort().map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="personality">Personality</label>
                    </div>
                    {/* Hobby Selection */} 
                    <div className={styles.inputcontainer}>
                        <select
                            required
                            id="hobby"
                            name="hobby"
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}>
                            <option value=""></option>
                            {
                                uniqueHobby.sort().map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="hobby">Hobby</label>
                    </div>
                    {/* Submit Button */}
                    <button 
                        type="submit"
                        onClick={()=>passData(matchKeys)}>
                        Check My Match
                    </button>
                </form>
            </div>
            {/* Message after form is submitted */}
            {
                isSubmitted &&
                <div className={styles.submitted}>
                    <p>Check out your match below</p>
                </div>
            }
        </>
    )
}