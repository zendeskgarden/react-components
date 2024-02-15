/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl, screen } from 'garden-test-utils';

import { DrawerModal } from './DrawerModal';

describe('DrawerModal.Header', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByText } = render(
      <DrawerModal isOpen>
        <DrawerModal.Header ref={ref}>title</DrawerModal.Header>
      </DrawerModal>
    );

    expect(getByText('title')).toBe(ref.current);
  });

  it('has horizontal padding when DrawerModal.Close is present', () => {
    render(
      <DrawerModal isOpen>
        <DrawerModal.Header>Header</DrawerModal.Header>
        <DrawerModal.Close />
      </DrawerModal>
    );

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-right',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });

  it('renders horizontal padding in rtl mode when DrawerModal.Close is present', () => {
    renderRtl(
      <DrawerModal isOpen>
        <DrawerModal.Header>Header</DrawerModal.Header>
        <DrawerModal.Close />
      </DrawerModal>
    );

    expect(screen.getByText('Header')).toHaveStyleRule(
      'padding-left',
      `${DEFAULT_THEME.space.base * 14}px`
    );
  });

  it('does not have horizontal padding when DrawerModal.Close is absent', () => {
    render(
      <DrawerModal isOpen>
        <DrawerModal.Header>Header</DrawerModal.Header>
      </DrawerModal>
    );

    expect(screen.getByText('Header')).not.toHaveStyleRule('padding-right');
  });

  it('renders as a <div> by default', () => {
    render(
      <DrawerModal isOpen>
        <DrawerModal.Header>Header</DrawerModal.Header>
      </DrawerModal>
    );

    expect(screen.getByText('Header').tagName).toBe('DIV');
  });

  it('renders as a custom element, when passed a tag', () => {
    render(
      <DrawerModal isOpen>
        <DrawerModal.Header tag="h1">Header</DrawerModal.Header>
      </DrawerModal>
    );

    expect(screen.getByText('Header').tagName).not.toBe('DIV');
  });
});
