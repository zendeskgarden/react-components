/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledTextMediaInput } from './StyledTextMediaInput';

describe('StyledTextMediaInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTextMediaInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
  });

  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextMediaInput />);

    expect(container.firstChild).toHaveStyleRule('border', 'none');
  });

  it('renders expected disabled styling', () => {
    const { container } = render(<StyledTextMediaInput disabled />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.foreground);
  });
});
