/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';
import { render, renderRtl } from 'garden-test-utils';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(<FileUpload data-test-id="file-upload" ref={ref} />);

    expect(getByTestId('file-upload')).toBe(ref.current);
  });

  it('renders correct direction when LTR', () => {
    const { container } = render(<FileUpload />);

    expect(container.firstChild).toHaveStyleRule('direction', 'ltr');
  });

  it('renders correct direction when RTL', () => {
    const { container } = renderRtl(<FileUpload />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders correct styling when isDragging is active', () => {
    const { container } = render(<FileUpload isDragging />);

    const activeColor = getColorV8('primaryHue', 800, DEFAULT_THEME);
    const activeBackgroundColor = rgba(getColorV8('primaryHue', 600, DEFAULT_THEME) as string, 0.2);

    expect(container.firstChild).toHaveStyleRule('color', activeColor);
    expect(container.firstChild).toHaveStyleRule('background-color', activeBackgroundColor);
    expect(container.firstChild).toHaveStyleRule('border-color', activeColor);
  });
});
