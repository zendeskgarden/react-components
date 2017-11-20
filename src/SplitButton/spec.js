import React from "react";
import TestUtils from "react-dom/test-utils";
import unexpected from "test/expect";
import sinon from "sinon";

import SplitButton from ".";
import View from "../View";
import Button from "../Button";
import IconButton from "../IconButton";
import RelativePositionedPopup from "../core/RelativePositionedPopup";

describe("SplitButton", () => {
  const expect = unexpected
    .clone()
    .addAssertion(
      "<ReactElement> when clicking on the menu button <assertion?>",
      (expect, subject) =>
        expect(
          subject,
          "when deeply rendered",
          "with event",
          "click",
          "on",
          <IconButton />
        ).then(subject => expect.shift(subject))
    );

  it("renders the first child item as it label by default", () => {
    expect(
      <SplitButton>
        <SplitButton.Item>One</SplitButton.Item>
        <SplitButton.Item>Two</SplitButton.Item>
        <SplitButton.Item>Three</SplitButton.Item>
      </SplitButton>,
      "to render as",
      <RelativePositionedPopup
        anchor={
          <View>
            <Button>One</Button>
            <IconButton />
          </View>
        }
        marginBottom={2}
        marginLeft={2}
        marginRight={2}
        marginTop={2}
      />
    );
  });

  describe("when given a size", () => {
    it("renders the split button with that size", () => {
      expect(
        <SplitButton size="large">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View>
              <Button size="large">One</Button>
              <IconButton size="large" />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when stretched", () => {
    it("stretches the main button and popup", () => {
      expect(
        <SplitButton stretched>
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View className="group stretched">
              <Button stretched>One</Button>
              <IconButton />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
          stretched
        />
      );
    });
  });

  describe("when given a type", () => {
    it("renders the split button with that type", () => {
      expect(
        <SplitButton type="primary">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View>
              <Button type="primary">One</Button>
              <IconButton type="primary" />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when given a pill flag", () => {
    it("renders the pill split button", () => {
      expect(
        <SplitButton pill>
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View>
              <Button pill>One</Button>
              <IconButton pill />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when given a test id", () => {
    it("renders a split button with that test id on the primary button", () => {
      expect(
        <SplitButton testId="wat">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          testId="wat"
          anchor={
            <View>
              <Button testId="wat-button">One</Button>
              <IconButton testId="wat-menu-button" />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when given a tab index", () => {
    it("renders a split button with that tab index", () => {
      expect(
        <SplitButton tabIndex={3}>
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View>
              <Button tabIndex={3}>One</Button>
              <IconButton />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when overriding the label", () => {
    it("renders a split button with that label on the primary button", () => {
      expect(
        <SplitButton label="My label">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "to render as",
        <RelativePositionedPopup
          anchor={
            <View>
              <Button>My label</Button>
              <IconButton />
            </View>
          }
          marginBottom={2}
          marginLeft={2}
          marginRight={2}
          marginTop={2}
        />
      );
    });
  });

  describe("when clicking on the primary button", () => {
    it("calls onChange with the value of the first item", () => {
      const onChange = sinon.spy();

      return expect(
        <SplitButton onChange={onChange}>
          <SplitButton.Item value="one">One</SplitButton.Item>
          <SplitButton.Item value="two">Two</SplitButton.Item>
          <SplitButton.Item value="three">Three</SplitButton.Item>
        </SplitButton>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>One</Button>
      ).then(() => {
        expect(onChange, "to have calls satisfying", () => {
          onChange("one", { type: "click" });
        });
      });
    });

    describe("when overriding the onClick handler", () => {
      it("calls onClick", () => {
        const onClick = sinon.spy();

        return expect(
          <SplitButton onClick={onClick}>
            <SplitButton.Item value="one">One</SplitButton.Item>
            <SplitButton.Item value="two">Two</SplitButton.Item>
            <SplitButton.Item value="three">Three</SplitButton.Item>
          </SplitButton>,
          "when deeply rendered",
          "with event",
          "click",
          "on",
          <Button>One</Button>
        ).then(() => {
          expect(onClick, "to have calls satisfying", () => {
            onClick({ type: "click" });
          });
        });
      });
    });
  });

  describe("when clicking on one of the items", () => {
    it("calls the onChange handler with the value of that item", () => {
      const onChange = sinon.spy();

      return expect(
        <SplitButton onChange={onChange}>
          <SplitButton.Item value="one">One</SplitButton.Item>
          <SplitButton.Item value="two" testId="two">
            Two
          </SplitButton.Item>
          <SplitButton.Item value="three">Three</SplitButton.Item>
        </SplitButton>,
        "when clicking on the menu button"
      ).then(() => {
        const menuItem = document.querySelector("[data-test-id=two]");
        TestUtils.Simulate.click(menuItem);

        expect(onChange, "to have calls satisfying", () => {
          onChange("two", { type: "click" });
        });
      });
    });
  });

  describe("when selecting an item with the keyboard", () => {
    it("calls the onChange handler with the value of that item", () => {
      const onChange = sinon.spy();

      return expect(
        <SplitButton onChange={onChange}>
          <SplitButton.Item value="one">One</SplitButton.Item>
          <SplitButton.Item value="two">Two</SplitButton.Item>
          <SplitButton.Item value="three">Three</SplitButton.Item>
        </SplitButton>,
        "when deeply rendered",
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <IconButton />,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <IconButton />,
        "with event",
        "keyDown",
        { keyCode: 13 },
        "on",
        <IconButton />
      ).then(() => {
        expect(onChange, "to have calls satisfying", () => {
          onChange("two", { type: "keydown" });
        });
      });
    });
  });

  describe("when clicking on the menu button", () => {
    it("renders the menu", () =>
      expect(
        <SplitButton testId="my-split-button">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "when clicking on the menu button",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem">One</div>
               <div role="menuitem">Two</div>
               <div role="menuitem">Three</div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("when given a className", () => {
    it("renders a SplitButton with the className applied", () => {
      expect(
        <SplitButton className="test-class">
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "when deeply rendered",
        "to contain",
        <View className="group test-class" />
      );
    });
  });

  describe("when provided danger", () => {
    it("renders a SplitButton with the correct styling applied", () => {
      expect(
        <SplitButton danger>
          <SplitButton.Item>One</SplitButton.Item>
          <SplitButton.Item>Two</SplitButton.Item>
          <SplitButton.Item>Three</SplitButton.Item>
        </SplitButton>,
        "when deeply rendered",
        "to contain",
        <View>
          <Button danger>One</Button>
          <IconButton danger />
        </View>
      );
    });
  });
});
