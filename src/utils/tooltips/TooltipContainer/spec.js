import React from "react";
import expect from "test/expect";
import sinon from "sinon";
import TooltipContainer from ".";
import { render } from "react-dom";

jest.mock("../../positioning/getBestRelativePlacement");
import getBestRelativePlacement from "../../positioning/getBestRelativePlacement";

describe("TooltipContainer", () => {
  it("correctly flip left/right based on `dir` prop", () => {
    const spy = sinon.spy();

    getBestRelativePlacement.mockImplementation((...args) => {
      spy(...args);
      return { rect: {} };
    });

    const instance = render(
      <TooltipContainer
        anchor={document.createElement("div")}
        content="Some content"
        dir="rtl"
        positions={["top", "right", "left"]}
      />,
      document.createElement("div")
    );

    // Skip the pre-render/analyse phase
    instance.state = {
      tooltipBounds: { top: 0, bottom: 0, right: 0, left: 0 }
    };

    instance.render();

    const [positioning] = spy.args[0];

    expect(positioning.positions, "to equal", ["top", "left", "right"]);

    jest.unmock("../../positioning/getBestRelativePlacement");
  });

  it("correctly sets z-index style on the container based on `zIndex` prop", () => {
    const instance = render(
      <TooltipContainer
        anchor={document.createElement("div")}
        content="Some content"
        zIndex={42}
      />,
      document.createElement("div")
    );

    // Skip the pre-render/analyse phase
    instance.state = {
      tooltipBounds: { top: 0, bottom: 0, right: 0, left: 0 }
    };

    const renderedContainer = instance.render();

    expect(renderedContainer.props, "to satisfy", { style: { zIndex: 42 } });
  });
});
