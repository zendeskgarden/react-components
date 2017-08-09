import React from "react";
import sinon from "sinon";
import expect from "test/expect";

import { View } from "..";
import Callout from ".";
import P from "./P";

describe("Callout", () => {
  it("renders a callout with the given text", () =>
    expect(<Callout>Callout</Callout>, "to render as", <View>Callout</View>));

  const types = ["default", "success", "warning", "error"];
  types.forEach(type => {
    describe(`when given the type ${type}`, () => {
      it(`renders a ${type} callout`, () => {
        expect(
          <Callout type={type}>Callout</Callout>,
          "to render as",
          <View className={type} />
        );
      });
    });
  });

  describe("when given a paragraph", () => {
    it("renders a P element", () => {
      return expect(
        <Callout>
          <Callout.P>Callout</Callout.P>
        </Callout>,
        "to render as",
        <View>
          <P>Callout</P>
        </View>
      );
    });
  });

  describe("when given a onClose handler", () => {
    it("renders a remove button with the given handler", () => {
      const onClose = () => {};

      return expect(
        <Callout onClose={onClose}>Callout</Callout>,
        "to render as",
        <View>
          Callout
          <button className="remove" tabIndex={0} onClick={onClose} />
        </View>
      );
    });

    it("renders a remove button with the given tab index", () => {
      const onClose = () => {};

      return expect(
        <Callout onClose={onClose} tabIndex={42}>
          Callout
        </Callout>,
        "to render as",
        <View>
          Callout
          <button className="remove" tabIndex={42} onClick={onClose} />
        </View>
      );
    });

    it("calls the onClose handler when clicking the remove button", () => {
      const onClose = sinon.spy();

      return expect(
        <Callout onClose={onClose}>Callout</Callout>,
        "when deeply rendered",
        "with event ",
        "click",
        "on",
        <button className="remove" />
      ).then(() => {
        expect(onClose, "was called");
      });
    });
  });
});
