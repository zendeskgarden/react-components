import React from "react";
import expect from "test/expect";
import sinon from "sinon";
import TestUtils from "react-dom/test-utils";

import Toggle from ".";
import View from "../core/View";

describe("Toggle", () => {
  it("renders a toggle that is not checked", () => {
    expect(
      <Toggle checked={false}>Toggle me!</Toggle>,
      "to render as",
      <View className="toggle">
        <input checked={false} className="input" type="checkbox" />
        <label className="label" dir="ltr">
          Toggle me!
        </label>
      </View>
    );
  });

  it("renders a toggle with a hint", () => {
    expect(
      <Toggle checked={false} hint="Watch out">
        Toggle me!
      </Toggle>,
      "to render as",
      <View className="toggle">
        <input checked={false} className="input" type="checkbox" />
        <label className="label" dir="ltr">
          Toggle me!
        </label>
        <small className="hint">Watch out</small>
      </View>
    );
  });

  describe("when checked", () => {
    it("renders a toggle that is checked", () => {
      expect(
        <Toggle checked>Toggle me!</Toggle>,
        "to render as",
        <View className="toggle">
          <input checked className="input" type="checkbox" />
          <label className="label" dir="ltr">
            Toggle me!
          </label>
        </View>
      );
    });

    describe("and toggled", () => {
      it("calls the onChange handle with the new state of the checkbox", () => {
        const onChange = sinon.spy();

        return expect(
          <Toggle onChange={onChange} checked>
            Toggle me!
          </Toggle>,
          "when deeply rendered",
          "with event change",
          { target: { checked: false } },
          "on",
          <input />
        ).then(() => {
          expect(onChange, "to have calls satisfying", () => {
            onChange(false);
          });
        });
      });
    });
  });

  describe("when toggled", () => {
    it("calls the onChange handle with the new state of the checkbox", () => {
      const onChange = sinon.spy();

      return expect(
        <Toggle checked={false} onChange={onChange}>
          Toggle me!
        </Toggle>,
        "when deeply rendered",
        "with event change",
        { target: { checked: true } },
        "on",
        <input />
      ).then(() => {
        expect(onChange, "to have calls satisfying", () => {
          onChange(true);
        });
      });
    });
  });

  describe("when muted", () => {
    it("renders a toggle that is disabled", () => {
      expect(
        <Toggle checked={false} muted>
          Toggle me!
        </Toggle>,
        "to render as",
        <View className="toggle">
          <input checked={false} className="input" type="checkbox" />
          <label className="label muted" dir="ltr">
            Toggle me!
          </label>
        </View>
      );
    });
  });

  describe("when disabled", () => {
    it("renders a toggle that is disabled", () => {
      expect(
        <Toggle checked={false} disabled>
          Toggle me!
        </Toggle>,
        "to render as",
        <View className="toggle">
          <input checked={false} className="input" disabled type="checkbox" />
          <label className="label" dir="ltr">
            Toggle me!
          </label>
        </View>
      );
    });

    ["error", "warning", "success"].forEach(validation => {
      describe(`when given validation ${validation} with no validation text`, () => {
        it("sets the correct class name according to the validation", () => {
          expect(
            <Toggle validation={validation} />,
            "to render as",
            <View className={`toggle ${validation}`} />
          );
        });

        it("shows no validation message", () => {
          expect(
            <Toggle validation={validation} />,
            "when deeply rendered not to contain",
            <small className="message" />
          );
        });
      });

      describe(`when given validation ${validation} and a validation text`, () => {
        it("shows the correct validation text", () => {
          expect(
            <Toggle validation={validation} validationText="Some message" />,
            "to render as",
            <View className={`toggle ${validation}`}>
              <small className="message">Some message</small>
            </View>
          );
        });
      });
    });

    describe("and checked", () => {
      it("renders a toggle that is disabled and checked", () => {
        expect(
          <Toggle checked disabled>
            Toggle me!
          </Toggle>,
          "to render as",
          <View className="toggle">
            <input checked className="input" disabled type="checkbox" />
            <label className="label" dir="ltr">
              Toggle me!
            </label>
          </View>
        );
      });
    });
  });
  describe("when focused", () => {
    it("loses focused when onBlur is called on input", () => {
      return expect(
        <Toggle checked>Toggle me!</Toggle>,
        "when deeply rendered",
        "with event",
        "blur",
        "on",
        <input />
      ).then(({ state }) => expect(state, "to satisfy", { focused: false }));
    });

    describe("and checked", () => {
      it("toggles off via left arrow key", () => {
        const onChange = sinon.spy();

        return expect(
          <Toggle checked onChange={onChange}>
            Toggle me!
          </Toggle>,
          "when deeply rendered",
          "with event",
          "keyDown",
          { keyCode: 37 },
          "on",
          <input />
        ).then(() => expect(onChange, "was called with", false));
      });
    });

    describe("and unchecked", () => {
      it("toggles on via right arrow key", () => {
        const onChange = sinon.spy();

        return expect(
          <Toggle checked={false} onChange={onChange}>
            Toggle me!
          </Toggle>,
          "when deeply rendered",
          "with event",
          "keyDown",
          { keyCode: 39 },
          "on",
          <input />
        ).then(() => expect(onChange, "was called with", true));
      });
    });
  });

  describe("when using it as an uncontrolled input", () => {
    describe("when using defaultChecked", () => {
      it("it is checked on the DOM node", () => {
        let node;

        TestUtils.renderIntoDocument(
          <Toggle defaultChecked ref={ref => ref && (node = ref.input)} />
        );

        expect(node.checked, "to equal", true);
      });

      it("it is not checked on the DOM node", () => {
        let node;

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked={false}
            ref={ref => ref && (node = ref.input)}
          />
        );

        expect(node.checked, "to be false");
      });
    });

    describe("when toggled", () => {
      it("calls the onChange handle with the new state of the checkbox", () => {
        let node;
        const onChange = sinon.spy();

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked={false}
            onChange={onChange}
            ref={ref => ref && (node = ref.input)}
          />
        );

        TestUtils.Simulate.change(node, { target: { checked: true } });

        expect(onChange, "to have calls satisfying", () => {
          onChange(true);
        });
      });

      it("calls the onChange handle with the new state of the checkbox", () => {
        const onChange = sinon.spy();
        let node;

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked
            onChange={onChange}
            ref={ref => ref && (node = ref.input)}
          />
        );

        TestUtils.Simulate.change(node, { target: { checked: false } });

        expect(onChange, "to have calls satisfying", () => {
          onChange(false);
        });
      });
    });
  });

  describe("with a test id", () => {
    it("renders a toggle with the specified test id", () => {
      expect(
        <Toggle testId="testing">Toggle me!</Toggle>,
        "when deeply rendered",
        "to contain",
        <input data-test-id="testing" />
      );
    });
  });

  describe("with a custom id", () => {
    it("renders a toggle with the specified custom id", () => {
      expect(
        <Toggle id="testing">Toggle me!</Toggle>,
        "when deeply rendered",
        "to contain",
        <View>
          <input id="testing" />
          <label htmlFor="testing">Toggle me!</label>
        </View>
      );
    });
  });

  describe("with a tab index", () => {
    it("renders a toggle with the specified tab index", () => {
      expect(
        <Toggle tabIndex={42}>Toggle me!</Toggle>,
        "when deeply rendered",
        "to contain",
        <input tabIndex={42} />
      );
    });
  });

  describe("when given no children", () => {
    it("renders a toggle with the class nolabel", () => {
      expect(
        <Toggle />,
        "when deeply rendered",
        "to contain",
        <View className="noLabel">
          <input />
          <label />
        </View>
      );
    });
  });
});
