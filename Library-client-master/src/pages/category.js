import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Footer from '../components/Footer/Footer';
import Subjects from '../components/Subjects';
import Breadcome from '../components/Breadcome';
import Courses from '../components/Courses';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/Search';
import Topic from '../components/Header/Topic';
import Filter from '../components/Filter';
import Upcoming from '../components/Upcoming';
import Joinus from '../components/Joinus';

const Category = () => {
    

    return(
        <div className="custom-body">
            
            <Breadcome/>
            
            <Row>
                <Col md={8}>
                <Search/>
                
                <Courses/>
                <Courses/>
                <Courses/>
                <Courses/>
                </Col>
                <Col md={4}>
                <Upcoming/>
          <Filter/>
          <Joinus/>
          <Filter/>
        
          
                </Col>
            </Row>
            
       { <Footer/> }
       </div>
    )
}


export default Category