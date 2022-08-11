import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import ProtectedApartmentIndex from './ProtectedApartmentIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("ProtectedApartmentIndex renders a page", () => {
    it("displays a a header", () => {
        const protectedApartmentIndex = shallow(<ProtectedApartmentIndex />)
        const protectedApartmentIndexHeading = protectedApartmentIndex.find("h3")
        expect(protectedApartmentIndexHeading.text()).toEqual("My Listings")
    })
})