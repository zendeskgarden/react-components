/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import arrowStyles, { ARROW_POSITION, exponentialSymbols } from './arrowStyles';

interface IStyledDivProps extends ThemeProps<DefaultTheme> {
  arrowPosition: ARROW_POSITION;
  arrowSize?: string;
  arrowInset?: string;
  arrowAnimationModifier?: string;
}

const StyledDiv = styled.div<IStyledDivProps>`
  ${props =>
    arrowStyles(props.arrowPosition, {
      size: props.arrowSize,
      inset: props.arrowInset,
      animationModifier: props.arrowAnimationModifier
    })}
`;

const getArrowSize = (size = '6px') => {
  return math(`${size} * 2 / sqrt(2)`, exponentialSymbols);
};

const getArrowInset = (inset: string, size?: string) => {
  return math(`${getArrowSize(size)} / -2 + ${inset}`);
};

describe('arrowStyles', () => {
  it('renders with animation', () => {
    const { container } = render(
      <StyledDiv arrowPosition="top" arrowAnimationModifier=".animate" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'animation',
      expect.stringContaining('ease-in-out'),
      { modifier: '&.animate::before' }
    );
  });

  describe('position', () => {
    it('renders with the expected positions', () => {
      const POSITION: ARROW_POSITION[] = ['top', 'right', 'bottom', 'left'];

      POSITION.forEach(position => {
        const { container } = render(<StyledDiv arrowPosition={position} />);
        const value = math(`${getArrowSize()} / -2`);

        expect(container.firstChild).toHaveStyleRule(position, value, { modifier: '::before' });
      });
    });
  });

  describe('size', () => {
    it('renders with sizes', () => {
      const SIZE = ['2px', '4px', '6px', '8px', '10px', '1em'];

      SIZE.forEach(size => {
        const { container } = render(<StyledDiv arrowPosition="top" arrowSize={size} />);
        const value = getArrowSize(size);

        expect(container.firstChild).toHaveStyleRule('width', value, { modifier: '::before' });
        expect(container.firstChild).toHaveStyleRule('height', value, { modifier: '::after' });
      });
    });
  });

  describe('inset', () => {
    it('renders with inset values', () => {
      const INSET = ['-1px', '0', '1px', '2px', '4px'];

      INSET.forEach(inset => {
        const { container } = render(<StyledDiv arrowPosition="top" arrowInset={inset} />);
        const value = getArrowInset(inset);

        expect(container.firstChild).toHaveStyleRule('top', value, { modifier: '::before' });
      });
    });
  });
});
