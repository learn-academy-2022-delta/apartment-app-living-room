import React, { Component } from 'react'
import { Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'


class ProtectedApartmentIndex extends Component {
  render() {
    console.log(this.props.apartments)
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props

      return (
        <>
      <h3>My Listings</h3>
      <div className='myListings'>
      <Row sm="3">
        {this.props.apartments && this.props.apartments.map(apartment => {
            return(
            <Card key ={apartment.id}>
                <CardImg top width="100%" src={apartment.image} alt="Card image cap" ></CardImg>
                <CardBody>
                        <CardTitle>{apartment.price} /month </CardTitle>
                        <CardSubtitle>{apartment.street} {apartment.city} </CardSubtitle>
                        <CardSubtitle>{apartment.bedrooms}/ {apartment.bathroom}</CardSubtitle>
                        <Button>More Info</Button>
                    </CardBody>
            </Card>
             )
            })}
        </Row>
        </div>
      </>
    )
  }
}

export default ProtectedApartmentIndex