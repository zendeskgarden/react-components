import React from "react";
import expect from "test/expect";
import sinon from "sinon";
import TestUtils from "react-dom/test-utils";

import Checkbox from ".";
import View from "../core/View";

describe("Checkbox", () => {
  it("renders a checkbox that is not checked", () => {
    expect(
      <Checkbox checked={false}>Check me out!</Checkbox>,
      "to render as",
      <View className="checkbox">
        <input checked={false} className="input" type="checkbox" />
        <label className="label" dir="ltr">
          Check me out!
        </label>
      </View>
    );
  });

  it("renders a checkbox that with a hint", () => {
    expect(
      <Checkbox checked={false} hint="Watch out">
        Check me out!
      </Checkbox>,
      "to render as",
      <View className="checkbox">
        <input checked={false} className="input" type="checkbox" />
        <label className="label" dir="ltr">
          Check me out!
        </label>
        <small className="hint">Watch out</small>
      </View>
    );
  });

  describe("when checked", () => {
    it("renders a checkbox that is checked", () => {
      expect(
        <Checkbox checked>Check me out!</Checkbox>,
        "to render as",
        <View className="checkbox">
          <input checked className="input" type="checkbox" />
          <label className="label" dir="ltr">
            Check me out!
          </label>
        </View>
      );
    });

    describe("and toggled", () => {
      it("calls the onChange handle with the new state of the checkbox", () => {
        const onChange = sinon.spy();

        return expect(
          <Checkbox onChange={onChange} checked>
            Check me out!
          </Checkbox>,
          "when deeply rendered",
          "with event change",
          { target: { checked: false } },
          "on",
          <input />
        ).then(() => {
          expect(onChange, "to have calls satisfying", () => {
            onChange(false, { type: "change", target: { checked: false } });
          });
        });
      });
    });
  });

  describe("when toggled", () => {
    it("calls the onChange handle with the new state of the checkbox", () => {
      const onChange = sinon.spy();

      return expect(
        <Checkbox checked={false} onChange={onChange}>
          Check me out!
        </Checkbox>,
        "when deeply rendered",
        "with event change",
        { target: { checked: true } },
        "on",
        <input />
      ).then(() => {
        expect(onChange, "to have calls satisfying", () => {
          onChange(true, { type: "change", target: { checked: true } });
        });
      });
    });
  });

  describe("when muted", () => {
    it("renders a checkbox that is muted", () => {
      expect(
        <Checkbox checked={false} muted>
          Check me out!
        </Checkbox>,
        "to render as",
        <View className="checkbox">
          <input checked={false} className="input" type="checkbox" />
          <label className="label muted" dir="ltr">
            Check me out!
          </label>
        </View>
      );
    });
  });

  describe("when disabled", () => {
    it("renders a checkbox that is disabled", () => {
      expect(
        <Checkbox checked={false} disabled>
          Check me out!
        </Checkbox>,
        "to render as",
        <View className="checkbox disabled">
          <input checked={false} className="input" disabled type="checkbox" />
          <label className="label" dir="ltr">
            Check me out!
          </label>
        </View>
      );
    });

    ["error", "warning", "success"].forEach(validation => {
      describe(`when given validation ${validation} with no validation text`, () => {
        it("sets the correct class name according to the validation", () => {
          expect(
            <Checkbox validation={validation} />,
            "to render as",
            <View className={`checkbox ${validation}`} />
          );
        });

        it("shows no validation message", () => {
          expect(
            <Checkbox validation={validation} />,
            "when deeply rendered not to contain",
            <small className="message" />
          );
        });
      });

      describe(`when given validation ${validation} and a validation text`, () => {
        it("shows the correct validation text", () => {
          expect(
            <Checkbox validation={validation} validationText="Some message" />,
            "to render as",
            <View className={`checkbox ${validation}`}>
              <small className="message">Some message</small>
            </View>
          );
        });
      });
    });

    describe("and checked", () => {
      it("renders a checkbox that is disabled and checked", () => {
        expect(
          <Checkbox checked disabled>
            Check me out!
          </Checkbox>,
          "to render as",
          <View className="checkbox disabled">
            <input checked className="input" disabled type="checkbox" />
            <label className="label" dir="ltr">
              Check me out!
            </label>
          </View>
        );
      });
    });
  });

  describe("when using it as an uncontrolled input", () => {
    describe("when using defaultChecked", () => {
      it("it is checked on the DOM node", () => {
        let node;

        TestUtils.renderIntoDocument(
          <Checkbox defaultChecked ref={ref => ref && (node = ref.input)} />
        );

        expect(node.checked, "to equal", true);
      });

      it("it is not checked on the DOM node", () => {
        let node;

        TestUtils.renderIntoDocument(
          <Checkbox
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
          <Checkbox
            defaultChecked={false}
            onChange={onChange}
            ref={ref => ref && (node = ref.input)}
          />
        );

        TestUtils.Simulate.change(node, { target: { checked: true } });

        expect(onChange, "to have calls satisfying", () => {
          onChange(true, { type: "change", target: { checked: true } });
        });
      });

      it("calls the onChange handle with the new state of the checkbox", () => {
        const onChange = sinon.spy();
        let node;

        TestUtils.renderIntoDocument(
          <Checkbox
            defaultChecked
            onChange={onChange}
            ref={ref => ref && (node = ref.input)}
          />
        );

        TestUtils.Simulate.change(node, { target: { checked: false } });

        expect(onChange, "to have calls satisfying", () => {
          onChange(false, { type: "change", target: { checked: false } });
        });
      });
    });
  });

  describe("with a test id", () => {
    it("renders a checkbox with the specified test id", () => {
      expect(
        <Checkbox testId="testing">Check me out!</Checkbox>,
        "when deeply rendered",
        "to contain",
        <input data-test-id="testing" />
      );
    });
  });

  describe("with a custom id", () => {
    it("renders a checkbox with the specified custom id", () => {
      expect(
        <Checkbox id="testing">Check me out!</Checkbox>,
        "when deeply rendered",
        "to contain",
        <View>
          <input id="testing" />
          <label htmlFor="testing">Check me out!</label>
        </View>
      );
    });
  });

  describe("with a tab index", () => {
    it("renders a checkbox with the specified tab index", () => {
      expect(
        <Checkbox tabIndex={42}>Check me out!</Checkbox>,
        "when deeply rendered",
        "to contain",
        <input tabIndex={42} />
      );
    });
  });

  describe("when given no children", () => {
    it("renders a toggle with the class nolabel", () => {
      expect(
        <Checkbox />,
        "when deeply rendered",
        "to contain",
        <View className="noLabel">
          <input />
          <label />
        </View>
      );
    });
  });

  describe("when indeterminate", () => {
    it("renders a checkbox that is indeterminate", () => {
      expect(
        <Checkbox indeterminate>Check me out!</Checkbox>,
        "to render as",
        <View className="checkbox indeterminate">
          <input className="input" type="checkbox" />
          <label className="label" dir="ltr">
            Check me out!
          </label>
        </View>
      );
    });

    it("calls the onChange handle with true regardless of checkbox state", () => {
      let node;
      const onChange = sinon.spy();

      TestUtils.renderIntoDocument(
        <Checkbox
          checked
          indeterminate
          onChange={onChange}
          ref={ref => ref && (node = ref.input)}
        />
      );

      TestUtils.Simulate.change(node, { target: { checked: false } });

      expect(onChange, "to have calls satisfying", () => {
        onChange(true, { type: "change", target: { checked: false } });
      });
    });
  });

  describe("when given a className", () => {
    it("renders a Checkbox with the className applied", () => {
      expect(
        <Checkbox className="test-class">Test</Checkbox>,
        "to render as",
        <View className="checkbox test-class" />
      );
    });
  });
});
