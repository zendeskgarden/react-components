// This is the module you get if you require test/expect
import unexpected from "unexpected";
import unexpectedSinon from "unexpected-sinon";
import unexpectedReact from "unexpected-react/jest";
import unexpectedCheck from "unexpected-check";
import unexpectedDom from "unexpected-dom";

module.exports = unexpected
  .clone()
  .use(unexpectedDom)
  .use(unexpectedSinon)
  .use(unexpectedReact)
  .use(unexpectedCheck)
  .addAssertion("<DOMNode> to have html <string>", (expect, subject, value) => {
    expect(
      subject,
      "to satisfy",
      value.replace(/^\s+/gm, "").replace(/\s*\n/gm, "")
    );
  })
  .addAssertion(
    "<RenderedReactElement> to have rendered menu <string>",
    (expect, subject, value) => {
      expect.errorMode = "bubble";
      if (!subject.props.testId) {
        expect.fail("Please specify a testId on the menu");
      }

      expect(
        document.body,
        "queried for first",
        `[data-test-id=${subject.props.testId}-popup]`,
        "to have html",
        value
      );
    }
  );
