/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import styled, { ThemeProps, DefaultTheme, CSSObject } from 'styled-components';
import { focusStyles } from './focusStyles';
import { Hue } from '../types';
import DEFAULT_THEME from '../elements/theme';
import PALETTE_V8 from '../elements/palette/v8';

interface IStyledDivProps extends ThemeProps<DefaultTheme> {
  condition?: boolean;
  inset?: boolean;
  hue?: Hue;
  selector?: string;
  shade?: number;
  shadowWidth?: 'sm' | 'md';
  spacerHue?: Hue;
  spacerShade?: number;
  spacerWidth?: null | 'xs' | 'sm';
  styles?: CSSObject;
}

const StyledDiv = styled.div<IStyledDivProps>`
  ${props => focusStyles(props)}
`;

describe('focusStyles', () => {
  it('renders with expected defaults', () => {
    const { container } = render(<StyledDiv />);
    const expected = `${DEFAULT_THEME.shadowWidths.md} ${PALETTE_V8.blue[600]}`;

    expect(container.firstChild).toHaveStyleRule('outline', 'none', { modifier: '&:focus' });
    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.stringContaining(expected), {
      modifier: '&:focus-visible'
    });
    expect(container.firstChild).toHaveStyleRule(
      'outline',
      expect.stringContaining('2px solid transparent'),
      {
        modifier: '&:focus-visible'
      }
    );
    expect(container.firstChild).toHaveStyleRule(
      'outline-offset',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.xs}`),
      {
        modifier: '&:focus-visible'
      }
    );
  });

  it('renders inset as expected', () => {
    const { container } = render(<StyledDiv inset />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
      modifier: '&:focus-visible'
    });
  });

  it('renders color as expected', () => {
    const { container } = render(<StyledDiv hue="red" shade={400} />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.md} ${PALETTE_V8.red[400]}`),
      {
        modifier: '&:focus-visible'
      }
    );
  });

  it('renders spacer color as expected', () => {
    const { container } = render(<StyledDiv spacerHue="red" spacerShade={400} />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.xs} ${PALETTE_V8.red[400]}`),
      {
        modifier: '&:focus-visible'
      }
    );
  });

  it('renders selector as expected', () => {
    const { container } = render(<StyledDiv selector="&:focus-within" />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${PALETTE_V8.blue[600]}`),
      {
        modifier: '&:focus-within'
      }
    );
  });

  it('renders size as expected', () => {
    const { container } = render(<StyledDiv shadowWidth="sm" spacerWidth="sm" />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE_V8.blue[600]}`),
      {
        modifier: '&:focus-visible'
      }
    );
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.sm} ${PALETTE_V8.white}`),
      {
        modifier: '&:focus-visible'
      }
    );
  });

  it('conditionally renders without `box-shadow`', () => {
    const { container } = render(<StyledDiv condition={false} />);

    expect(container.firstChild).not.toHaveStyleRule('box-shadow', undefined, {
      modifier: '&:focus-visible'
    });
  });

  it('knocks out spacer as expected', () => {
    const { container } = render(<StyledDiv spacerWidth={null} />);

    expect(container.firstChild).not.toHaveStyleRule('outline-offset', undefined, {
      modifier: '&:focus-visible'
    });
  });

  it('renders user provided styles', () => {
    const dropShadow = DEFAULT_THEME.shadows.lg('4px', '8px', PALETTE_V8.black);
    const { container } = render(
      <StyledDiv styles={{ backgroundColor: 'black', boxShadow: dropShadow, color: 'white' }} />
    );

    expect(container.firstChild).toHaveStyleRule('background-color', 'black', {
      modifier: '&:focus-visible'
    });
    expect(container.firstChild).toHaveStyleRule('color', 'white', {
      modifier: '&:focus-visible'
    });
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(dropShadow),
      {
        modifier: '&:focus-visible'
      }
    );
  });
});
