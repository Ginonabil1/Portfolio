import React from 'react'
import { Container , Nav , Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Nav_bar = () => {
  return (
    <>
    <Navbar bg="black" expand="lg">

        <Container>
        <Link to='/' ><img src="images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="pic"  height={50}/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto navlinks">
            <HashLink to="/#latest">Latest builds</HashLink>
            <HashLink to="/#process">Process</HashLink>
            <HashLink to="/#services">Services</HashLink>
            <HashLink to="/#contact">Contact Us</HashLink>
            <Link to="/Project">Projects</Link>
          </Nav>

          
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </>
  )
}

export default Nav_bar