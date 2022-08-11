// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
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
        image: 'image'
      }
    ]
  }

  let renderedApartmentIndex;

  beforeEach(() => {
    renderedApartmentIndex = shallow(<ApartmentIndex {...props}/>)
  });
  it("displays a heading", () => {
    // const apartmentIndex = shallow(<ApartmentIndex />)
    const apartmentIndexHeading = renderedApartmentIndex.find("h3")
    expect(apartmentIndexHeading.length).toEqual(1)
    expect(apartmentIndexHeading.text()).toEqual("ApartmentIndex")
  })
  it("displays an apartment", () => {
    const apartmentIndexCard = renderedApartmentIndex.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })
})

