import React from "react";
import unexpected from "test/expect";
import sinon from "sinon";
import Menu from "./";
import Button from "../Button";
import RelativePositionedPopup from "../core/RelativePositionedPopup";
import TestUtils from "react-dom/test-utils";

describe("Menu", () => {
  const expect = unexpected
    .clone()
    .addAssertion(
      "<ReactElement> when clicking on the trigger <assertion?>",
      (expect, subject) =>
        expect(
          subject,
          "when deeply rendered",
          "with event",
          "click",
          "on",
          <Button>trigger</Button>
        )
          .delay(0)
          .then(subject => {
            expect.errorMode = "bubble";
            expect.shift(subject);
          })
    );

  const click = (selector, options) => {
    const element = document.querySelector(selector);
    if (!element) {
      expect.fail("Could not find element {0}", selector);
    }
    TestUtils.Simulate.click(element, options);
  };

  /**
   * Must remove stale menus that are appended to body during testing.
   * These are removed correctly in non-testing environments.
   */
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  describe("with menu items", () => {
    it("renders a menu containing the items", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
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

  describe("when clicking on the trigger the menu becomes visible", () => {
    it("renders a menu that is not hidden", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div style="visibility: visible">
           <div role="menu">
             <div>
               <div role="menuitem">One</div>
               <div role="menuitem">Two</div>
               <div role="menuitem">Three</div>
             </div>
           </div>
         </div>
        `
      ));
  });

  describe("when specifying margins", () => {
    it("the margins are delegated to the popup", () =>
      expect(
        <Menu
          trigger={<Button>trigger</Button>}
          marginBottom={0}
          marginLeft={0}
          marginRight={0}
          marginTop={0}
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to contain",
        <RelativePositionedPopup
          hidden={false}
          marginBottom={0}
          marginLeft={0}
          marginRight={0}
          marginTop={0}
        >
          {position => {}}
        </RelativePositionedPopup>
      ));
  });

  describe("an Item", () => {
    it("renders a menu containing a checked item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item checked>Checked</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
          <div role="menu">
            <div>
              <div role="menuitem" class="checked">Checked</div>
            </div>
          </div>
        </div>`
      ));

    it("renders a menu containing a item containing meta information", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item metaInformation={<span>Meta info</span>}>
            Body text
          </Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
            <div role="menu">
              <div>
                <div role="menuitem">
                  Body text
                  <div class="meta">
                    <span>Meta info</span>
                  </div>
                </div>
              </div>
            </div>
          </div>`
      ));
  });

  describe("a Separator", () => {
    it("renders a menu containing a separator", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem">One</div>
               <div role="menuitem">Two</div>
               <div role="separator" class="separator"></div>
               <div role="menuitem">Three</div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("a HeaderItem", () => {
    it("renders a menu containing a header item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.HeaderItem>Header</Menu.HeaderItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="header_item">Header</div>
             </div>
           </div>
         </div>`
      ));

    it("renders a menu containing a header item with an icon", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.HeaderItem icon={<span>Icon</span>}>Header</Menu.HeaderItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="header_item">
                <div class="header_icon"><span>Icon</span></div>
                Header
               </div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("a NextItem", () => {
    it("renders a menu containing a next item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.NextItem>Next</Menu.NextItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="next_item">Next</div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("a PreviousItem", () => {
    it("renders a menu containing a previous item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.PreviousItem>Previous</Menu.PreviousItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="previous_item">Previous</div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("an AddItem", () => {
    it("renders a menu containing an add item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.AddItem>Add</Menu.AddItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="add_item">Add</div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("a MediaItem", () => {
    it("renders a menu containing a media item", () =>
      expect(
        <Menu trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.MediaItem media={<span>Media</span>}>Body Text</Menu.MediaItem>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div role="menu">
             <div>
               <div role="menuitem" class="media_item">
                <div class="media_figure">
                  <span>Media</span>
                </div>
                <div class="media_body">
                  Body Text
                </div>
               </div>
             </div>
           </div>
         </div>`
      ));
  });

  describe("with arrows enabled", () => {
    it("renders an menu with an arrow", () =>
      expect(
        <Menu
          arrow
          positioning="bottom"
          trigger={<Button>trigger</Button>}
          testId="my-menu"
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
           <div class="menu arrow_top" role="menu">
             <div>
               <div role="menuitem">One</div>
               <div role="menuitem">Two</div>
               <div role="separator" class="separator"></div>
               <div role="menuitem">Three</div>
             </div>
           </div>
         </div>
        `
      ));
  });

  describe("given a size", () => {
    it("renders a menu with that size", () =>
      expect(
        <Menu size="large" trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
          <div class="menu size_large" role="menu">
            <div>
              <div role="menuitem">One</div>
              <div role="menuitem">Two</div>
              <div role="separator" class="separator"></div>
              <div role="menuitem">Three</div>
            </div>
          </div>
        </div>
        `
      ));
  });

  describe("with a max height", () => {
    describe("that is a number", () => {
      it("makes the item list scrollable and set a max height", () =>
        expect(
          <Menu
            trigger={<Button>trigger</Button>}
            maxHeight={150}
            testId="my-menu"
          >
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
            <Menu.Item>Three</Menu.Item>
          </Menu>,
          "when clicking on the trigger",
          "to have rendered menu",
          `<div>
            <div class="menu" role="menu" style="max-height: 150px">
              <div>
                <div role="menuitem">One</div>
                <div role="menuitem">Two</div>
                <div role="menuitem">Three</div>
              </div>
            </div>
          </div>
          `
        ));
    });

    describe("that is a string", () => {
      it("makes the item list scrollable and set a max height", () =>
        expect(
          <Menu
            trigger={<Button>trigger</Button>}
            maxHeight={"80vh"}
            testId="my-menu"
          >
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
            <Menu.Item>Three</Menu.Item>
          </Menu>,
          "when clicking on the trigger",
          "to have rendered menu",
          `<div>
            <div class="menu" role="menu" style="max-height: 80vh">
              <div>
                <div role="menuitem">One</div>
                <div role="menuitem">Two</div>
                <div role="menuitem">Three</div>
              </div>
            </div>
          </div>
          `
        ));
    });
  });

  describe("with a container classname", () => {
    it("applies the custom classname", () =>
      expect(
        <Menu
          trigger={<Button>trigger</Button>}
          className="custom-class"
          testId="my-menu"
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
          <div class="menu custom-class" role="menu">
            <div>
              <div role="menuitem">One</div>
              <div role="menuitem">Two</div>
              <div role="menuitem">Three</div>
            </div>
          </div>
        </div>
        `
      ));
  });

  describe("with fixedWidth", () => {
    it("renders a menu with fixed width", () =>
      expect(
        <Menu fixedWidth trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
          <div class="menu fixed_width" role="menu">
            <div>
              <div role="menuitem">One</div>
              <div role="menuitem">Two</div>
              <div role="menuitem">Three</div>
            </div>
          </div>
        </div>
        `
      ));
  });

  describe("with a small size", () => {
    it("renders a small menu", () =>
      expect(
        <Menu size="small" trigger={<Button>trigger</Button>} testId="my-menu">
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to have rendered menu",
        `<div>
          <div class="menu size_small" role="menu">
            <div>
              <div role="menuitem">One</div>
              <div role="menuitem">Two</div>
              <div role="menuitem">Three</div>
            </div>
          </div>
        </div>
        `
      ));
  });

  describe("visibility hooks", () => {
    it("onOpen is called when the menu is shown", () => {
      const onOpen = sinon.spy();

      return expect(
        <Menu trigger={<Button>trigger</Button>} onOpen={onOpen}>
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger",
        "to satisfy",
        () => expect(onOpen, "was called once")
      );
    });

    it("onClose is called when the menu is closed", () => {
      const onClose = sinon.spy();

      return expect(
        <Menu trigger={<Button>trigger</Button>} onClose={onClose}>
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>,
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => expect(onClose, "was called once"));
    });
  });

  describe("with an onChange on the menu", () => {
    it("calls the onChange handler when an item is clicked", () => {
      const onChange = sinon.spy();

      return expect(
        <Menu onChange={onChange} trigger={<Button>trigger</Button>}>
          <Menu.Item value="one">One</Menu.Item>
          <Menu.Item value="two" testId="my-menu-item">
            Two
          </Menu.Item>
          <Menu.Item value="three">Three</Menu.Item>
        </Menu>,
        "when clicking on the trigger"
      )
        .then(() => click("[data-test-id=my-menu-item]"))
        .delay(200)
        .then(() =>
          expect(onChange, "to have calls satisfying", () =>
            onChange("two", { type: "click" })
          )
        );
    });
  });

  describe("with an onClick handle on the individual items", () => {
    it("calls the onClick handler when the item is clicked", () => {
      const onClick = sinon.spy();

      return expect(
        <Menu trigger={<Button>trigger</Button>}>
          <Menu.Item onClick={onClick} value="one" testId="my-menu-item">
            One
          </Menu.Item>
          <Menu.Item onClick={onClick} value="two">
            Two
          </Menu.Item>
          <Menu.Item onClick={onClick} value="three">
            Three
          </Menu.Item>
        </Menu>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => {
        click("[data-test-id=my-menu-item]");
        expect(onClick, "to have calls satisfying", () => {
          onClick("one", { type: "click" });
        });
      });
    });

    it("calls the onClick handler when the item is selected with the keyboard", () => {
      const onClick = sinon.spy();

      return expect(
        <Menu trigger={<Button>trigger</Button>}>
          <Menu.Item onClick={onClick} value="one">
            One
          </Menu.Item>
          <Menu.Item onClick={onClick} value="two">
            Two
          </Menu.Item>
          <Menu.Item onClick={onClick} value="three">
            Three
          </Menu.Item>
        </Menu>,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 13 },
        "on",
        <Button>trigger</Button>
      ).then(() =>
        expect(onClick, "to have calls satisfying", () =>
          onClick("two", { type: "keydown" })
        )
      );
    });
  });

  describe("containing link items", () => {
    const menu = (
      <Menu trigger={<Button>trigger</Button>}>
        <Menu.LinkItem href="https://www.zendesk.com" testId="link">
          Link
        </Menu.LinkItem>
        <Menu.LinkItem
          href="https://www.zendesk.com/help-center"
          target="_blank"
          testId="blank"
        >
          Blank
        </Menu.LinkItem>
        <Menu.LinkItem
          href="https://www.zendesk.com/support"
          disabled
          testId="disabled"
        >
          Disabled
        </Menu.LinkItem>
      </Menu>
    );

    beforeEach(() => {
      sinon.stub(window, "open").returns({
        opener: "evil opener"
      });
    });

    afterEach(() => {
      window.open.restore();
    });

    it("opens the link when you click on a link item", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => {
        click("[data-test-id=link]");

        expect(window.open, "to have calls satisfying", () =>
          window.open("https://www.zendesk.com", "_self")
        );
      }));

    it("ctrl clicking a link item sets the target to blank", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => {
        click("[data-test-id=link]", { ctrlKey: true });

        expect(window.open, "to have calls satisfying", () =>
          window.open("https://www.zendesk.com", "_blank")
        );
      }));

    it("respects the link target", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => {
        click("[data-test-id=blank]");

        expect(window.open, "to have calls satisfying", () =>
          window.open("https://www.zendesk.com/help-center", "_blank")
        );
      }));

    it("respects the disabled flag", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>
      ).then(() => {
        click("[data-test-id=disabled]");
        expect(window.open, "was not called");
      }));

    it("opens the link when selected with the keyboard", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 13 },
        "on",
        <Button>trigger</Button>
      ).then(() =>
        expect(window.open, "to have calls satisfying", () =>
          window.open("https://www.zendesk.com/help-center", "_blank")
        )
      ));

    it("opens the link in a new window when a link is selected by ctrl-enter", () =>
      expect(
        menu,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 40 },
        "on",
        <Button>trigger</Button>,
        "with event",
        "keyDown",
        { keyCode: 13, ctrlKey: true },
        "on",
        <Button>trigger</Button>
      ).then(() =>
        expect(window.open, "to have calls satisfying", () =>
          window.open("https://www.zendesk.com", "_blank")
        )
      ));
  });
});
