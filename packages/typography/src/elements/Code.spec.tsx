/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Code } from './Code';
import { ICodeProps } from 'packages/typography/src/types';

describe('Code', () => {
  it('renders the expected element', () => {
    const { container } = render(<Code />);

    expect(container.firstChild!.nodeName).toBe('CODE');
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Code />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('applies monospace font styling', () => {
    const { container } = render(<Code />);

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      expect.stringContaining('monospace')
    );
  });

  it('renders anchor-inherited color', () => {
    const { getByTestId } = render(
      <a href="test">
        <Code data-test-id="test" />
      </a>
    );

    expect(getByTestId('test')).toHaveStyleRule('color', 'inherit', { modifier: 'a &' });
  });

  describe('size', () => {
    it('renders inherited size', () => {
      const { container } = render(<Code />);

      expect(container.firstChild).not.toHaveStyleRule('font-size', 'inherit');
    });

    it('renders small styling if provided', () => {
      const { container } = render(<Code size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<Code size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Code size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });

  describe('hue', () => {
    it.each<
      [
        ICodeProps['hue'],
        'dark' | 'light',
        {
          color: string;
          bgColor: string;
        }
      ]
    >([
      // light mode
      ['grey', 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      ['green', 'light', { color: PALETTE.green[900], bgColor: PALETTE.green[200] }],
      ['red', 'light', { color: PALETTE.red[900], bgColor: PALETTE.red[200] }],
      ['yellow', 'light', { color: PALETTE.yellow[900], bgColor: PALETTE.yellow[200] }],
      // dark mode
      ['grey', 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }],
      ['green', 'dark', { color: PALETTE.green[300], bgColor: PALETTE.green[900] }],
      ['red', 'dark', { color: PALETTE.red[300], bgColor: PALETTE.red[900] }],
      ['yellow', 'dark', { color: PALETTE.yellow[300], bgColor: PALETTE.yellow[900] }]
    ])('renders with a "%s" hue in "%s" mode', (hue, mode, { color, bgColor }) => {
      const { container } = getRenderFn(mode)(<Code hue={hue} />);

      expect(container.firstChild).toHaveStyleRule('color', color);
      expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
    });

    it.each<
      [
        string | undefined,
        'dark' | 'light',
        {
          color: string;
          bgColor: string;
        }
      ]
    >([
      ['azure', 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      [undefined, 'light', { color: PALETTE.grey[900], bgColor: PALETTE.grey[200] }],
      ['azure', 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }],
      [undefined, 'dark', { color: PALETTE.grey[300], bgColor: PALETTE.grey[900] }]
    ])(
      'outputs the grey hue color combination for an unsupported "%s" hue in "%s" mode',
      (hue, mode, { color, bgColor }) => {
        const { container } = getRenderFn(mode)(<Code hue={hue as any} />);

        expect(container.firstChild).toHaveStyleRule('color', color);
        expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
      }
    );
  });
});
