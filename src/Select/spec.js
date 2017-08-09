import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import Select from ".";
import Menu from "../Menu";
import View from "../View";

describe("Select", () => {
  it("renders a select component", () => {
    expect(
      <Select label="Select a value:" selected="bar">
        <Select.Item value="foo">foo</Select.Item>
        <Select.Item value="bar">bar</Select.Item>
        <Select.Item value="baz">baz</Select.Item>
      </Select>,
      "to render as",
      <View className="txt">
        <Menu
          dir="ltr"
          positioning={["bottom_stretch", "top_stretch"]}
          stretched
          trigger={
            <View className="input" tabIndex={0}>
              bar
            </View>
          }
        >
          <Menu.Item value="foo">foo</Menu.Item>
          <Menu.Item value="bar">bar</Menu.Item>
          <Menu.Item value="baz">baz</Menu.Item>
        </Menu>
      </View>
    );
  });

  describe("when clicked", () => {
    it("opens the menu", () => {
      const onOpen = sinon.spy();

      return expect(
        <Select label="Select a value:" onOpen={onOpen} selected="bar">
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
          <Select.Item value="baz">baz</Select.Item>
        </Select>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <View role="button" />
      ).then(() => {
        expect(onOpen, "was called");
      });
    });
  });

  describe("when given positioning configuration", () => {
    it("forwards the configuration to the menu", () => {
      expect(
        <Select
          label="Select a value:"
          positioning={["bottom_right", "top_right"]}
          selected="bar"
        >
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
          <Select.Item value="baz">baz</Select.Item>
        </Select>,
        "to render as",
        <View className="txt">
          <Menu
            positioning={["bottom_right", "top_right"]}
            stretched
            trigger={
              <View className="input" tabIndex={0}>
                bar
              </View>
            }
          >
            <Menu.Item value="foo">foo</Menu.Item>
            <Menu.Item value="bar">bar</Menu.Item>
            <Menu.Item value="baz">baz</Menu.Item>
          </Menu>
        </View>
      );
    });
  });

  const validations = ["error", "warning", "success"];

  validations.forEach(validation => {
    describe(`when given a ${validation} validation`, () => {
      it("renders a select component with the given validation", () => {
        expect(
          <Select selected="bar" validation={validation}>
            <Select.Item value="foo">foo</Select.Item>
            <Select.Item value="bar">bar</Select.Item>
          </Select>,
          "to render as",
          <View className={`txt ${validation}`} />
        );
      });
    });

    describe(`when given a ${validation} validation + a validation text`, () => {
      it("renders a select component with the given validation and message", () => {
        expect(
          <Select
            selected="bar"
            validation={validation}
            validationText="Some message"
          >
            <Select.Item value="foo">foo</Select.Item>
            <Select.Item value="bar">bar</Select.Item>
          </Select>,
          "to render as",
          <View className={`txt ${validation}`}>
            <small className="message">Some message</small>
          </View>
        );
      });
    });
  });

  describe(`when given a validation without a validation text`, () => {
    it("renders a select component with no validationText", () => {
      expect(
        <Select selected="bar" validation="error">
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
        </Select>,
        "when rendered not to contain",
        <small className="message" />
      );
    });
  });

  describe("with a small size", () => {
    it("renders a small select component", () => {
      expect(
        <Select size="small" selected="bar">
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
          <Select.Item value="baz">baz</Select.Item>
        </Select>,
        "to render as",
        <View className="txt size_small">
          <Menu
            dir="ltr"
            positioning={["bottom_stretch", "top_stretch"]}
            size="small"
            stretched
            trigger={<View className="input">bar</View>}
          >
            <Menu.Item value="foo">foo</Menu.Item>
            <Menu.Item value="bar">bar</Menu.Item>
            <Menu.Item value="baz">baz</Menu.Item>
          </Menu>
        </View>
      );
    });
  });

  describe("when disabled", () => {
    it("renders a disabled select component", () => {
      expect(
        <Select disabled label="Select a value:" selected="bar">
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
          <Select.Item value="baz">baz</Select.Item>
        </Select>,
        "to render as",
        <View className="txt disabled">
          <label>Select a value:</label>
          <Menu
            dir="ltr"
            positioning={["bottom_stretch", "top_stretch"]}
            stretched
            trigger={
              <View disabled className="input" tabIndex={null}>
                bar
              </View>
            }
          >
            <Menu.Item value="foo">foo</Menu.Item>
            <Menu.Item value="bar">bar</Menu.Item>
            <Menu.Item value="baz">baz</Menu.Item>
          </Menu>
        </View>
      );
    });

    it("is not clickable", () => {
      const onOpen = sinon.spy();

      return expect(
        <Select disabled label="Select a value:" onOpen={onOpen} selected="bar">
          <Select.Item value="foo">foo</Select.Item>
          <Select.Item value="bar">bar</Select.Item>
          <Select.Item value="baz">baz</Select.Item>
        </Select>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <View role="button" />
      ).then(() => {
        expect(onOpen, "was not called");
      });
    });
  });
});
