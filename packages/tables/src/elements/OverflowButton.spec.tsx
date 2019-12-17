/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { OverflowButton } from './OverflowButton';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

describe('OverflowButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<OverflowButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstElementChild!);
      expect(container.firstElementChild).toHaveStyleRule(
        'color',
        getColor('neutralHue', 800, DEFAULT_THEME)
      );
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstElementChild!);
      fireEvent.blur(container.firstElementChild!);
      expect(container.firstElementChild).toHaveStyleRule(
        'color',
        getColor('neutralHue', 600, DEFAULT_THEME)
      );
    });
  });
});
