/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledFileClose } from './StyledFileClose';

describe('StyledFileClose', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledFileClose />);

    expect(container.firstChild!.nodeName).toBe('DIV');
    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[800]);
  });
});
