/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import ThemeProvider from './ThemeProvider';

describe('ThemeProvider', () => {
  it('renders a :focus-visible scoping <div> by default', () => {
    const { container } = render(<ThemeProvider />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('only renders children when focusVisibleRef is null', () => {
    const { container } = render(
      <ThemeProvider focusVisibleRef={null}>
        <button />
      </ThemeProvider>
    );

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });
});
