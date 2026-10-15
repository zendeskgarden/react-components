/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import XSmallIcon from '@zendeskgarden/svg-icons/src/x-small.svg';
import XIcon from '@zendeskgarden/svg-icons/src/x.svg';
import { createRef } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { File } from './File';

const paths = (element: Element) =>
  [...element.querySelectorAll('path')].map(path => path.getAttribute('d'));

describe('File.Close', () => {
  const user = userEvent.setup();

  it('renders the expected HTML element', () => {
    const { container } = render(<File.Close />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders with aria-label', () => {
    const { container } = render(<File.Close />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Close');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<File.Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('composes mousedown event handler', async () => {
    const mouseDown = vi.fn();
    const { getByTestId } = render(<File.Close data-test-id="close" onMouseDown={mouseDown} />);

    await user.click(getByTestId('close'));

    expect(mouseDown).toHaveBeenCalledTimes(1);
  });

  it.each([
    [false, XIcon, DEFAULT_THEME.space.md],
    [true, XSmallIcon, DEFAULT_THEME.iconSizes.md]
  ] as const)('renders the icon with isCompact %s', (isCompact, Icon, size) => {
    const { getByTestId } = render(
      <File isCompact={isCompact}>
        <File.Close data-test-id="close" />
      </File>
    );
    const { container: expected } = render(<Icon />);
    const close = getByTestId('close');

    expect(paths(close.querySelector('svg')!)).toEqual(paths(expected.firstElementChild!));
    expect(close).toHaveStyleRule('width', size, { modifier: '& > svg' });
    expect(close).toHaveStyleRule('height', size, { modifier: '& > svg' });
  });
});
