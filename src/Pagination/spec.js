import React from "react";
import expect from "test/expect";
import sinon from "sinon";

import View from "../core/View";
import Pagination from "../Pagination";

describe("Pagination", () => {
  describe("prop validation", () => {
    describe("currentPage", () => {
      it("should throw if currentPage is not a number", () => {
        return expect(
          <Pagination currentPage="invalid" total={5} />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "The current page must be a whole number (integer)."
          );
        });
      });

      it("should throw if currentPage is greater than or equal to total", () => {
        return expect(
          <Pagination currentPage={5} total={5} />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "The current page must be less than the total number of pages."
          );
        });
      });
    });

    describe("total", () => {
      it("should throw if total is not a number", () => {
        return expect(
          <Pagination total="invalid" currentPage={4} />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "The total must be a whole number (integer)."
          );
        });
      });

      it("should throw if total is less than 1", () => {
        return expect(
          <Pagination currentPage={5} total={0} />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "The total must be greater than 0."
          );
        });
      });
    });

    describe("pagePadding", () => {
      it("should throw if pagePadding is not a number", () => {
        return expect(
          <Pagination total={9} currentPage={4} pagePadding="invalid" />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "Page padding must be a whole number (integer)."
          );
        });
      });

      it("should throw if pagePadding is less than 1", () => {
        return expect(
          <Pagination total={9} currentPage={4} pagePadding={0} />,
          "when deeply rendered"
        ).then(() => {
          expect(
            console.error.lastCall.args[0],
            "to contain",
            "Page padding must be greater than 0."
          );
        });
      });
    });
  });

  describe("page display logic", () => {
    it("renders current page with correct styling", () => {
      expect(
        <Pagination currentPage={2} total={8} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page">
            {2}
          </div>
          <div className="page is_current">
            {3}
          </div>
          <div className="page">
            {4}
          </div>
          <div className="page">
            {5}
          </div>
          <div className="page">
            {6}
          </div>
          <div className="page">
            {7}
          </div>
          <div className="page">
            {8}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("renders no gaps if total is less than 10", () => {
      expect(
        <Pagination currentPage={2} total={8} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page">
            {2}
          </div>
          <div className="page is_current">
            {3}
          </div>
          <div className="page">
            {4}
          </div>
          <div className="page">
            {5}
          </div>
          <div className="page">
            {6}
          </div>
          <div className="page">
            {7}
          </div>
          <div className="page">
            {8}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("renders only front gap if total is greater than 10 and currentPage is within front-range", () => {
      expect(
        <Pagination currentPage={4} total={100} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page">
            {2}
          </div>
          <div className="page">
            {3}
          </div>
          <div className="page">
            {4}
          </div>
          <div className="page is_current">
            {5}
          </div>
          <div className="page">
            {6}
          </div>
          <div className="page">
            {7}
          </div>
          <div className="page_gap" />
          <div className="page">
            {100}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("renders only back gap if total is greater than 10 and currentPage is within back-range", () => {
      expect(
        <Pagination currentPage={95} total={100} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page_gap" />
          <div className="page">
            {94}
          </div>
          <div className="page">
            {95}
          </div>
          <div className="page is_current">
            {96}
          </div>
          <div className="page">
            {97}
          </div>
          <div className="page">
            {98}
          </div>
          <div className="page">
            {99}
          </div>
          <div className="page">
            {100}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("renders both gaps otherwise", () => {
      expect(
        <Pagination currentPage={49} total={100} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page_gap" />
          <div className="page">
            {48}
          </div>
          <div className="page">
            {49}
          </div>
          <div className="page is_current">
            {50}
          </div>
          <div className="page">
            {51}
          </div>
          <div className="page">
            {52}
          </div>
          <div className="page_gap" />
          <div className="page">
            {100}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("hides previous page element when currentPage is first", () => {
      expect(
        <Pagination currentPage={0} total={9} />,
        "to deeply render as",
        <div>
          <div className="is_hidden">Previous Page</div>
          <div className="page is_current">
            {1}
          </div>
          <div className="page">
            {2}
          </div>
          <div className="page">
            {3}
          </div>
          <div className="page">
            {4}
          </div>
          <div className="page">
            {5}
          </div>
          <div className="page">
            {6}
          </div>
          <div className="page">
            {7}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("hides next page element when currentPage is last", () => {
      expect(
        <Pagination currentPage={8} total={9} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page">
            {1}
          </div>
          <div className="page">
            {2}
          </div>
          <div className="page">
            {3}
          </div>
          <div className="page">
            {4}
          </div>
          <div className="page">
            {5}
          </div>
          <div className="page">
            {6}
          </div>
          <div className="page">
            {7}
          </div>
          <div className="page">
            {8}
          </div>
          <div className="page is_current">
            {9}
          </div>
          <div className="is_hidden">Next Page</div>
        </div>
      );
    });
  });

  describe("pageLabelFormatter", () => {
    it("displays english page descriptions by default", () => {
      expect(
        <Pagination currentPage={95} total={100} />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page" aria-label="Page 1">
            {1}
          </div>
          <div className="page_gap" />
          <div className="page" aria-label="Page 94">
            {94}
          </div>
          <div className="page" aria-label="Page 95">
            {95}
          </div>
          <div className="page is_current" aria-label="Page 96">
            {96}
          </div>
          <div className="page" aria-label="Page 97">
            {97}
          </div>
          <div className="page" aria-label="Page 98">
            {98}
          </div>
          <div className="page" aria-label="Page 99">
            {99}
          </div>
          <div className="page" aria-label="Page 100">
            {100}
          </div>
          <div>Next Page</div>
        </div>
      );
    });

    it("displays custom descriptions when formatter is provided", () => {
      expect(
        <Pagination
          currentPage={95}
          total={100}
          pageLabelFormatter={page => `${page} custom`}
        />,
        "to deeply render as",
        <div>
          <div>Previous Page</div>
          <div className="page" aria-label="1 custom">
            {1}
          </div>
          <div className="page_gap" />
          <div className="page" aria-label="94 custom">
            {94}
          </div>
          <div className="page" aria-label="95 custom">
            {95}
          </div>
          <div className="page is_current" aria-label="96 custom">
            {96}
          </div>
          <div className="page" aria-label="97 custom">
            {97}
          </div>
          <div className="page" aria-label="98 custom">
            {98}
          </div>
          <div className="page" aria-label="99 custom">
            {99}
          </div>
          <div className="page" aria-label="100 custom">
            {100}
          </div>
          <div>Next Page</div>
        </div>
      );
    });
  });

  describe("when clicking on a page", () => {
    it("emits an onPageSelected event", () => {
      const onPageSelected = sinon.spy();

      return expect(
        <Pagination
          currentPage={49}
          total={100}
          onPageSelected={onPageSelected}
        />,
        "when deeply rendered",
        "with event",
        "click",
        "on",
        <div className="page">
          {48}
        </div>
      ).then(() => {
        expect(onPageSelected, "to have calls satisfying", () =>
          onPageSelected(47)
        );
      });
    });
  });

  describe("when given a className", () => {
    it("renders Pagination with the className applied", () => {
      expect(
        <Pagination currentPage={2} total={8} className="test-class" />,
        "to render as",
        <View className="pagination test-class" />
      );
    });
  });
});
