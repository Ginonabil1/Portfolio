import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container , Row , Col } from 'react-bootstrap';
import Footer from './Footer';


const Project = () => {
    const [projects , setProject] = useState([]);

    useEffect(() => {
        axios.get("data.json")
        .then((res) => {
            setProject(res.data.projects)
        })
    } , [])
  return (
    <>
    <section className='projects'>
        <h1>All Projects</h1>
        <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="pic" className="waves" />
        <Container>
            <Row>
                { projects.map((project) => (
                    <Col lg={4} md={4} sm={12} key={project.id}>
                        <div className='card wow fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s">
                            <img src={project.photo} alt='pic' />
                            <div className='card_word'>
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <a href={project.link} target='_blank'>View</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
    { <Footer/> }

    </>
  )
}

export default Project