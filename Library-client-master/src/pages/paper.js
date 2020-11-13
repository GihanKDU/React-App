import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
// import Footer from '../components/Footer/Footer';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Breadcome from '../components/Breadcome';
import Exam from '../components/Exam'


const Paper = () => {
    const [isPlaying, setIsPlaying] = useState(true);
   
    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
      
        return `${minutes}:${seconds}`
      }
    return (
        <div className="">
            <div className="timer">
            <CountdownCircleTimer
            
                isPlaying={isPlaying}
                duration={3600}
                size={70}
                onComplete={() => {
                    // return [true]
                }}
                colors={[ 
                    ['#00E676', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
            >
                {children}
                
            </CountdownCircleTimer>
            </div>
            <Breadcome />
            <Exam />


            {/* <Footer/> */}
        </div>
    )
}


export default Paper