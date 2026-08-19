/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { math } from 'polished';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Grid } from './Grid';

describe('Grid', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Grid />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders medium gutters by default', () => {
    const { container } = render(<Grid />);
    const padding = math(`${DEFAULT_THEME.space.md} / 2`);

    expect(container.firstChild).toHaveStyleRule('padding-right', padding);
    expect(container.firstChild).toHaveStyleRule('padding-left', padding);
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Grid ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
