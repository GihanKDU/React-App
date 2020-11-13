import React from 'react'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
<>
        <Row className="main-footer">
            <Col md={3}>
                <div className="main-footer_heading_portal" >Study Portal</div>
                <div className="main-footer_detail_portal">Learning Management System (LMS) is an automated platform that holds course content, materials and organization in one easy to understand online framework. It enables educators to effortlessly oversee classes and track their understudies’ advancement, featuring regions of quality and a soft spot for progressing execution change</div>
                <div className="flex-item">
                    <div  className="main-footer_sub-text flex-item"><div><a href="https://www.facebook.com/"><i class=" icon-social fa fa-facebook" ></i></a></div>  </div>
                    <div  className="main-footer_sub-text flex-item"><div><a href="https://www.instagram.com/"><i class=" icon-social fa fa-instagram" ></i></a></div>  </div>
                    <div  className="main-footer_sub-text flex-item"><div><a href="https://www.facebook.com/"><i class=" icon-social fa fa-facebook" ></i></a></div>  </div>
                    <div  className="main-footer_sub-text flex-item"><div><a href="https://www.instagram.com/"><i class=" icon-social fa fa-instagram" ></i></a></div>  </div>
                    </div>
            </Col>
            
            <Col md={3}>
                <div className="main-footer_heading" >Usefull Links</div>

                <ul class="useful-links">
                    <div className="footer-text"><a href="#">Home</a></div>
                    <div className="footer-text"><a href="#">About Us</a></div>
                    <div className="footer-text"><a href="#">Privacy Policy</a></div>
                    <div className="footer-text"><a href="#">Terms and Condition</a></div>
                    
                   

                </ul>

            </Col>
            <Col md={3}>
                <div className="main-footer_heading" >Contact Us</div>
                <div  className="main-footer_sub-text flex-item"><div><i class="icon-contact fas fa-map-marker-alt"></i></div> <div>22/43, Temple Road, Bambalapitiya,<br></br> Sri Lanka</div> </div>
                <div  className="main-footer_sub-text flex-item"><div><i class="icon-contact fas fa-envelope"></i></div> <div>studyportal@mail.com</div> </div>
 
                <div  className="main-footer_sub-text flex-item"><div><i class="icon-contact fas fa-phone-alt"></i></div> <div>071 555 5555</div> </div>
  
            </Col>
            <Col md={3}>
                <div className="main-footer_heading" >Location</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9366199662263!2d79.85230741448862!3d6.8981840950155195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdf86d38eed%3A0xbcfebb894108e4fc!2sReservations%20Gateway%20Inc!5e0!3m2!1sen!2slk!4v1605100959084!5m2!1sen!2slk" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>



            </Col>



        </Row>
        <Row className="sub-footer-copyright text-center">
        <Col lg={12} md={12} sm={12}>
                <div className="" >COPYRIGHT © STUDY PORTAL INTERNATIONAL 2020 | POWERED BY STUDY PORTAL</div>
               



            </Col>
        </Row>
</>

    )
}

