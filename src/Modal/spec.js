import React from "react";

import expect from "test/expect";
import Modal from "./";

import View from "../core/View/";
import Button from "../Button/";
import CloseButton from "./CloseButton";

const handler = () => {
  window.alert("wat");
};

describe("Modal", () => {
  describe("with only text content", () => {
    it("renders a modal with the given content", () => {
      expect(
        <Modal onClose={handler} hidden={false}>
          Content.
        </Modal>,
        "to deeply render as",
        <View className="backdrop" onClick={handler}>
          <View
            aria-labelledby="dialog-title"
            className="dialog"
            role="dialog"
            tabIndex={-1}
          >
            Content.
          </View>
        </View>
      );
    });
  });

  describe("when given a test id", () => {
    it("renders a modal with the given test id", () => {
      expect(
        <Modal onClose={handler} hidden={false} testId="test-me">
          Content.
        </Modal>,
        "to deeply render as",
        <View className="backdrop" onClick={handler}>
          <View
            aria-labelledby="dialog-title"
            className="dialog"
            role="dialog"
            tabIndex={-1}
            testId="test-me"
          >
            Content.
          </View>
        </View>
      );
    });
  });

  describe("with a header, a body and a footer", () => {
    it("renders a modal a header, a body and a footer", () => {
      expect(
        <Modal hidden={false} onClose={handler}>
          <Modal.Header>
            <Modal.Title>Dialog Title</Modal.Title>
            <Modal.CloseButton onClick={handler} />
          </Modal.Header>
          <Modal.Body>Content.</Modal.Body>
          <Modal.Footer>
            <Button onClick={handler}>Ok</Button>
          </Modal.Footer>
        </Modal>,
        "to deeply render as",
        <View className="backdrop" onClick={handler}>
          <View
            aria-labelledby="dialog-title"
            className="dialog"
            role="dialog"
            tabIndex={-1}
          >
            <header>
              <h1>Dialog Title</h1>
              <CloseButton onClick={handler} />
            </header>
            <View className="body">Content.</View>
            <footer className="footer">
              <Button onClick={handler}>Ok</Button>
            </footer>
          </View>
        </View>
      );
    });
  });

  describe("when size is large", () => {
    it("renders a large modal", () => {
      expect(
        <Modal hidden={false} size="large">
          Large
        </Modal>,
        "to deeply render as",
        <View className="backdrop">
          <View
            aria-labelledby="dialog-title"
            className="size_large"
            role="dialog"
            tabIndex={-1}
          />
        </View>
      );
    });
  });
});
