import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import RadioButton from "../RadioButton";
import TextArea from "../TextArea";
import RadioButtonGroup from ".";
import View from "../core/View";

describe("RadioButtonGroup", () => {
  it("renders a RadioButtonGroup with radio buttons", () => {
    expect(
      <RadioButtonGroup>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
      </RadioButtonGroup>,
      "to render as",
      <View>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
      </View>
    );
  });

  it("renders radio buttons as disabled when set by individual items", () => {
    expect(
      <RadioButtonGroup>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton disabled value={2}>
          2
        </RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </RadioButtonGroup>,
      "to render as",
      <View>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton disabled value={2}>
          2
        </RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </View>
    );
  });

  it("calls the onChange handle with the new value of the radio button group", () => {
    const onChange = sinon.spy();

    return expect(
      <RadioButtonGroup onChange={onChange}>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </RadioButtonGroup>,
      "when deeply rendered",
      "with event change",
      "on",
      <input />
    ).then(() => {
      expect(onChange, "to have calls satisfying", () => {
        onChange(1, { type: "change" });
      });
    });
  });

  it("doesn't set onChange on non RadioButton components", () => {
    const onChange = sinon.spy();
    const textAreaOnChange = sinon.spy();

    return expect(
      <RadioButtonGroup onChange={onChange}>
        <RadioButton value={1}>1</RadioButton>
        <TextArea onChange={textAreaOnChange} />
        <RadioButton value={2}>2</RadioButton>
      </RadioButtonGroup>,
      "to render as",
      <View>
        <RadioButton value={1}>1</RadioButton>
        <TextArea onChange={textAreaOnChange} />
        <RadioButton value={2}>2</RadioButton>
      </View>
    );
  });

  describe("with value matching one of the radio buttons", () => {
    it("renders RadioButton as checked", () => {
      expect(
        <RadioButtonGroup selected={2}>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        "to render as",
        <View>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton checked value={2}>
            2
          </RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </View>
      );
    });
  });

  describe("when muted", () => {
    it("renders muted radio buttons", () => {
      expect(
        <RadioButtonGroup muted>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        "to render as",
        <View>
          <RadioButton muted value={1}>
            1
          </RadioButton>
          <RadioButton muted value={2}>
            2
          </RadioButton>
          <RadioButton muted value={3}>
            3
          </RadioButton>
        </View>
      );
    });
  });

  describe("with dir set to rtl", () => {
    it("renders rtl radio buttons", () => {
      expect(
        <RadioButtonGroup dir="rtl">
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        "to render as",
        <View>
          <RadioButton dir="rtl" value={1}>
            1
          </RadioButton>
          <RadioButton dir="rtl" value={2}>
            2
          </RadioButton>
          <RadioButton dir="rtl" value={3}>
            3
          </RadioButton>
        </View>
      );
    });
  });

  describe("with a disabled radio button group", () => {
    it("renders radio buttons as disabled", () => {
      expect(
        <RadioButtonGroup disabled>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        "to render as",
        <View>
          <RadioButton disabled value={1}>
            1
          </RadioButton>
          <RadioButton disabled value={2}>
            2
          </RadioButton>
          <RadioButton disabled value={3}>
            3
          </RadioButton>
        </View>
      );
    });

    it("renders radio buttons as not disabled when overriden by an individual radio button", () => {
      expect(
        <RadioButtonGroup disabled>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton disabled={false} value={2}>
            2
          </RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        "to render as",
        <View>
          <RadioButton disabled value={1}>
            1
          </RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton disabled value={3}>
            3
          </RadioButton>
        </View>
      );
    });
  });

  describe("when given a className", () => {
    it("renders a RadioButtonGroup with the className applied", () => {
      expect(
        <RadioButtonGroup className="test-class" />,
        "to render as",
        <View className="test-class" />
      );
    });
  });
});
