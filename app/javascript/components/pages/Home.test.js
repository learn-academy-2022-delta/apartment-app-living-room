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
    expect(homeHeading.text()).toEqual("This Should Fail");
  });
});

it("displays text", () => {
  const home = shallow(<Home />);
  const homeHeading = home.find("p");
  console.log("HOME", homeHeading.debug());
  expect(homeHeading.length).toEqual(1);
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
    expect(loggedInHeading.text()).toEqual("This Should Fail");
  });
});

it("displays text", () => {
  const home = shallow(<Home />);
  const loggedInHeading = home.find("p");
  console.log("HOME", loggedInHeading.debug());
  expect(loggedInHeading.text()).toEqual("This Should Fail");
});

it("displays two buttons", () => {
  const home = shallow(<Home />);
  const loggedInHeading = home.find("button");
  console.log("HOME", loggedInHeading.debug());
  expect(loggedInHeading.text()).toEqual("This Should Fail");
});
