/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import Span from './Span';

describe('Span', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const { container } = render(<Span ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Span />);

    expect(container.firstChild!.nodeName).toBe('SPAN');
  });

  it('applies bold styling if provided', () => {
    const { container } = render(<Span isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('applies expected styling with RTL locale', () => {
    const { container } = renderRtl(<Span />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
