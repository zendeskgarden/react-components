import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import Anchor from "./";
import View from "../core/View";

describe("Anchor", () => {
  it("should display children with anchor styling", () => {
    expect(
      <Anchor>
        Hello <span>World</span>
      </Anchor>,
      "to render as",
      <View className="container">
        <a className="anchor" tabIndex={0}>
          Hello <span>World</span>
        </a>
      </View>
    );
  });

  it("should apply custom tabIndex if provided", () => {
    expect(
      <Anchor tabIndex={-1}>Hello</Anchor>,
      "to render as",
      <View className="container">
        <a className="anchor" tabIndex={-1}>
          Hello
        </a>
      </View>
    );
  });

  it("should apply focused state if focused by keyboard", () => {
    return expect(
      <Anchor>Hello</Anchor>,
      "when deeply rendered",
      "with event",
      "focus",
      "on",
      <a />
    ).then(updateElement => {
      expect(
        updateElement,
        "to contain",
        <a className="anchor focused">Hello</a>
      );
    });
  });

  it("should trigger onFocus when focused", () => {
    const onFocus = sinon.spy();

    return expect(
      <Anchor onFocus={onFocus}>Hello</Anchor>,
      "when deeply rendered",
      "with event",
      "focus"
    ).then(() => {
      expect(onFocus, "was called times", 1);
    });
  });

  it("should trigger onBlur when blured", () => {
    const onBlur = sinon.spy();

    return expect(
      <Anchor onBlur={onBlur}>Hello</Anchor>,
      "when deeply rendered",
      "with event",
      "blur"
    ).then(() => {
      expect(onBlur, "was called times", 1);
    });
  });

  it("should trigger onClick when selected", () => {
    const onClick = sinon.spy();

    return expect(
      <Anchor onClick={onClick}>Hello</Anchor>,
      "when deeply rendered",
      "with event",
      "click",
      "on",
      <button />
    ).then(() => {
      expect(onClick, "was called times", 1);
    });
  });

  it("should remove focused state when selected", () => {
    return expect(
      <Anchor>Hello</Anchor>,
      "when deeply rendered",
      "with event",
      "focus",
      "on",
      <a />
    )
      .then(focusedElement => {
        return expect(focusedElement, "with event", "click", "on", <a />);
      })
      .then(selectedElement => {
        expect(selectedElement, "to contain", <a className="anchor">Hello</a>);
      });
  });

  it("should apply custom className if provided", () => {
    expect(
      <Anchor className="custom-class">Hello</Anchor>,
      "to render as",
      <View className="container">
        <a className="anchor custom-class">Hello</a>
      </View>
    );
  });

  it("should throw error if disabled is provided without onClick", () => {
    return expect(
      <Anchor disabled>Hello</Anchor>,
      "when deeply rendered"
    ).then(() => {
      expect(
        console.error.lastCall.args[0],
        "to contain",
        "onClick must be provided for a disabled state to be used."
      );
    });
  });

  it("should disable Anchor if disabled is provided", () => {
    expect(
      <Anchor onClick={() => {}} disabled>
        Hello
      </Anchor>,
      "to render as",
      <View className="container">
        <button className="anchor disabled" disabled>
          Hello
        </button>
      </View>
    );
  });
});
