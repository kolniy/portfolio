import React from 'react'
import { 
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText, 
    Col
     } from "reactstrap"
     

const PortfolioItem = ( { project: { id, imgSrc, title, text, github, landingPage } }) => {
    return (
      <Col key={id} md="4">
      <div className="portfolio-item">
      <Card className="shadow content-align-center">
  <CardImg className="img-card-height img-fluid"
    alt="..."
    src={imgSrc}
    top
  />
  <CardBody>
    <CardTitle>{ landingPage !== null ? <><a href={landingPage} rel="noopener noreferrer" target="_blank">
            <p>{title}</p>
            </a></> : <>{title}</> }
    </CardTitle>
    <CardText>
      {text}.
    </CardText>
    <Button
         className="btn-icon mb-3 mb-sm-0"
          color="github"
                href={github}
                size="lg"
                target="_blank"
              >
                <span className="btn-inner--icon mr-1">
                  <i className="fa fa-github" />
                </span>
                <span className="btn-inner--text">
                  <span className="text-warning mr-1">See More</span>
                  on Github
                </span>
              </Button>
  </CardBody>
</Card>
      </div>
    </Col>
    )
}

export default PortfolioItem