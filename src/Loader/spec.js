import React from "react";
import expect from "test/expect";

import Loader from "./";

describe("Loader", () => {
  it("should apply alt messaging if provided", () => {
    const altMessage = "Test message";

    expect(
      <Loader alt={altMessage} />,
      "when rendered",
      "to contain",
      <img alt={altMessage} title={altMessage} />
    );
  });

  it("should apply className if supplied", () => {
    expect(
      <Loader className="test-class" />,
      "to render as",
      <img className="test-class" />
    );
  });

  it("should apply testId if supplied", () => {
    const testId = "test-id-custom";

    expect(
      <Loader testId={testId} />,
      "to render as",
      <img data-test-id={testId} />
    );
  });

  it("should apply size if supplied", () => {
    const size = 35;

    expect(
      <Loader size={35} />,
      "when rendered",
      "to contain",
      <img width={size} />
    );
  });
});
