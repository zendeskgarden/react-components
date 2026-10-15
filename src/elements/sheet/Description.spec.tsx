/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, screen } from 'garden-test-utils';
import React from 'react';

import { Description } from './Description';

describe('Sheet.Description', () => {
  const descriptionText = 'Sheet.Description';

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Description ref={ref}>{descriptionText}</Description>);

    expect(screen.getByText(descriptionText)).toBe(ref.current);
  });
});
