/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Header from './Header';
import { ModalContext } from '../utils/useModalContext';

const ContextHeader = props => (
  <ModalContext.Provider value={{ getTitleProps: jest.fn() }}>
    <Header {...props} />
  </ModalContext.Provider>
);

describe('Header', () => {
  it('renders default styling', () => {
    const { container } = render(<ContextHeader />);

    expect(container.firstChild).toHaveClass('c-dialog__header');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<ContextHeader danger />);

    expect(container.firstChild).toHaveClass('c-dialog__header--danger');
  });
});
