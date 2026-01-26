/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Close } from './Close';

describe('Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('sets default aria-label', () => {
    const { container } = render(<Close />);

    expect(container.firstElementChild!.getAttribute('aria-label')).toBe('Close');
  });

  it('sets aria-label as prop', () => {
    const { container } = render(<Close aria-label="Foo" />);

    expect(container.firstElementChild!.getAttribute('aria-label')).toBe('Foo');
  });
});
