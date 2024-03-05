import React, { useEffect, useState , useRef } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode ,Pagination } from 'swiper/modules';

import axios from 'axios';
import emailjs from '@emailjs/browser';
import Footer from './Footer';





const Home = () => {
  const [projects , setProjects] = useState([]);

  useEffect(() => {
    axios.get("data.json")
    .then((res) => {
      setProjects(res.data.projects);
    })
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    alert("Message sent successfully")
    e.preventDefault();

    emailjs.sendForm('service_c45h6hv', 'template_hhobsbz', form.current, {publicKey: 'h-yxv4LdI4rxiA6AM',})
      .then(() => {console.log('SUCCESS!');
        },(error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  return (
    <>
      {/* header */}
      <header className='head'>
        <Container>
          <Row>
            <Col lg={7} md={7} sm={12} className='head_text wow slideInLeft' data-wow-duration="1s" data-wow-delay="0.1s" > 
              <p>Web designer <span>//</span> web developer <span>//</span> Ai engineer </p>
              <h1>Georgino Nabil's portfolio .</h1>
              <h5>I bulid marketing websites .</h5>
              <HashLink to="/#contact"><button>Let's Talk</button></HashLink>
            </Col>
            <Col  lg={5} md={5} sm={12} className='head_image wow slideInRight' data-wow-duration="0.5s" data-wow-delay="0.1s">
            <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="pic" className="waves" style={{width:'470px'}} />
              <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="pic" className="laptop" />
              <div className="imgbox gimg">
                <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="pic" />
              </div>
              <div className="imgbox uimg">
                <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="pic" />
              </div>
              <div className="imgbox wimg">
                <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="pic" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>


    {/* section 1 */}
    <section className='sec1'>
    <Container>
          <Row>
            <Col  lg={6} md={6} sm={12} className='sec1_img'>
            <img src="images\623506fac432155edb494f48_Topology-2 (1).svg" style={{width:'500px'}} />
              <img src="images\6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="pic" className='s1_p'/>
            </Col>
            <Col lg={6} md={6} sm={12} className='sec1_w'> 
              <button>The dream</button>
              <p>imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
            </Col>
          </Row>
        </Container>
    </section>

    {/* section 2 */}
    <section className='sec2' id='latest'>
      <div className='sec2_w'>
        <h1>Latest builds.</h1>
        <Link to='/Project'>View projects</Link>
      </div>
      <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{clickable: true,}}
           modules={[FreeMode, Pagination]}  className="mySwiper">
        {projects.slice(1,7).map((project) => (
          <SwiperSlide key={project.id}> <Link to={project.link} target='_blank'> <img src={project.photo} alt="pic" /> </Link></SwiperSlide>  ))}
      </Swiper>
    </section>

    {/* section 3 */}
    <section className='sec3' id='process'>
          <h1>How it's done.</h1>
          <img src="images\623506fac432155edb494f48_Topology-2 (1).svg" alt="pic" className='wave'  />
          
          <div className='sec3_f_left wow fadeInUp' data-wow-duration="0.5s" data-wow-delay="0.1s">
            <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="pic" />
            <div className='words'>
              <h5>UX/Ui Design</h5>
              <p>Where concepts turn into a strategic user-experience.</p>
            </div>
          </div>

          <div className='sec3_f_right wow fadeInUp' data-wow-duration="0.5s" data-wow-delay="0.3s">
            <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="pic" />
            <div className='words'>
            <h5>Webflow Development</h5>
            <p>Where design turns into code.</p>
            </div>
          </div>

          <div className='sec3_s_left wow fadeInUp' data-wow-duration="0.5s" data-wow-delay="0.5s">
          <img src="images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg" alt="p" />
          <div className='words'>
            <h5>System Automation</h5>
            <p>Where busywork gets delegated.</p>
          </div>
        </div>

        <div className='sec3_s_right wow fadeInUp' data-wow-duration="0.5s" data-wow-delay="1s">
          <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="p" />
          <div className='words'>
            <h5>SEO</h5>
            <p>Where customers come flooding in.</p>
          </div>
        </div>
    </section>

    {/* section 4 */}
    <section className='sec4' id='services'>
       <h1>Why Webflow</h1>
       <Container className='cards'>
          <Row>
            <Col  sm={12} md={4} lg={4}> 
              <div className='card wow bounceInUp' data-wow-duration="2s" data-wow-delay="0.1s">
                  <h5>reason 1</h5>
                  <h4>Next-Level Storytelling</h4>
                  <img src="images\62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="pic" />
                  <p>Unleash the best visuals and experiences that modern web design has to offer.
                     Webflow turns your wildest of ideas into strategic customer-experiences.</p>
              </div>
            </Col>
            <Col  sm={12} md={4} lg={4}> 
              <div className='card wow bounceInUp' data-wow-duration="2s" data-wow-delay="0.1s">
                  <h5>reason 2</h5>
                  <h4>Unbelievable performance</h4>
                  <img src="images\62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg" alt="pic" />
                  <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed,
                     uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration</p>
              </div>
            </Col>
            <Col  sm={12} md={4} lg={4}> 
              <div className='card wow bounceInUp' data-wow-duration="2s" data-wow-delay="0.1s">
                  <h5>reason 1</h5>
                  <h4>Developer-Free Tweaks</h4>
                  <img src="images\62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg" alt="pic" />
                  <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without 
                    wreaking havoc or paying people like us to fix it.</p>
              </div>
            </Col>
          </Row>
       </Container>

       
    </section>

    {/* Section 5 (contact) */}
    <section className='sec5' id='contact'>
      <Container>
        <h1>Contact Us</h1>
        <Row className='contact'>
          <Col lg={6} md={6} sm={12} className='info'>
            <p><span>Email: </span>georginonabil3@gmail.com</p>
            <p><span>Phone: </span>(+20) 01284015143</p>
            <p><span>City: </span>Alexandria , Egypt </p>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <form ref={form} onSubmit={sendEmail}>
              <div className='d-flex'>
                <input type="text" name="name" placeholder='Name' />
                <input type="text" name="company" placeholder='Company' />
              </div>
              <div className='d-flex'>
                <input type="email" name="email" placeholder='Email' />
                <input type="tel" name="phone" placeholder='Phone' />
              </div>
              <textarea name="message" placeholder='Message'/>
              <button type="submit">Send Message</button>
          </form>
          </Col>
        </Row>
      </Container>
    </section>

    {/* footer */}
    <Footer/>
    </>
  )
}

export default Home