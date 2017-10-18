import unexpected from "test/expect";
import Generator from "chance-generators";
import positionRelative from "./positionRelative";
import getBestRelativePlacement from "./getBestRelativePlacement";
import isInsideViewport from "./isInsideViewport";
import keepInViewport from "./keepInViewport";

const expect = unexpected.clone();

expect.addAssertion(
  "<object> to be margin away from one side of <object>",
  (expect, subject, anchor) => {
    expect(
      subject.left + subject.width === anchor.left - anchor.margins.left ||
        subject.left === anchor.left + anchor.width + anchor.margins.right ||
        subject.top + subject.height === anchor.top - anchor.margins.top ||
        subject.top === anchor.top + anchor.height + anchor.margins.bottom,
      "to be true"
    );
  }
);

expect.addAssertion(
  "<object> to have the same size as <object>",
  (expect, subject, value) => {
    expect.errorMode = "nested";
    expect(subject, "to satisfy", {
      height: value.height,
      width: value.width
    });
  }
);

expect.addAssertion(
  "<object> to be inside viewport <object>",
  (expect, subject, viewport) => {
    expect(
      isInsideViewport({
        target: subject,
        viewport
      }),
      "to be true"
    );
  }
);

expect.addAssertion(
  "<object> to have been moved inside of viewport <object>",
  (expect, subject, viewport) => {
    expect(
      subject.top === 0 ||
        subject.left === 0 ||
        subject.top + subject.height === viewport.height ||
        subject.left + subject.width === viewport.width,
      "to be true"
    );
  }
);

const { integer, natural, pickset, shape, shuffle, unique } = new Generator(42);

const possiblePositions = [
  "bottom",
  "bottom_stretch",
  "bottom_left",
  "bottom_right",
  "left",
  "left_top",
  "left_bottom",
  "right",
  "right_top",
  "right_bottom",
  "top",
  "top_stretch",
  "top_left",
  "top_right"
];

const positions = pickset(possiblePositions);

const possiblePositionsWithoutStretching = possiblePositions.filter(
  p => !p.match(/_stretch$/)
);

const positionsWithoutStretching = pickset(possiblePositionsWithoutStretching);

const defaultMargins = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
};

const squares = shape({
  top: integer({ min: -100, max: 500 }),
  left: integer({ min: -100, max: 500 }),
  height: natural({ max: 600 }),
  width: natural({ max: 600 }),
  margins: {
    bottom: integer({ min: -10, max: 10 }),
    left: integer({ min: -10, max: 10 }),
    right: integer({ min: -10, max: 10 }),
    top: integer({ min: -10, max: 10 })
  }
});

const viewports = shape({
  height: natural({ min: 100, max: 1200 }),
  width: natural({ min: 100, max: 1200 })
});

describe("positioning", () => {
  describe("positionRelative", () => {
    it("produces a target that always has a one side honoring the margins of the anchor", () => {
      expect(
        (position, anchor, target) => {
          const positionedTarget = positionRelative({
            position,
            anchor,
            target
          });

          expect(
            positionedTarget,
            "to be margin away from one side of",
            anchor
          );
        },
        "to be valid for all",
        positions,
        squares,
        squares
      );
    });

    describe("when the target is not positioned with stretching", () => {
      it("does not change the size of the target", () => {
        expect(
          (position, anchor, target) => {
            const positionedTarget = positionRelative({
              position,
              anchor,
              target
            });

            expect(positionedTarget, "to have the same size as", target);
          },
          "to be valid for all",
          positionsWithoutStretching,
          squares,
          squares
        );
      });
    });

    const anchor = {
      top: 350,
      left: 400,
      height: 40,
      width: 100,
      margins: defaultMargins
    };

    const target = {
      top: 30,
      left: 50,
      height: 400,
      width: 200
    };

    describe("bottom", () => {
      it("places the target centered below the anchor", () => {
        expect(
          positionRelative({ position: "bottom", anchor, target }),
          "to satisfy",
          { top: 390, left: 350 }
        );
      });
    });

    describe("bottom_left", () => {
      it("places the target below the anchor aligned with the right edge", () => {
        expect(
          positionRelative({ position: "bottom_left", anchor, target }),
          "to satisfy",
          { top: 390, left: 300 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "bottom_left",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: 390, left: 270 }
          );
        });
      });
    });

    describe("bottom_right", () => {
      it("places the target below the anchor aligned with the left edge", () => {
        expect(
          positionRelative({ position: "bottom_right", anchor, target }),
          "to satisfy",
          { top: 390, left: 400 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "bottom_right",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: 390, left: 430 }
          );
        });
      });
    });

    describe("left", () => {
      it("places the target centered top the left of the anchor", () => {
        expect(
          positionRelative({ position: "left", anchor, target }),
          "to satisfy",
          { top: 170, left: 200 }
        );
      });
    });

    describe("left_top", () => {
      it("places the target left of the anchor aligned with the top", () => {
        expect(
          positionRelative({ position: "left_top", anchor, target }),
          "to satisfy",
          { top: 350, left: 200 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "left_top",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: 350, left: 200 }
          );
        });
      });
    });

    describe("left_bottom", () => {
      it("places the target left of the anchor aligned with the bottom", () => {
        expect(
          positionRelative({ position: "left_bottom", anchor, target }),
          "to satisfy",
          { top: -10, left: 200 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "left_bottom",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: -10, left: 200 }
          );
        });
      });
    });

    describe("right", () => {
      it("places the target centered top the right of the anchor", () => {
        expect(
          positionRelative({ position: "right", anchor, target }),
          "to satisfy",
          { top: 170, left: 500 }
        );
      });
    });

    describe("right_top", () => {
      it("places the target right of the anchor aligned with the top", () => {
        expect(
          positionRelative({ position: "right_top", anchor, target }),
          "to satisfy",
          { top: 350, left: 500 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "right_top",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: 350, left: 500 }
          );
        });
      });
    });

    describe("right_bottom", () => {
      it("places the target right of the anchor aligned with the bottom", () => {
        expect(
          positionRelative({ position: "right_bottom", anchor, target }),
          "to satisfy",
          { top: -10, left: 500 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "right_bottom",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: -10, left: 500 }
          );
        });
      });
    });

    describe("top", () => {
      it("places the target centered above the anchor", () => {
        expect(
          positionRelative({ position: "top", anchor, target }),
          "to satisfy",
          { top: -50, left: 350 }
        );
      });
    });

    describe("top_left", () => {
      it("places the target above the anchor aligned with the right edge", () => {
        expect(
          positionRelative({ position: "top_left", anchor, target }),
          "to satisfy",
          { top: -50, left: 300 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "top_left",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: -50, left: 270 }
          );
        });
      });
    });

    describe("top_right", () => {
      it("places the target above the anchor aligned with the left edge", () => {
        expect(
          positionRelative({ position: "top_right", anchor, target }),
          "to satisfy",
          { top: -50, left: 400 }
        );
      });

      describe("with a center point", () => {
        it("centers the point according to the anchor", () => {
          expect(
            positionRelative({
              position: "top_right",
              anchor,
              centerPoint: 20,
              target
            }),
            "to satisfy",
            { top: -50, left: 430 }
          );
        });
      });
    });
  });

  describe("getBestRelativePlacement", () => {
    const positionList = unique(
      positions,
      natural({ min: 1, max: possiblePositions.length })
    );

    it("produces a target that always has one side honoring the margins of the anchor", () => {
      expect(
        (positions, anchor, target, viewport) => {
          const positionedTarget = getBestRelativePlacement({
            positions,
            anchor,
            target,
            viewport
          });

          expect(positionedTarget, "to satisfy", {
            rect: expect
              .it("to be margin away from one side of", anchor)
              .or("to have been moved inside of viewport", viewport)
          });
        },
        "to be valid for all",
        positionList,
        squares,
        squares,
        viewports
      );
    });

    it("process a target with a position from the allowed list", () => {
      expect(
        (positions, anchor, target, viewport) => {
          const positionedTarget = getBestRelativePlacement({
            positions,
            anchor,
            target,
            viewport
          });

          expect(positions, "to contain", positionedTarget.position);
        },
        "to be valid for all",
        positionList,
        squares,
        squares,
        viewports
      );
    });

    describe("when the target is not positioned with stretching", () => {
      const positionList = unique(
        positionsWithoutStretching,
        natural({
          min: 1,
          max: possiblePositionsWithoutStretching.length
        })
      );

      it("does not change the size of the target", () => {
        expect(
          (positions, anchor, target, viewport) => {
            const positionedTarget = getBestRelativePlacement({
              positions,
              anchor,
              target,
              viewport
            });

            expect(positionedTarget.rect, "to have the same size as", target);
          },
          "to be valid for all",
          positionList,
          squares,
          squares,
          viewports
        );
      });
    });

    describe("on an anchor that is inside the viewport and has no margins", () => {
      const viewports = shape({
        height: natural({ min: 2, max: 5000 }),
        width: natural({ min: 2, max: 5000 })
      });

      const shapes = viewports
        .map(viewport => ({
          anchor: {
            top: integer({ min: -5000, max: 10000 }),
            left: integer({ min: -5000, max: 10000 }),
            height: integer({ min: 1, max: viewport.height - 1 }),
            width: integer({ min: 1, max: viewport.width - 1 }),
            margins: defaultMargins
          },
          target: {
            top: integer({ min: -5000, max: 10000 }),
            left: integer({ min: -5000, max: 10000 })
          },
          viewport
        }))
        .map(({ anchor, target, viewport }) => {
          const positionedAnchor = keepInViewport({ target: anchor, viewport });
          return {
            anchor: positionedAnchor,
            target: {
              ...target,
              height: integer({
                min: 1,
                max: Math.max(
                  positionedAnchor.top,
                  viewport.height - positionedAnchor.top - anchor.height
                )
              }),
              width: integer({
                min: 1,
                max: Math.max(
                  positionedAnchor.left,
                  viewport.width - positionedAnchor.left - anchor.width
                )
              })
            },
            viewport
          };
        })
        .map(({ viewport, anchor, target }) => ({
          anchor,
          target: keepInViewport({ target, viewport }),
          viewport
        }));

      describe("and can chose from all available positions", () => {
        it("the target is always positioned inside the viewport", () => {
          expect(
            (positions, { anchor, target, viewport }) => {
              const positionedTarget = getBestRelativePlacement({
                positions,
                anchor,
                target,
                viewport
              });

              expect(positionedTarget, "to satisfy", {
                rect: expect.it("to be inside viewport", viewport)
              });
            },
            "to be valid for all",
            shuffle(possiblePositions),
            shapes
          );
        });
      });
    });
  });
});
