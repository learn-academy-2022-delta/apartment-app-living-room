// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import Home from "./Home";

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />);
    const homeHeading = home.find("h1");
    console.log("HOME", homeHeading.debug());
    expect(homeHeading.text()).toEqual("Welcome");
  });
});

it("displays text", () => {
  const home = shallow(<Home />);
  const homeHeading = home.find("p");
  console.log("HOME", homeHeading.debug());
  expect(homeHeading.text).toEqual(
    "Discover your new home search our available apartment listings.You'll find your next home here!"
  );
});

it("displays two buttons", () => {
  const home = shallow(<Home />);
  const homeHeading = home.find("a");
  console.log("HOME", homeHeading.debug());
  expect(homeHeading.length).toEqual(2);
});

// ______________Logged_In_User______________________

describe("when logged in home page renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />);
    const loggedInHeading = home.find("h1");
    console.log("HOME", loggedInHeading.debug());
    expect(loggedInHeading.text()).toEqual("Welcome User");
  });
});

it("displays text", () => {
  const home = shallow(<Home />);
  const loggedInHeading = home.find("p");
  console.log("HOME", loggedInHeading.debug());
  expect(loggedInHeading.text()).toEqual(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quishendrerit dolor magna Aliquet eget sit amet tellus cras. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu."
  );
});

it("displays two buttons", () => {
  const home = shallow(<Home />);
  const loggedInHeading = home.find("a");
  console.log("HOME", loggedInHeading.debug());
  expect(loggedInHeading.length()).toEqual(2);
});
