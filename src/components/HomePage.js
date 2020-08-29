import React from 'react'
import {
    Row,
    Col,
    Container,
    Button
  } from "reactstrap"
  import Iconssection from "./Iconssection"

const HomePage = props => {
    return (
      <>
    <section className="hero-section">
      <section className="hero-about-section">
    <Row className="justify-content-center">
      <Col>
      <div className="text-center">
                    <h3 className="hero-section__name">
                      KOLANIYI
                    </h3>
                    <div className="h6 font-weight-300 theme-white">
                      <i className="ni location_pin mr-2" />
                      Abuja, Nigeria
                    </div>
                    <div className="h6 mt-4 theme-white">
                      <i className="ni business_briefcase-24 mr-2" />
                      Full Stack MERN Developer
                </div>
        <div className="hero-section__about">
          <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eveniet sint ad officia fugiat quo ex nobis assumenda labore repellat! 
          </p>
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
              <h4 className="service-main__info-heading">App Design</h4>
              <p className="service-main__para lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur deserunt natus, facere libero provident temporibus eum amet voluptate ipsum!</p>
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
              <h4 className="service-main__info-heading">App Design</h4>
              <p className="service-main__para lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur deserunt natus, facere libero provident temporibus eum amet voluptate ipsum!</p>
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
              <h4 className="service-main__info-heading">App Design</h4>
              <p className="service-main__para lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur deserunt natus, facere libero provident temporibus eum amet voluptate ipsum!</p>
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
        <Container>
          <Row>
            
          </Row>
        </Container>
      </div>
      </section>
      </>
    )
}


export default HomePage
