import styles from '@/styles/VillagerCard.module.css'
import { useState }  from 'react'

//villagercard component
export default function VillagerCard( props ) {
   
   //flip card state
   const [frontFlipped, setFrontFlipped] = useState(true)

   return (
      <div className={styles.cardcontainer}>
         <div 
            className={styles.flipcard}
            onClick={()=>{setFrontFlipped(!frontFlipped)}}>
            <div 
               className={styles.card}
               style={!frontFlipped? {transform: 'rotateY(180deg)'}: null}>

               {/* FRONT CARD */}
               <div className={styles.frontcard}>
                  <div className={styles.cardImage}>
                     <img src={props.image}/>
                  </div>
                  <div className={styles.cardText}>
                     <h2>{props.name}</h2>
                     <div>
                        <p>Catchphrase</p>
                        <p>"{props.catchphrase}"</p>
                     </div>
                  </div>
                  <p>flip the card</p>
               </div>

               {/* BACK CARD */}
               <div className={styles.backcard}>
                  <h2>Villager Passport</h2>
                  <div className={styles.cardIcon}>
                     <img src={props.icon}/>
                  </div>
                  <div className={styles.info}>
                     <div className={styles.infodetaildbl}>
                        <span>
                           <h4>Name</h4>
                           <p>{props.name}</p>
                        </span>
                        <span>
                           <h4>Birthday</h4>
                           <p>{props.bday}</p>
                        </span>
                     </div>
                     <div className={styles.infodetaildbl}>
                        <span>
                           <h4>Species</h4>
                           <p>{props.species}</p>
                        </span>
                        <span>
                           <h4>Personality</h4>
                           <p>{props.personality}</p>
                        </span>
                     </div>
                     <div className={styles.infodetail}>
                        <h4>Hobby</h4>
                        <p>{props.hobby}</p>
                     </div>
                     <div className={styles.infodetail}>
                        <h4>Favourite Song</h4>
                        <p>{props.song}</p>
                     </div>
                  </div>
                  <p>flip the card</p>
               </div>
            </div>
         </div>
      </div>
   )
}