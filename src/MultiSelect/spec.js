import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import MultiSelect from ".";
import View from "../View";
import TextInput from "../TextInput";
import RelativePositionedPopup from "../core/RelativePositionedPopup";

describe("MultiSelect", () => {
  it("renders a MultiSelect component", () => {
    expect(
      <MultiSelect
        label="Label text"
        hint="Hint text"
        textValue="text value"
        selectedItems={[<MultiSelect.Label>Label 1</MultiSelect.Label>]}
      />,
      "to render as",
      <View className="txt">
        <label>Label text</label>
        <small>Hint text</small>
        <RelativePositionedPopup
          marginBottom={4}
          marginTop={4}
          anchor={
            <View className="input">
              <MultiSelect.Label>Label 1</MultiSelect.Label>
              <TextInput.Core />
            </View>
          }
        />
      </View>
    );
  });

  describe("when focused", () => {
    it("opens the menu", () => {
      const onOpen = sinon.spy();

      return expect(
        <MultiSelect
          onOpen={onOpen}
          selectedItems={[<MultiSelect.Label>Label 1</MultiSelect.Label>]}
        />,
        "when deeply rendered",
        "with event",
        "focus",
        "on",
        <input />
      ).then(() => {
        expect(onOpen, "was called");
      });
    });
  });

  const validations = ["error", "warning", "success"];

  validations.forEach(validation => {
    describe(`when given a ${validation} validation`, () => {
      it("renders a MultiSelect component with the given validation", () => {
        expect(
          <MultiSelect validation={validation} />,
          "to render as",
          <View className={`txt ${validation}`} />
        );
      });
    });

    describe(`when given a ${validation} validation + a validation text`, () => {
      it("renders a MultiSelect component with the given validation and message", () => {
        expect(
          <MultiSelect validation={validation} validationText="Some message" />,
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
        <MultiSelect validation="error" />,
        "when rendered not to contain",
        <small className="message" />
      );
    });
  });

  describe("when disabled", () => {
    it("renders a disabled MultiSelect component", () => {
      expect(
        <MultiSelect disabled />,
        "to render as",
        <View className="txt disabled" />
      );
    });
  });
});
