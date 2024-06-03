/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledCode } from './StyledCode';

describe('StyledCode', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCode />);

    expect(container.firstChild!.nodeName).toBe('CODE');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledCode />);

    expect(container.firstChild).toHaveStyleRule('font-family', /monospace/u);
  });

  it('renders anchor-inherited color', () => {
    const { getByTestId } = render(
      <a href="test">
        <StyledCode data-test-id="test" />
      </a>
    );

    expect(getByTestId('test')).toHaveStyleRule('color', 'inherit', { modifier: 'a &' });
  });

  describe('size', () => {
    it('renders inherited size', () => {
      const { container } = render(<StyledCode />);

      expect(container.firstChild).not.toHaveStyleRule('font-size', 'inherit');
    });

    it('renders small size', () => {
      const { container } = render(<StyledCode size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium size', () => {
      const { container } = render(<StyledCode size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large size', () => {
      const { container } = render(<StyledCode size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });

  describe('hue', () => {
    type Args = [
      string | undefined,
      'dark' | 'light',
      {
        color: string;
        bgColor: string;
      }
    ];

    it.each<Args>([
      // light mode
      ['grey', 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      ['green', 'light', { color: PALETTE.green[900], bgColor: PALETTE.green[100] }],
      ['red', 'light', { color: PALETTE.red[900], bgColor: PALETTE.red[100] }],
      ['yellow', 'light', { color: PALETTE.yellow[900], bgColor: PALETTE.yellow[100] }],
      // dark mode
      ['grey', 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }],
      ['green', 'dark', { color: PALETTE.green[300], bgColor: PALETTE.green[1000] }],
      ['red', 'dark', { color: PALETTE.red[300], bgColor: PALETTE.red[1000] }],
      ['yellow', 'dark', { color: PALETTE.yellow[300], bgColor: PALETTE.yellow[1000] }]
    ])('renders with a "%s" hue in "%s" mode', (hue, mode, { color, bgColor }) => {
      const { container } = getRenderFn(mode)(<StyledCode hue={hue} />);

      expect(container.firstChild).toHaveStyleRule('color', color);
      expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
    });

    it.each<Args>([
      ['azure', 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      [undefined, 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      ['azure', 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }],
      [undefined, 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }]
    ])(
      'outputs the grey hue color combination for an unsupported "%s" hue in "%s" mode',
      (hue, mode, { color, bgColor }) => {
        const { container } = getRenderFn(mode)(<StyledCode hue={hue} />);

        expect(container.firstChild).toHaveStyleRule('color', color);
        expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
      }
    );
  });
});
