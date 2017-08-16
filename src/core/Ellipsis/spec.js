import React from "react";
import { render } from "react-dom";
import expect from "test/expect";

import Ellipsis from ".";
import Text from "../Text";
import View from "../View";

describe("Ellipsis", () => {
  it("renders a View with the ellipsis class", () => {
    expect(
      <Ellipsis>
        Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
      </Ellipsis>,
      "to render as",
      <View className="ellipsis" />
    );
  });

  describe("when given a title prop", () => {
    it("uses the title on the rendered View", () => {
      expect(
        <Ellipsis title="Something else">
          Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
        </Ellipsis>,
        "to render as",
        <View title="Something else">
          <div />
          Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
        </View>
      );
    });
  });

  describe("when given no title prop", () => {
    describe("and rich content children", () => {
      it("sets the dom node's `textContent` as title prop", () => {
        const instance = render(
          <Ellipsis>
            <Text>
              <strong>Bold</strong> text with some <em>itallic</em> text.
            </Text>
          </Ellipsis>,
          document.body
        );

        instance.setState({ isOverflowing: true });

        expect(instance.render().props, "to satisfy", {
          title: "Bold text with some itallic text."
        });
      });
    });

    describe("and string content children", () => {
      it("sets the dom node's `textContent` as title prop", () => {
        const instance = render(
          <Ellipsis>Plain text with no markup</Ellipsis>,
          document.body
        );

        instance.setState({ isOverflowing: true });

        expect(instance.render().props, "to satisfy", {
          title: "Plain text with no markup"
        });
      });
    });
  });
});
