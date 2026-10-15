/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import SuccessIcon from '@zendeskgarden/svg-icons/src/check-circle-stroke.svg';
import ErrorIcon from '@zendeskgarden/svg-icons/src/exclamation-circle-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/exclamation-triangle-stroke.svg';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { VALIDATION } from '../../types/elements';
import { MessageIcon } from './MessageIcon';

const paths = (element: Element) =>
  [...element.querySelectorAll('path')].map(path => path.getAttribute('d'));

describe('MessageIcon', () => {
  it('renders validation styling', () => {
    VALIDATION.forEach(validation => {
      const { container } = render(<MessageIcon validation={validation} />);
      const icon = container.firstChild!;

      expect(icon.nodeName).toBe('svg');
      expect(icon).toHaveAttribute('role', 'img');
      expect(icon).toHaveAttribute('aria-hidden', 'false');
    });
  });

  it.each([
    ['error', ErrorIcon],
    ['success', SuccessIcon],
    ['warning', WarningIcon]
  ] as const)('renders the %s glyph', (validation, Icon) => {
    const { container } = render(<MessageIcon validation={validation} />);
    const { container: expected } = render(<Icon />);

    expect(container.firstElementChild).toHaveAttribute('viewBox', '0 0 20 20');
    expect(paths(container.firstElementChild!)).toEqual(paths(expected.firstElementChild!));
  });

  it('renders the icon at the 20px render size', () => {
    const { container } = render(<MessageIcon validation="error" />);

    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.space.md);
    expect(container.firstChild).toHaveStyleRule('height', DEFAULT_THEME.space.md);
  });
});
