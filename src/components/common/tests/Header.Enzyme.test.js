import React from "react";
import Header from "../Header";
import {mount, shallow} from "enzyme";
import { MemoryRouter } from "react-router-dom";

// Enzyme mount/shallow testing.

//Shallow
it("Contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

//Mount (generates final DOM)
it("Contains 3 anchors via mount", () => {
  const NumAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(NumAnchors).toEqual(3);
});
