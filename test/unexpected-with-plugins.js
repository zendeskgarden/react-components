// This is the module you get if you require test/expect
import unexpected from 'unexpected';
import unexpectedSinon from 'unexpected-sinon';
import unexpectedReact from 'unexpected-react/jest';
import unexpectedCheck from 'unexpected-check';

module.exports = unexpected
  .clone()
  .use(unexpectedSinon)
  .use(unexpectedReact)
  .use(unexpectedCheck);
