import React from 'react'
import AOS from 'aos';
import {   useEffect } from "react";

export default function Upcoming() {
    useEffect(() => {
        AOS.init({duration:1000});},[]);
    return (
        <div data-aos="fade-up" className="filter-box">
        <div className="filer-heading">Upcoming Exams</div>
        <div className="filer-subjects flex-wrap">
            <a href="https://www.facebook.com/">GCE A/L</a>
            <div className="filter-exam_category">January Intake 2019</div>
            <div  className="filter-exam_date"><i class=" filter-exam_icon fas  fa-calendar-week"></i>2020-12-15</div>
            <div  className="filter-exam_time">10.30AM</div>
        </div>
        <div className="filer-subjects flex-wrap">
            <a href="https://www.facebook.com/">GCE A/L</a>
            <div className="filter-exam_category">December Intake 2019</div>
            <div  className="filter-exam_date"><i class=" filter-exam_icon fas  fa-calendar-week"></i>2020-12-21</div>
            <div  className="filter-exam_time">14.30PM</div>
        </div>
        <div className="filer-subjects flex-wrap">
            <a href="https://www.facebook.com/">GCE A/L</a>
            <div className="filter-exam_category">January Intake 2019</div>
            <div  className="filter-exam_date"><i class=" filter-exam_icon fas  fa-calendar-week"></i>2020-12-19</div>
            <div  className="filter-exam_time">14.30PM</div>
        </div>
        <div className="filer-subjects flex-wrap">
            <a href="https://www.facebook.com/">GCE A/L</a>
            <div className="filter-exam_category">December Intake 2020</div>
            <div  className="filter-exam_date"><i class=" filter-exam_icon fas  fa-calendar-week"></i>2020-12-25</div>
            <div  className="filter-exam_time">08.30AM</div>
        </div>

        
        </div>
    )
}
