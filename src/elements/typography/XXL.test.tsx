/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { XXL } from './XXL';

describe('XXL', () => {
  it('applies bold styling if provided', () => {
    const { container } = render(<XXL isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = render(<XXL>Hello world</XXL>, {
      theme: RTL_THEME
    });

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
