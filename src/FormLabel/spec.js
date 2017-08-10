import React from "react";
import expect from "test/expect";

import FormLabel from ".";

describe("FormLabel", () => {
  it("renders a standalone form label", () => {
    expect(
      <FormLabel>This is a label</FormLabel>,
      "to render as",
      <label className="label">This is a label</label>
    );
  });

  it("supports htmlFor", () => {
    expect(
      <FormLabel htmlFor="target">This is a label</FormLabel>,
      "to render as",
      <label htmlFor="target" />
    );
  });
});
