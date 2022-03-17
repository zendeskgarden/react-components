/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';

import { Modal } from './Modal';
import { Header } from './Header';
import { Close } from './Close';

describe('Header', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <Header ref={ref} data-test-id="header">
          Header content
        </Header>
      </Modal>
    );

    expect(getByTestId('header')).toBe(ref.current);
  });

  it('has horizontal padding when Close is present', () => {
    render(
      <Modal>
        <Header>Header</Header>
        <Close />
      </Modal>
    );

    expect(screen.getByText('Header')).toHaveStyleRule('padding-right', '74px');
  });

  it('does not have horizontal padding when Close is absent', () => {
    render(
      <Modal>
        <Header>Header</Header>
      </Modal>
    );

    expect(screen.getByText('Header')).not.toHaveStyleRule('padding-right');
  });
});
