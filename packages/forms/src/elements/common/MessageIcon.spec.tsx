/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { VALIDATION } from '../../types';
import { MessageIcon } from './MessageIcon';

describe('MessageIcon', () => {
  it('renders validation styling', () => {
    VALIDATION.forEach(validation => {
      const { container } = render(<MessageIcon validation={validation} />);
      const icon = container.firstChild!;

      expect(icon.nodeName).toBe('svg');
      expect(icon).toHaveAttribute('role', 'img');
      expect(icon).not.toHaveAttribute('aria-hidden');
    });
  });
});
