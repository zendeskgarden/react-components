/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import SplitButton from './SplitButton';
import Button from './Button';
import ChevronButton from './ChevronButton';

describe('SplitButton', () => {
  it('renders child buttons as expected', () => {
    const { getByTestId } = render(
      <SplitButton>
        <Button data-test-id="button">Test</Button>
        <ChevronButton data-test-id="chevron" />
      </SplitButton>
    );

    expect(getByTestId('button')).not.toBeNull();
    expect(getByTestId('chevron')).not.toBeNull();
  });
});
