import React from 'react'
import AOS from 'aos';
import {   useEffect } from "react";

export default function Filter() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
     <div data-aos="fade-up"  className="filter-box">
         <div className="filer-heading">COURSE CATEGORIES</div>
         <div className="filer-subjects"><a href="https://www.facebook.com/">GCE A/L</a></div>
         <div className="filer-subjects"><a href="https://www.facebook.com/">GCE O/L</a></div>
         <div className="filer-subjects"><a href="https://www.facebook.com/">London A/L</a></div>
         <div className="filer-subjects"><a href="https://www.facebook.com/">Tamil A/L</a></div>
         <div className="filer-subjects"><a href="https://www.facebook.com/">Hindu A/L</a></div>
         
         </div>
     
    )
}
