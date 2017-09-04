import React from "react";
import expect from "test/expect";

import Callout from "../Callout";
import Callouts from ".";

describe("Callouts", () => {
  it("adds a floating class when the prop is passed", () =>
    expect(
      <Callouts floating>
        <Callout>Callout</Callout>
      </Callouts>,
      "to render as",
      <div className="callouts floating">
        <Callout dir="ltr" type="default" tabIndex={0} floating>
          Callout
        </Callout>
      </div>
    ));

  it("renders a floating callout when the prop is passed", () =>
    expect(
      <Callouts floating>
        <Callout>Callout</Callout>
      </Callouts>,
      "to render as",
      <div className="callouts floating">
        <Callout dir="ltr" type="default" tabIndex={0} floating>
          Callout
        </Callout>
      </div>
    ));

  it("passes the correct props from the children", () =>
    expect(
      <Callouts floating>
        <Callout type="success" title="Title">
          Callout
        </Callout>
      </Callouts>,
      "to render as",
      <div className="callouts floating">
        <Callout dir="ltr" type="success" title="Title" tabIndex={0} floating>
          Callout
        </Callout>
      </div>
    ));
});
