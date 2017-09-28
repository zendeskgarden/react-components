import React from "react";
import expect from "test/expect";

import IconButton from ".";
import Button from "../Button";

describe("IconButton", () => {
  it("renders a button with an icon class", () => {
    expect(
      <IconButton pill type="primary" size="medium">
        <img src="http://placeskull.com/18/18/03363d" />
      </IconButton>,
      "to render as",
      <Button pill className="button" type="primary" size="medium">
        <img className="icon" src="http://placeskull.com/18/18/03363d" />
      </Button>
    );
  });

  it("renders a button with danger styling if provided", () => {
    expect(
      <IconButton color="danger">
        <img src="http://placeskull.com/18/18/03363d" />
      </IconButton>,
      "to render as",
      <Button color="danger">
        <img className="icon" src="http://placeskull.com/18/18/03363d" />
      </Button>
    );
  });

  describe("when rotated", () => {
    it("renders an icon button with a rotated icon", () => {
      expect(
        <IconButton isRotated>
          <img src="http://placeskull.com/18/18/03363d" />
        </IconButton>,
        "to render as",
        <Button className="button">
          <img
            className="icon rotated"
            src="http://placeskull.com/18/18/03363d"
          />
        </Button>
      );
    });
  });
});
