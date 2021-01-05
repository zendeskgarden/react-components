/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import useGridContext from './useGridContext';

describe('useGridContext', () => {
  it('contains default gutter sizing', () => {
    const GridContextConsumer = () => {
      const { gutters } = useGridContext();

      return <div data-gutters={gutters}>test</div>;
    };
    const { container } = render(<GridContextConsumer />);

    expect(container.firstChild).toHaveAttribute('data-gutters', 'md');
  });
});
