/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { ChevronButton } from './ChevronButton';

describe('ChevronButton', () => {
  it('renders a chevron SVG icon', () => {
    const { container } = render(<ChevronButton />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('rotates icon if prop is provided', () => {
    const { container } = render(<ChevronButton isRotated />);

    expect(container.querySelector('svg')).toHaveStyleRule('transform', 'rotate(+180deg)');
  });

  it('renders pill styling by default, unless `isPill` is false', () => {
    const { container, rerender } = render(<ChevronButton />);

    expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.full);

    rerender(<ChevronButton isPill={false} />);

    expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.md);
  });
});
