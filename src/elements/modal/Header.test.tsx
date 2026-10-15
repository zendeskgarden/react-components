/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Close } from './Close';
import { Header } from './Header';
import { Modal } from './Modal';

describe('Header', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

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
    render(
      <Modal>
        <Header>Header</Header>
        <Close />
      </Modal>,
      {
        theme: RTL_THEME
      }
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

  describe('colors', () => {
    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the %s mode default and danger colors', (_mode, theme) => {
      const { getByText } = render(
        <Modal>
          <Header>default</Header>
          <Header isDanger>danger</Header>
        </Modal>,
        { theme }
      );

      expect(getByText('default')).toHaveStyleRule(
        'color',
        getColor({ theme, variable: 'foreground.default' })
      );
      expect(getByText('danger')).toHaveStyleRule(
        'color',
        getColor({ theme, variable: 'foreground.danger' })
      );
    });
  });

  describe('danger icon', () => {
    it('is absent by default', () => {
      const { getByText } = render(
        <Modal>
          <Header>Header</Header>
        </Modal>
      );

      expect(getByText('Header').querySelector('svg')).toBeNull();
    });

    it('is positioned at the start edge', () => {
      const { getByText } = render(
        <Modal>
          <Header isDanger>Header</Header>
        </Modal>
      );
      const icon = getByText('Header').querySelector('svg');

      expect(icon).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 4}px`);
      expect(icon).not.toHaveStyleRule('right');
    });

    it('is positioned at the start edge in rtl mode', () => {
      const { getByText } = render(
        <Modal>
          <Header isDanger>Header</Header>
        </Modal>,
        { theme: RTL_THEME }
      );
      const icon = getByText('Header').querySelector('svg');

      expect(icon).toHaveStyleRule('right', `${DEFAULT_THEME.space.base * 4}px`);
      expect(icon).not.toHaveStyleRule('left');
    });
  });
});
