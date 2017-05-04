import React from 'react';
import expect from 'test/expect';

import FormHint from '.';

describe('FormHint', () => {
  it('renders a standalone form hint', () => {
    expect(
      <FormHint>This is a hint</FormHint>,
      'to render as',
      <small className="hint">This is a hint</small>
    );
  });
});
