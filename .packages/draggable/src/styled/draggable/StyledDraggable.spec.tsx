/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledDraggable } from './StyledDraggable';

describe('StyledDraggable', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledDraggable />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  describe('cursor', () => {
    it('applies grab cursor by default', () => {
      const { container } = render(<StyledDraggable />);

      expect(container.firstChild).toHaveStyle('cursor: grab');
    });

    it('applies grabbing cursor when grabbed', () => {
      const { container } = render(<StyledDraggable $isGrabbed />);

      expect(container.firstChild).toHaveStyle('cursor: grabbing');
    });

    it('applies default cursor when disabled', () => {
      const { container } = render(<StyledDraggable $isDisabled />);

      expect(container.firstChild).toHaveStyle('cursor: default');
    });

    it('applies default cursor when placeholder', () => {
      const { container } = render(<StyledDraggable $isPlaceholder />);

      expect(container.firstChild).toHaveStyle('cursor: default');
    });
  });
});
