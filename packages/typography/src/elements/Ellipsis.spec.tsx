/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { Ellipsis } from './Ellipsis';

describe('Ellipsis', () => {
  it('applies title by default', () => {
    const { container } = render(<Ellipsis>Hello world</Ellipsis>);

    expect(container.firstChild).toHaveAttribute('title', 'Hello world');
  });

  it('overrides title attribute if provided', () => {
    const { container } = render(<Ellipsis title="Custom title">Hello world</Ellipsis>);

    expect(container.firstChild).toHaveAttribute('title', 'Custom title');
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Ellipsis>Hello world</Ellipsis>);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
