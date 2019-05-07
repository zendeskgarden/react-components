/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import withTheme from './withTheme';

const Example = ({ theme: { rtl } }) => {
  return <div data-rtl={rtl ? rtl : false}>test</div>;
};

const ThemedExample = withTheme(Example);

describe('withTheme', () => {
  it('should apply theme prop to component with correct value in LTR mode', () => {
    const { container } = render(<ThemedExample />);

    expect(container.firstChild).toHaveAttribute('data-rtl', 'false');
  });

  it('should apply theme prop to component with correct value in RTL mode', () => {
    const { container } = renderRtl(<ThemedExample />);

    expect(container.firstChild).toHaveAttribute('data-rtl', 'true');
  });
});
