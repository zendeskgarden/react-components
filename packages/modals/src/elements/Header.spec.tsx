/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl, screen } from 'garden-test-utils';

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

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-right',
      `${DEFAULT_THEME.space.base * 18.5}px`
    );
  });

  it('renders horizontal padding in rtl mode when Close is present', () => {
    renderRtl(
      <Modal>
        <Header>Header</Header>
        <Close />
      </Modal>
    );

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-left',
      `${DEFAULT_THEME.space.base * 18.5}px`
    );
  });

  it('does not have horizontal padding when Close is absent', () => {
    render(
      <Modal>
        <Header>Header</Header>
      </Modal>
    );

    expect(screen.getByText('Header')).not.toHaveStyleRule('padding-right');
  });

  it('renders as a <div> by default', () => {
    const { getByTestId } = render(
      <Modal>
        <Header data-test-id="header">Header content</Header>
      </Modal>
    );

    expect(getByTestId('header').tagName).toBe('DIV');
  });

  it('renders as a custom element, when passed a tag', () => {
    const { getByTestId } = render(
      <Modal>
        <Header tag="h1" data-test-id="header">
          Header content
        </Header>
      </Modal>
    );

    expect(getByTestId('header').tagName).not.toBe('DIV');
  });
});
