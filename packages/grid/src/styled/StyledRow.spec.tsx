/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledRow } from './StyledRow';

describe('StyledRow', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledRow />);

    expect(container.firstChild).toHaveClass('row');
  });

  describe('Align Items', () => {
    it('renders start alignment if provided', () => {
      const { container } = render(<StyledRow alignItems="start" />);

      expect(container.firstChild).toHaveClass('align-items-start');
    });

    it('renders center alignment if provided', () => {
      const { container } = render(<StyledRow alignItems="center" />);

      expect(container.firstChild).toHaveClass('align-items-center');
    });

    it('renders end alignment if provided', () => {
      const { container } = render(<StyledRow alignItems="end" />);

      expect(container.firstChild).toHaveClass('align-items-end');
    });
  });

  describe('Justify Content', () => {
    it('renders start justify content if provided', () => {
      const { container } = render(<StyledRow justifyContent="start" />);

      expect(container.firstChild).toHaveClass('justify-content-start');
    });

    it('renders center justify content if provided', () => {
      const { container } = render(<StyledRow justifyContent="center" />);

      expect(container.firstChild).toHaveClass('justify-content-center');
    });

    it('renders end justify content if provided', () => {
      const { container } = render(<StyledRow justifyContent="end" />);

      expect(container.firstChild).toHaveClass('justify-content-end');
    });

    it('renders around justify content if provided', () => {
      const { container } = render(<StyledRow justifyContent="around" />);

      expect(container.firstChild).toHaveClass('justify-content-around');
    });

    it('renders between justify content if provided', () => {
      const { container } = render(<StyledRow justifyContent="between" />);

      expect(container.firstChild).toHaveClass('justify-content-between');
    });
  });
});
