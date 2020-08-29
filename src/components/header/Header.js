import React from 'react'
import { Link } from "react-router-dom"
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";

const Header = () => {
    return (
        <Navbar
          id="nav"
          className="navbar-horizontal navbar-dark navbar-transparent"
          expand="lg"
          fixed='top'
        >
          {/* bg-default is a navbar class for default header bg-color */}
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
                  <NavLink href="#service">
                    Services <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#tools">
                   Tools
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#portFolio">
                    Port Folio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">
                    Contact Me
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container> 
        </Navbar>
    )
}

export default Header