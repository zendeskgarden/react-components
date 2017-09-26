import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import Tabs from "../Tabs";

describe("Tabs", () => {
  it("renders a tab component showing the active panel", () => {
    expect(
      <Tabs active="two">
        <Tabs.Panel label="One" id="one">
          Panel one
        </Tabs.Panel>
        <Tabs.Panel label="Two" id="two">
          Panel two
        </Tabs.Panel>
        <Tabs.Panel label="Three" id="three">
          Panel three
        </Tabs.Panel>
      </Tabs>,
      "to deeply render as",
      <nav className="tabs">
        <ul className="list" role="tablist">
          <li aria-selected={false} className="label" role="tab">
            One
          </li>
          <li aria-selected className="label selected" role="tab">
            Two
          </li>
          <li aria-selected={false} className="label" role="tab">
            Three
          </li>
        </ul>
        <div className="panel" role="tabpanel">
          Panel two
        </div>
      </nav>
    );
  });

  describe("when configured to be vertical", () => {
    it("renders a vertical tabs component", () => {
      expect(
        <Tabs active="two" vertical>
          <Tabs.Panel label="One" id="one">
            Panel one
          </Tabs.Panel>
          <Tabs.Panel label="Two" id="two">
            Panel two
          </Tabs.Panel>
          <Tabs.Panel label="Three" id="three">
            Panel three
          </Tabs.Panel>
        </Tabs>,
        "to deeply render as",
        <nav className="tabs vertical">
          <ul className="list" role="tablist">
            <li aria-selected={false} className="label" role="tab">
              One
            </li>
            <li aria-selected className="label selected" role="tab">
              Two
            </li>
            <li aria-selected={false} className="label" role="tab">
              Three
            </li>
          </ul>
          <div className="panel" role="tabpanel">
            Panel two
          </div>
        </nav>
      );
    });
  });

  it("renders disabled tabs as disabled", () => {
    expect(
      <Tabs active="enabled">
        <Tabs.Panel label="Enabled" id="enabled">
          Enabled
        </Tabs.Panel>
        <Tabs.Panel label="Disabled" id="disabled" disabled>
          Panel two
        </Tabs.Panel>
      </Tabs>,
      "to deeply render as",
      <nav className="tabs">
        <ul className="list">
          <li className="label selected">Enabled</li>
          <li aria-disabled className="label disabled">
            Disabled
          </li>
        </ul>
        <div className="panel">Enabled</div>
      </nav>
    );
  });

  describe("when clicking on an enabled tab", () => {
    it("emits an onChange event", () => {
      const onChange = sinon.spy();

      return expect(
        <Tabs active="three" onChange={onChange}>
          <Tabs.Panel label="One" id="one">
            Panel one
          </Tabs.Panel>
          <Tabs.Panel label="Two" id="two">
            Panel two
          </Tabs.Panel>
          <Tabs.Panel label="Three" id="three">
            Panel three
          </Tabs.Panel>
        </Tabs>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <li className="label">Two</li>
      ).then(() => {
        expect(onChange, "to have calls satisfying", () => {
          onChange("two", { type: "click" });
        });
      });
    });
  });

  describe("when clicking on an disabled tab", () => {
    it("does not emits an onChange event", () => {
      const onChange = sinon.spy();

      return expect(
        <Tabs active="three" onChange={onChange}>
          <Tabs.Panel label="One" id="one">
            Panel one
          </Tabs.Panel>
          <Tabs.Panel label="Two" id="two" disabled>
            Panel two
          </Tabs.Panel>
          <Tabs.Panel label="Three" id="three">
            Panel three
          </Tabs.Panel>
        </Tabs>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <li className="label">Two</li>
      ).then(() => {
        expect(onChange, "was not called");
      });
    });
  });

  describe("when given a test id", () => {
    it("renders a tab component with that test id", () => {
      expect(
        <Tabs active="two" testId="test-me">
          <Tabs.Panel label="One" id="one">
            Panel one
          </Tabs.Panel>
          <Tabs.Panel label="Two" id="two">
            Panel two
          </Tabs.Panel>
          <Tabs.Panel label="Three" id="three">
            Panel three
          </Tabs.Panel>
        </Tabs>,
        "to deeply render as",
        <nav className="tabs" data-test-id="test-me" />
      );
    });
  });

  describe("when given a className", () => {
    it("renders Tabs with the className applied", () => {
      expect(
        <Tabs className="test-class">
          <Tabs.Panel label="One" id="one">
            Panel one
          </Tabs.Panel>
        </Tabs>,
        "to render as",
        <nav className="tabs test-class" />
      );
    });
  });
});
