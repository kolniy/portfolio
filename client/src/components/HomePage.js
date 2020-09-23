import React from 'react'
import {
    Row,
    Col,
    Container,
    Button,
  } from "reactstrap"
  import Iconssection from "./Iconssection"
  import projectsData from "../data/projectsData"
  import PortfolioItem from "../components/portfolio/PortfolioItem"
  import AboutModal from  "../components/AboutModal"
  import SendMailForm from "./SendMailForm"

  const imgSrc = require('../img/hero1.jpg')

const HomePage = props => {
    return (
      <>
    <section className="hero-section" id="about">
      <section className="hero-about-section">
    <Row className="justify-content-center">
      <Col>
      <div className="text-center">
                    <h3 className="hero-section__name">
                      KOLANIYI
                    </h3>
                    <div className="h6 font-weight-300 theme-white">
                    <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i> {' '}
                      Abuja, Nigeria
                    </div>
                    <div className="h6 mt-4 theme-white">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full Stack MERN Developer
                </div>
        <div className="hero-section__about">
          <p className="lead">
          kolawole Olaniyi is a passionate full-stack (MERN) developer with approximately 2 years of professional and freelance experience in web development. A deep desire to learn and curiosity for technology-related subjects is a major motivation for kolawole in developing He's skills as a self-taught developer. <br/> Personal qualities such as resilience, patience, diligence and hard work in addition to He's experience while working and learning to be a better developer have helped to shape Him into being a well-rounded software Developer. 
          </p>
        </div>

        <div className="hero-section__learn-more">
          <AboutModal imgUrl={require('../img/kola.jpg')} />
        </div>

        <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://www.linkedin.com/in/kolaniyi/"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-circle-08" />
                        </span>
                        <span className="btn-inner--text">Find me on LinkInd</span>
                      </Button>
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/kolniy"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Find Me</span>
                          on Github
                        </span>
                      </Button>
        </div>
        </div>
      </Col>
     </Row>
      </section>
    </section>
    <section id="service" className="service text-center">
     <Container>

      <div className="service-header">
        <h1 className="display-3">Services</h1>
      </div>

        <Row>
        <Col md="4">
          <div className="service-main">
            <div className="service-main__info">
              <div className="service-logo">
                <img src={require('../img/service-icon.png')} alt="app design service" />
              </div>
              <h4 className="service-main__info-heading">WEBSITE DESIGN</h4>
              <p className="service-main__para lead">Huge Preference for great looking websites and web applications that are always mobile responsive.I Design UI/UX that that scale across different browsers, can also transform Design idea's and Design prototype into pixel-perfect code.</p>
            </div>
            <div className="shadow-one"></div>
            <div className="shadow-two"></div>
          </div>
    </Col>
    <Col md="4">
    <div className="service-main">
            <div className="service-main__info">
              <div className="service-logo">
                <img src={require('../img/service-icon.png')} alt="app design service" />
              </div>
              <h4 className="service-main__info-heading">API Design</h4>
              <p className="service-main__para lead">Using both SQL based Relational Database management systems and NoSQL based database, alongside Database agnostic tools to design, develop, and build both data-driven web applications and RESTFUL API for web apps.</p>
            </div>
            <div className="shadow-one"></div>
            <div className="shadow-two"></div>
          </div>
    </Col>
    <Col md="4">
    <div className="service-main">
            <div className="service-main__info">
              <div className="service-logo">
                <img src={require('../img/service-icon.png')} alt="app design service" />
              </div>
              <h4 className="service-main__info-heading">Project Managt.</h4>
              <p className="service-main__para lead">Using Modern Software development Life Cycle(SDLC) methods, such as Agile and DevOps to keep track of the different stages of product development. It facilitate's the communication of feedback during project development.</p>
            </div>
            <div className="shadow-one"></div>
            <div className="shadow-two"></div>
          </div>
    </Col>
        </Row>
      </Container>
    </section>
    <section id="tools" className="tools text-center">
      <Container>
      <div className="service-header">
        <h1 className="display-3">Tools</h1>
      </div>
        <div className="tools-container">
          <Iconssection />
        </div>
      </Container>
    </section>

  <section id="portFolio" className="port-folio">
      <div className="service-header">
        <h1 className="display-3 text-center">Port Folio</h1>
      </div>
        <div className="portfolio-contents">
        <Container>
          <Row>
          {projectsData.map((project) => <PortfolioItem key={project.id} project={ {...project, imgSrc:imgSrc } } /> )}
          </Row>
        </Container>
        </div>
      </section>

  <section className="contact" id="contact">
      <Container>
      <div className="service-header">
        <h1 className="display-3 text-center">Contact Me</h1>
      </div>
      <div className="display-paragraph">
        <p className="text-center">
        Do you have a project you're currently working on, need an additional hand to collaborate with your team, or u have an idea you would like to turn into a great looking product that your clients will love? <br/> Kindly reach out to me in any of the following ways.
        </p>
      </div>
      <Row className="reach-me-container">
      <Col md="6" sx="6">
        <div className="contact-section-social">
        <p className="h6">Find Me On</p>
        <div className="social-icons-section">
            <a href="https://www.linkedin.com/in/kolaniyi/" rel="noopener noreferrer" target="_blank" className="social-icon"> <i className="fa fa-linkedin-square social-icon-linkedin" aria-hidden="true"></i><p className="no-display">some hidden text</p></a>

            <a href="https://twitter.com/kolaniyi3" rel="noopener noreferrer" target="_blank" className="social-icon"><i className="fa fa-twitter social-icon-twitter" aria-hidden="true"></i><p className="no-display">some hidden text</p></a>

            <a href="https://github.com/kolniy" rel="noopener noreferrer" target="_blank" className="social-icon">
            <i className="fa fa-github social-icon-github" aria-hidden="true"></i>
            <p className="no-display">some hidden text</p>
            </a>
            <p className="h6">Email</p>
            <p className="silent"><i className="fa fa-envelope" aria-hidden="true"></i> info@kolaniyi.com</p>
            <img src={require('../img/kola.jpg')} alt="kolaniyi" className="img-fluid rounded-circle shadow" style={{width: "150px"} } />
        </div>
        </div>
      </Col>
      <Col md="6">
        <div className="contact-section-form">
            <SendMailForm />
         </div>
      </Col>
      </Row>
        </Container>
      </section>

   <section className="footer text-center">
    <p> &copy; {new Date().getFullYear()} kolaniyi.com</p>
  </section>
     </>
    )
}

export default HomePage
