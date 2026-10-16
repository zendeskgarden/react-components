/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { userEvent } from '@testing-library/user-event';
import TrashIcon from '@zendeskgarden/svg-icons/src/trash-stroke.svg';
import { createRef } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { File } from './File';

const paths = (element: Element) =>
  [...element.querySelectorAll('path')].map(path => path.getAttribute('d'));

describe('File.Delete', () => {
  const user = userEvent.setup();

  it('renders the expected HTML element', () => {
    const { container } = render(<File.Delete />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders with aria-label', () => {
    const { container } = render(<File.Delete />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Delete');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<File.Delete ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('composes mousedown event handler', async () => {
    const mouseDown = vi.fn();
    const { getByTestId } = render(<File.Delete data-test-id="delete" onMouseDown={mouseDown} />);

    await user.click(getByTestId('delete'));

    expect(mouseDown).toHaveBeenCalledTimes(1);
  });

  it.each([
    [false, DEFAULT_THEME.space.md],
    [true, DEFAULT_THEME.iconSizes.md]
  ] as const)('renders the icon with isCompact %s', (isCompact, size) => {
    const { getByTestId } = render(
      <File isCompact={isCompact}>
        <File.Delete data-test-id="delete" />
      </File>
    );
    const { container: expected } = render(<TrashIcon />);
    const remove = getByTestId('delete');

    expect(paths(remove.querySelector('svg')!)).toEqual(paths(expected.firstElementChild!));
    expect(remove).toHaveStyleRule('width', size, { modifier: '& > svg' });
    expect(remove).toHaveStyleRule('height', size, { modifier: '& > svg' });
  });
});
