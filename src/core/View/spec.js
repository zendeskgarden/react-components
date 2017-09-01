import expect from "test/expect";
import React from "react";
import { render } from "react-dom";
import View from ".";
import sinon from "sinon";

const getInstance = element => render(element, document.createElement("div"));

describe("View", () => {
  describe("when given test-id", () => {
    it("sets correct data-test-id attribute", () => {
      expect(
        <View testId="my-test-id" />,
        "when rendered",
        "to satisfy",
        <div data-test-id="my-test-id" />
      );
    });
  });

  describe("when hidden", () => {
    it("sets aria-hidden", () => {
      expect(
        <View hidden />,
        "when rendered",
        "to satisfy",
        <div aria-hidden />
      );
    });
  });

  describe("when has title", () => {
    describe("when unmounting", () => {
      it("hides its own tooltip", () => {
        const instance = getInstance(<View title="Some tooltip" />);

        const spy = sinon.spy();

        const tooltipManagerStub = {
          show: () => 42,
          hide: spy
        };

        instance.context = {
          tooltips: tooltipManagerStub
        };

        instance.render().props.onMouseOver();

        instance.componentWillUnmount();

        expect(spy, "was called with exactly", 42);
      });
    });

    describe("when moused out", () => {
      it("hides its tooltip", () => {
        const instance = getInstance(<View title="Some tooltip" />);

        const spy = sinon.spy();

        const tooltipManagerStub = {
          show: () => 42,
          hide: spy
        };

        instance.context = {
          tooltips: tooltipManagerStub
        };

        instance.render().props.onMouseOver();
        instance.render().props.onMouseOut();

        expect(spy, "was called with exactly", 42);
      });
    });
  });
});
