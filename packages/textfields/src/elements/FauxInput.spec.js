/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import FauxInput from './FauxInput';

describe('FauxInput', () => {
  const TEXT_FIELD_ID = 'test';

  const BasicExample = () => (
    <FauxInput data-test-id="input" id={TEXT_FIELD_ID}>
      <button tabIndex={0} data-test-id="inner-content">
        focusable content
      </button>
    </FauxInput>
  );

  it('does not apply focused styling by default', () => {
    const { getByTestId } = render(<BasicExample />);

    expect(getByTestId('input')).not.toHaveClass('is-focused');
  });

  it('applies focused styling when content is focused', () => {
    const { getByTestId } = render(<BasicExample />);

    fireEvent.focus(getByTestId('inner-content'));

    expect(getByTestId('input')).toHaveClass('is-focused');
  });

  it('removes focused styling when content is blured', () => {
    const { getByTestId } = render(<BasicExample />);
    const innerContent = getByTestId('inner-content');

    fireEvent.focus(innerContent);
    fireEvent.blur(innerContent);

    expect(getByTestId('input')).not.toHaveClass('is-focused');
  });
});
