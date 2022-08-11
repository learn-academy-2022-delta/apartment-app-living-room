// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow renders", () => {
  const apartment = {
    id: 1,
    street: '4341 Spring St',
    city: 'La Mesa',
    state: 'CA',
    manager: 'John',
    email: 'John@gmail.com',
    price: '1900',
    bedrooms: 1,
    bathrooms: 1,
    pets: 'no',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80'
  }

  let renderedApartmentShow;

  beforeEach(() => {
    renderedApartmentShow = shallow(<ApartmentShow apartment={apartment}/>)
  });
  
  it("displays a heading", () => {
    const apartmentShowHeading = renderedApartmentShow.find("h3")
    expect(apartmentShowHeading.length).toEqual(1)
  })

  it("displays all details for the apartment", () => {
    const apartmentShowCard = renderedApartmentShow.find("Card")
    expect(apartmentShowCard.length).toEqual(1)
  })
})