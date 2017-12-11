import React from "react";
import expect from "test/expect";
import Text from "./";
import View from "../View";

const handler = () => {
  console.log("wat");
};

describe("Text", () => {
  it("renders a span with no styling", () => {
    expect(
      <Text>Hello world</Text>,
      "to render as",
      <View className="container">Hello world</View>
    );
  });

  describe("with a test id", () => {
    it("renders a text with the test id", () => {
      expect(
        <Text testId="wat">Testable</Text>,
        "to render as",
        <View testId="wat" className="container">
          Testable
        </View>
      );
    });
  });

  describe("when given a onClick handler", () => {
    it("renders a text with that onClick handler", () => {
      expect(
        <Text onClick={handler}>Click me!</Text>,
        "to render as",
        <View onClick={handler} className="container">
          Click me!
        </View>
      );
    });
  });

  describe("when given a tab index", () => {
    it("renders a text with that tab index", () => {
      expect(
        <Text tabIndex={42}>Tab order</Text>,
        "to render as",
        <View tabIndex={42} className="container">
          Tab order
        </View>
      );
    });
  });

  describe("when given a css class", () => {
    it("renders a text with that class", () => {
      expect(
        <Text className="foo">Custom</Text>,
        "to render as",
        <View className="container foo">Custom</View>
      );
    });
  });

  describe("when given a title", () => {
    it("renders a text with that title as a tooltip", () => {
      expect(
        <Text title="testing" tooltipPositioning="right">
          Custom
        </Text>,
        "to render as",
        <View className="container" title="testing" tooltipPositioning="right">
          Custom
        </View>
      );
    });
  });
});
