import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class ApartmentIndex extends Component {

  render() {
    return (
      <>
        <h3>ApartmentIndex</h3>
        <div>
        { this.props.apartments && this.props.apartments.map(apartment => {
          return(
            <Col>
              <Card style={{width: '18rem'}} key={apartment.id} >
                <CardImg top width= "100%" src={apartment.image} alt="Card image cap" />
                <ListGroup flush>
                  <ListGroupItem>
                    {apartment.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    {apartment.street}
                    {apartment.city}, {apartment.state}
                  </ListGroupItem>
                  <ListGroupItem>
                   Beds {apartment.bedrooms}
                  </ListGroupItem>
                  <ListGroupItem>
                   Baths {apartment.bathrooms}
                  </ListGroupItem>
                </ListGroup>
                <CardBody>
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <Button>Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
          </Col>
          )
        })} 
        </div>
      </>
    )
  }
}
