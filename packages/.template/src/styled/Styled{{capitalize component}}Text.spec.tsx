/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Styled{{capitalize component}}Text } from './Styled{{capitalize component}}Text';

describe('Styled{{capitalize component}}Text', () => {
  it('renders default styling', () => {
    const { container } = render(<Styled{{capitalize component}}Text />);

    expect(container.firstChild).toHaveStyleRule('text-overflow', 'ellipsis');
  });
});
