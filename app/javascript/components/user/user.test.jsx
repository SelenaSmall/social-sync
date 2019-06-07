import React from "react";
import { shallow } from "enzyme";
import User from "./user";

describe("user.jsx", () => {
  xit("we have jest tests", () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        Hello !
      </div>
    `);
  });
});
