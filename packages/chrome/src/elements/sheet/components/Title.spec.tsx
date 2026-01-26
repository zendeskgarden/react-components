/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, screen } from 'garden-test-utils';
import React from 'react';

import { Title } from './Title';

describe('Sheet.Title', () => {
  const titleText = 'Sheet.Title';

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Title ref={ref}>{titleText}</Title>);

    expect(screen.getByText(titleText)).toBe(ref.current);
  });
});
