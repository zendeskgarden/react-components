import sinon from "sinon";

import unexpectedReact from "unexpected-react";
import "react";

beforeEach(() => {
  sinon.stub(console, "error");
  sinon.stub(console, "warn");
});

afterEach(() => {
  unexpectedReact.clearAll();
  console.error.restore();
  console.warn.restore();
});
