import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='align-items-center'>
                <Col lg={4} md={4} sm={12}>
                <Link to='/' ><img src="images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="pic"  height={50}/></Link>
                </Col>

                <Col lg={4} md={4} sm={12}  className='links'>
                    <div>
                    <HashLink to="/#latest">Latest builds</HashLink>
                    <HashLink to="/#process">Process</HashLink>
                    <HashLink to="/#services">Services</HashLink>
                    <HashLink to="/#contact">Contact Us</HashLink>
                    <Link to="/Project">Projects</Link>
                    </div>
                </Col>

                <Col lg={4} md={4} sm={12} className='icons'>
                        <Link to="#" target="_blank"><FacebookIcon /></Link>
                        <Link to="#" target="_blank"><InstagramIcon /></Link>
                        <Link to="#" target="_blank"><LinkedInIcon /></Link>
                </Col>
            </Row>
                    <div className='copyright' >
                        <p>©2024 Georgino Nabil</p>
                        <p>Email: georginonabil3@gmail.com</p>
                    </div>
        </Container>
    </footer>
  )
}

export default Footer