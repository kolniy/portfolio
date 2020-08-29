import React from 'react'
import {  Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText, 
    Container
     } from "reactstrap"

const PortfolioItem = () => {
    return (
      <section className="portfolio-section">
      <Container className="">
        <Card className="shadow content-align-center" style={{ width: "30rem", height:"40rem" }}>
          <CardImg className="img-card-height"
            alt="..."
            src="https://source.unsplash.com/collection/190727/1100x500"
            top
          />
          <CardBody>
            <CardTitle>Holiday in the sun</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
                Some quick example text to build on the card title and make up
              the bulk of the card's content.
                Some quick example text to build on the card title and make up
              the bulk of the card's content...
            </CardText>
            <Button
              color="default"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Read More
            </Button>
          </CardBody>
        </Card>
        </Container>
      </section>
    )
}

export default PortfolioItem