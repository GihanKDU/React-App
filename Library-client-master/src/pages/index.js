import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Carousel from 'react-bootstrap/Carousel'
import Count from '../components/Count';
import About from '../components/About';
import Subjects from '../components/Subjects';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';
import Tips from '../components/Tips';
import Contact from '../components/Contact';

import Footer from '../components/Footer/Footer';

const IndexPage = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carousel = () => {
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="background_1"></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="background_1"></div>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="background_2"></div>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p data-aos="flip-left">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    return (
        <div>
            {carousel()}
            <Count />
            <About />
            <Subjects />
            <Subscribe />
            <Tips />
            <Team />
         
            <Contact/>
            <Footer/>


        </div>
    )
}

export default IndexPage