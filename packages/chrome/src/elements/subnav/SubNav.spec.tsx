/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Chrome } from '../Chrome';
import { SubNav } from './SubNav';
import { getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('SubNav', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<SubNav ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  /* eslint-disable-next-line jest/no-disabled-tests */
  it.skip('renders dark hue styling', () => {
    const hue = 'red';
    const { container } = render(
      <Chrome hue={hue}>
        <SubNav />
      </Chrome>
    );

    expect(container.firstChild!.firstChild).toHaveStyle(`
      background-color: ${getColorV8(hue, 700, DEFAULT_THEME)};
      color: ${DEFAULT_THEME.colors.background};
    `);
  });

  it('renders light hue styling', () => {
    const hue = '#CECEF6';
    const { container } = render(
      <Chrome hue={hue}>
        <SubNav />
      </Chrome>
    );

    expect(container.firstChild!.firstChild).toHaveStyle(`
      background-color: ${getColorV8(hue, 500, DEFAULT_THEME)};
      color: ${DEFAULT_THEME.colors.foreground};
    `);
  });
});
