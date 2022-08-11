import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem } from 'reactstrap'

export default class ApartmentShow extends Component {
  
  render() {
    let { apartment } = this.props
    return (
      <>
      <h3>ApartmentShow</h3>
      <Card>
        <CardImg top width="100%" src={apartment.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{apartment.street}</CardTitle>
            <CardSubtitle>{apartment.city}, {apartment.state}</CardSubtitle>
              <ListGroup flush>
                <ListGroupItem>
                  {apartment.manager}
                  {apartment.email}
                  {apartment.bedrooms}
                  {apartment.bathrooms}
                  {apartment.pets}
                </ListGroupItem>
              </ListGroup>
          </CardBody>
      </Card>
      </>
    )
  }
}
