import React from "react";
import createTooltipManager from "./createTooltipManager";
import expect from "test/expect";
import sinon from "sinon";
import TooltipContainer from "./TooltipContainer";

jest.mock("react-dom");
import { render } from "react-dom";

describe("Tooltips", () => {
  describe("createTooltipManager", () => {
    it("should return instance", () => {
      const instance = createTooltipManager(document.createElement("div"));

      expect(instance, "to only have keys", ["hide", "show"]);
    });

    it("show() renders correct tooltip", () => {
      const rootElement = document.createElement("div");
      const anchorElement = document.createElement("div");

      const instance = createTooltipManager(rootElement);

      const spy = sinon.spy();
      render.mockImplementation(spy);

      instance.show(anchorElement, "My content", ["left", "right"]);

      const [tooltipElement, renderTarget] = spy.args[0];

      expect(renderTarget, "to be", rootElement);
      expect(
        tooltipElement,
        "to deeply render as",
        <TooltipContainer
          anchor={anchorElement}
          positions={["left", "right"]}
          content="My content"
        />
      );
    });

    it("hide() renders an empty TooltipContainer", () => {
      const rootElement = document.createElement("div");

      const instance = createTooltipManager(rootElement);

      const spy = sinon.spy();
      render.mockImplementation(spy);

      instance.hide();

      const [tooltipElement, renderTarget] = spy.args[0];

      expect(renderTarget, "to be", rootElement);
      expect(
        tooltipElement,
        "to deeply render as",
        <TooltipContainer positions={["top", "bottom", "left", "right"]} />
      );
    });

    it("should correctly increment the tooltip id", () => {
      const instance = createTooltipManager(document.createElement("div"));

      expect([instance.show(), instance.show(), instance.show()], "to equal", [
        1,
        2,
        3
      ]);
    });
  });
});
