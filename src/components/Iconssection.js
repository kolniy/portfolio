import React, { useState } from 'react'
import classnames from "classnames"
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";

const Iconssection = () => {

    const [tabs, setTabs] = useState(1)
    const toggleNavs = (e, index) => {
        e.preventDefault()
        setTabs(index)
    }

    return (
        <>
            <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 1
                })}
                onClick={e => toggleNavs(e, 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-atom mr-2" />
                Front End Development
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 2
                })}
                onClick={e => toggleNavs(e, 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-settings mr-2" />
                Backend/API Development
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 3
                })}
                onClick={e => toggleNavs(e, 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Version Control
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card>
          <CardBody>
            <TabContent activeTab={"tabs" + tabs}>
              <TabPane tabId="tabs1">
                    <Row className="justify-content-center">
                     <Col lg="2" xs="4">
                        <div className="tools-item" id="html">
                            <img className="img-fluid" src={require("../img/icons/html.png")} alt="" id="htmltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="htmltooltip">
                        HTML - Define the structure of your website or webapp 
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/css.png")} alt="" id="csstooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="csstooltip">
                        CSS - Make your webapp/website looks great and mobile friendly
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/bootstrap.png")} alt="" id="bootstraptooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="bootstraptooltip">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/sass.png")} alt="" id="sasstooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="sasstooltip">
                        SCSS - A CSS preprocessor. Add's Synthatic sugar to your CSS code
                      </UncontrolledTooltip>
                       </Col> 
                        <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/react.png")} alt="" id="reacttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="reacttooltip">
                        REACT - Javascript library for creating interactive UI's and manage the state of web app's
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/typescript.png")} alt="" id="typescripttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="typescripttooltip">
                        TYPESCRIPT - A typed superset of the Javascript language
                      </UncontrolledTooltip>
                    </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/materialui.png")} alt="" id="materialtooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="materialtooltip">
                        MATERIAL UI - Makes creating awesome UI's faster and easier
                      </UncontrolledTooltip>
                    </Col>
                    </Row>
              </TabPane>
              <TabPane tabId="tabs2">
              <Row className="justify-content-center">
                     <Col lg="2" xs="4">
                        <div className="tools-item" id="html">
                            <img className="img-fluid" src={require("../img/icons/nodejs.png")} alt="" id="nodejstooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="nodejstooltip">
                        NODE JS - A Javascript runtime enviroment for creating wep applications and web API's
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/mongodb.png")} alt="" id="mongodb" />
                        </div>
                        <UncontrolledTooltip delay={0} target="mongodb">
                        Mongo DB - Most popular NOSQL database system for building modern web applications.
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/sql.png")} alt="" id="sqltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="sqltooltip">
                        SQL - Structured Query Language, used for accessing and manipulating data stored in a database.
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/typescript.png")} alt="" id="typescripttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="typescripttooltip">
                        TYPESCRIPT - A typed superset of the Javascript language 
            </UncontrolledTooltip>
          </Col>
          <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/graphql.png")} alt="" id="graphqltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="graphqltooltip">
                        GRAPHQL - A data query and manipulation language for working with data efficiently
                      </UncontrolledTooltip>
                       </Col>
      </Row>
    </TabPane>
        <TabPane tabId="tabs3">
        <Row className="justify-content-center">
        <Col lg="2" xs="4">
                   <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/git.png")} alt="" id="gittooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="gittooltip">
                        GIT - A Version Control System that help's to keep track of changes to code
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                   <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/github.png")} alt="" id="githubtooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="githubtooltip">
                        GITHUB - A code hosting platform for version control and collaboration
                      </UncontrolledTooltip>
                       </Col>
                </Row>  
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
        </>
    )
}

export default Iconssection