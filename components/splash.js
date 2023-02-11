import React from "react";
import Lottie from "lottie-react";
import splashanimation from "@/public/animation/splash.json";
import styles from "@/styles/Animation.module.css";

//Splash component

const Splash = () => {
    return (
        <div className={styles.splash}>
        <Lottie 
            animationData={splashanimation}
            loop={true}
        />
        </div>
    );
};

export default Splash;

