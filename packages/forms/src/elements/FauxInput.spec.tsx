/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import FauxInput from './FauxInput';

describe('FauxInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild!.nodeName).toBe('DIV');
    expect(container.firstElementChild!.getAttribute('tabIndex')).toBe('0');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<FauxInput ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders expected disabled tabindex', () => {
    const { container } = render(<FauxInput disabled />);

    expect(container.firstElementChild!.getAttribute('tabIndex')).toBeNull();
  });

  it('applies focused styling on focus event', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');

    fireEvent.focus(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');
  });

  it('removes focused styling on blur event', () => {
    const { container } = render(<FauxInput />);

    fireEvent.focus(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'true');

    fireEvent.blur(container.firstElementChild!);

    expect(container.firstElementChild).toHaveAttribute('data-test-is-focused', 'false');
  });
});
