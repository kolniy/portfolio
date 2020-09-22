import React from 'react'
import { Link } from "react-router-dom"
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";

import { Link as ScrollLink } from "react-scroll"

const Header = () => {
    return (
        <Navbar
          id="nav"
          className="navbar-horizontal navbar-dark navbar-transparent"
          expand="lg"
          fixed='top'
        >
       <Container>
            <NavbarBrand tag={Link} to="/">
                kolaniyi
            </NavbarBrand>
            <button
              aria-controls="navbar-primary"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-primary"
              data-toggle="collapse"
              id="navbar-primary"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-primary">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-primary"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-primary"
                      data-toggle="collapse"
                      id="navbar-primary"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
              <NavItem>
                  <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={1000} className="nav-link">
                  About
        </ScrollLink>
                </NavItem>
              <NavItem>
                  <ScrollLink activeClass="active" to="service" spy={true} smooth={true} duration={1000} className="nav-link">
                  Services
        </ScrollLink>
                </NavItem>
                <NavItem>
                  <ScrollLink activeClass="active" to="tools" spy={true} smooth={true} duration={1000} className="nav-link">
          Tools
        </ScrollLink>
                </NavItem>
                <NavItem>
                         <ScrollLink activeClass="active" to="portFolio" spy={true} smooth={true} duration={1000} className="nav-link">
          Port Folio
        </ScrollLink>
                </NavItem>
                <NavItem>
                  <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={1000} className="nav-link">
          Contact Me
        </ScrollLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container> 
        </Navbar>
    )
}

export default Header