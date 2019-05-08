/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import Ellipsis from './Ellipsis';

const Example = props => <Ellipsis {...props}>Hello world</Ellipsis>;

describe('Ellipsis', () => {
  it('applies title by default', () => {
    const { container } = render(<Example />);

    expect(container.firstChild).toHaveAttribute('title', 'Hello world');
  });

  it('overrides title attribute if provided', () => {
    const { container } = render(<Example title="Custom title" />);

    expect(container.firstChild).toHaveAttribute('title', 'Custom title');
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Example />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
