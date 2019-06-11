/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Notification from './Notification';

describe('Notification', () => {
  describe('validation', () => {
    it('should render success styling correctly', () => {
      const { container } = render(<Notification type="success" />);

      expect(container.firstChild).toHaveClass('c-callout--success');
    });

    it('should render warning styling correctly', () => {
      const { container } = render(<Notification type="warning" />);

      expect(container.firstChild).toHaveClass('c-callout--warning');
    });

    it('should render error styling correctly', () => {
      const { container } = render(<Notification type="error" />);

      expect(container.firstChild).toHaveClass('c-callout--error');
    });

    it('should render info styling correctly', () => {
      const { container } = render(<Notification type="info" />);

      expect(container.firstChild).toHaveClass('c-callout--info');
    });
  });
});
