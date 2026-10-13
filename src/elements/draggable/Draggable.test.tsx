/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Draggable } from './Draggable';

describe('Draggable', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Draggable ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Draggable />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders with custom tag', () => {
    const { container } = render(<Draggable tag="section" />);

    expect(container.firstChild!.nodeName).toBe('SECTION');
  });

  it('renders aria-disabled="true" if disabled', () => {
    const { container } = render(<Draggable isDisabled />);

    expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets the Garden attributes after the props', () => {
    const { container } = render(<Draggable data-garden-id="custom" data-garden-version="0" />);

    expect(container.firstChild).toHaveAttribute('data-garden-id', 'draggable');
    expect(container.firstChild).not.toHaveAttribute('data-garden-version', '0');
  });

  it('applies the placeholder background', () => {
    const { container } = render(<Draggable isPlaceholder />);

    expect(container.firstChild).toHaveStyle(
      `background-color: ${getColor({ variable: 'background.disabled', theme: DEFAULT_THEME })}`
    );
  });
});
