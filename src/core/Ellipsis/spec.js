import React from "react";
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

  describe("when a title is given", () => {
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

  describe("when not given a title and the children is a string", () => {
    it("sets the title to the children", () => {
      expect(
        <Ellipsis>
          Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
        </Ellipsis>,
        "to render as",
        <View>
          <div />
          Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
        </View>
      );
    });
  });

  describe("when not given a title and the children is not a string", () => {
    it("applies no title", () => {
      expect(
        <Ellipsis>
          <Text>
            Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
          </Text>
        </Ellipsis>,
        "to exactly render as",
        <View className="ellipsis">
          <div />
          <Text>
            Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu
          </Text>
        </View>
      );
    });
  });
});
