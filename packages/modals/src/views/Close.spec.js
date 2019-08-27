/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import Close from './Close';
import { ModalContext } from '../utils/useModalContext';

const ContextClose = props => (
  <ModalContext.Provider value={{ getCloseProps: jest.fn() }}>
    <Close {...props} />
  </ModalContext.Provider>
);

describe('Close', () => {
  it('renders default close styling', () => {
    const { container } = render(<ContextClose />);

    expect(container.firstChild).toHaveClass('c-dialog__close');
  });

  describe('state', () => {
    it('renders focused styling correctly if provided', () => {
      const { container } = render(<ContextClose focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders focused styling if focused', () => {
      const { container } = render(<ContextClose />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('removes focused styling if blurred', () => {
      const { container } = render(<ContextClose />);

      fireEvent.focus(container.firstChild);
      fireEvent.blur(container.firstChild);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });

    it('renders hovered styling correctly if provided', () => {
      const { container } = render(<ContextClose hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });
});
