import React from "react";
import { shallow } from "enzyme";
import Profile from "./profile";

describe("profile", () => {
  it("we have jest tests", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        Hello !
      </div>
    `);
  });
});
