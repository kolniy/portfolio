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
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/css.png")} alt="" id="htmltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="htmltooltip">
                        Bootstrap 4 - Most popular front-end component library
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
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                       </Col> 
                        <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/react.png")} alt="" id="reacttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="reacttooltip">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/typescript.png")} alt="" id="typescripttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="typescripttooltip">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                    </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/materialui.png")} alt="" id="materialtooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="materialtooltip">
                        Bootstrap 4 - Most popular front-end component library
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
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                      </Col>
                      <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/mongodb.png")} alt="" id="mongodb" />
                        </div>
                        <UncontrolledTooltip delay={0} target="mongodb">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/sql.png")} alt="" id="sqltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="sqltooltip">
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/typescript.png")} alt="" id="typescripttooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="typescripttooltip">
                        Bootstrap 4 - Most popular front-end component library
            </UncontrolledTooltip>
          </Col>
          <Col lg="2" xs="4">
                        <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/graphql.png")} alt="" id="graphqltooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="graphqltooltip">
                        Bootstrap 4 - Most popular front-end component library
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
                        Bootstrap 4 - Most popular front-end component library
                      </UncontrolledTooltip>
                       </Col>
                       <Col lg="2" xs="4">
                   <div className="tools-item">
                            <img className="img-fluid" src={require("../img/icons/github.png")} alt="" id="githubtooltip" />
                        </div>
                        <UncontrolledTooltip delay={0} target="githubtooltip">
                        Bootstrap 4 - Most popular front-end component library
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