import React from "react";
import sinon from "sinon";
import expect from "test/expect";

import View from "../View";
import Label from ".";

describe("Label", () => {
  it("renders a label with the given text", () =>
    expect(<Label>Label</Label>, "to render as", <View>Label</View>));

  describe("when not given a size", () => {
    it("renders a medium label", () =>
      expect(
        <Label>Label</Label>,
        "to render as",
        <View className="medium" />
      ));
  });

  const types = ["default", "light", "dark", "success", "warning", "error"];
  types.forEach(type => {
    describe(`when given the type ${type}`, () => {
      it(`renders a ${type} label`, () => {
        expect(
          <Label type={type}>Label</Label>,
          "to render as",
          <View className={type} />
        );
      });
    });
  });

  const sizes = ["small", "medium", "large"];
  sizes.forEach(size => {
    describe(`when given the size ${size}`, () => {
      it(`renders a ${size} label`, () => {
        expect(
          <Label size={size}>Label</Label>,
          "to render as",
          <View className={size} />
        );
      });
    });
  });

  describe("with the pill flag", () => {
    it("renders a pill label", () =>
      expect(
        <Label pill>Label</Label>,
        "to render as",
        <View className="pill" />
      ));
  });

  describe("with the round flag", () => {
    it("renders a round label", () =>
      expect(
        <Label round>Label</Label>,
        "to render as",
        <View className="round" />
      ));
  });

  describe("when given a tabIndex", () => {
    it("renders a label with the given tab index", () =>
      expect(
        <Label tabIndex={42}>Label</Label>,
        "to render as",
        <View tabIndex={42} />
      ));
  });

  describe("when given an avatar", () => {
    it("renders a label with an avatar", () => {
      const avatar = (
        <img className="my-class" src="http://placeskull.com/16/16/03363d" />
      );

      return expect(
        <Label avatar={avatar}>Label</Label>,
        "to render as",
        <View>
          <img
            className="avatar my-class"
            src="http://placeskull.com/16/16/03363d"
          />
          Label
        </View>
      );
    });
  });

  describe("when given a test id", () => {
    it("applies the test id to the label", () => {
      return expect(
        <Label testId="my-test-id">Label</Label>,
        "to render as",
        <View testId="my-test-id">Label</View>
      );
    });

    it("applies a test id to the remove button", () => {
      return expect(
        <Label testId="my-test-id" onRemove={() => {}}>
          Label
        </Label>,
        "to render as",
        <View testId="my-test-id">
          <span>Label</span>
          <button data-test-id="my-test-id-remove" />
        </View>
      );
    });
  });

  describe("when given a onRemove handler", () => {
    it("renders a remove button with the given handler", () => {
      const onRemove = () => {};

      return expect(
        <Label onRemove={onRemove}>Label</Label>,
        "to render as",
        <View>
          Label
          <span className="u-visibility-screenreader">
            Press delete to remove this label.
          </span>
          <button className="remove" tabIndex={-1} onClick={onRemove} />
        </View>
      );
    });

    it("renders a remove button with a customized accessibility message when provided", () => {
      const onRemove = () => {};

      return expect(
        <Label
          onRemove={onRemove}
          deleteAccessibilityMessage="Sample remove message"
        >
          Label
        </Label>,
        "to render as",
        <View>
          Label
          <span className="u-visibility-screenreader">
            Sample remove message
          </span>
          <button className="remove" tabIndex={-1} onClick={onRemove} />
        </View>
      );
    });

    it("calls the onRemove handler when clicking the remove button", () => {
      const onRemove = sinon.spy();

      return expect(
        <Label onRemove={onRemove}>Label</Label>,
        "when deeply rendered",
        "with event ",
        "click",
        "on",
        <button className="remove" />
      ).then(() => {
        expect(onRemove, "was called");
      });
    });

    it("calls the onRemove handler when pressing delete", () => {
      const onRemove = sinon.spy();
      const preventDefaultSpy = sinon.spy();

      return expect(
        <Label onRemove={onRemove}>Label</Label>,
        "when deeply rendered",
        "with event ",
        "keyDown",
        {
          keyCode: 8,
          preventDefault: preventDefaultSpy
        }
      ).then(() => {
        expect(onRemove, "was called");
        expect(preventDefaultSpy, "was called");
      });
    });
  });
});
