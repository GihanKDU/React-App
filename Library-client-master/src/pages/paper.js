import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
// import Footer from '../components/Footer/Footer';

import Breadcome from '../components/Breadcome';
import Exam from '../components/Exam'


const Paper = () => {
    

    return(
        <div className="">
            
            <Breadcome/>
            <Exam/>
            
           
       {/* <Footer/> */}
       </div>
    )
}


export default Paper