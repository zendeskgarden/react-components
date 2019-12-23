/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import arrowStyles, { POSITION as ARROW_POSITION } from './arrowStyles';

interface IStyledDivProps extends ThemeProps<DefaultTheme> {
  arrowPosition: ARROW_POSITION;
  arrowSize?: string;
}

const StyledDiv = styled.div<IStyledDivProps>`
  ${props => arrowStyles(props.arrowPosition, props.arrowSize)}
`;

const getArrowSize = (size = '6px') => {
  return math(`${size} * 2 / sqrt(2)`);
};

describe('arrowStyles', () => {
  describe('position', () => {
    const POSITION: Array<ARROW_POSITION> = ['top', 'right', 'bottom', 'left'];

    POSITION.forEach(position => {
      it(`renders with the expected ${position} positioning`, () => {
        const { container } = render(<StyledDiv arrowPosition={position} />);
        const value = math(`${getArrowSize()} / -2`);

        expect(container.firstChild).toHaveStyleRule(position, value, { modifier: '::before' });
      });
    });
  });

  describe('size', () => {
    const SIZE = ['2px', '4px', '6px', '8px', '10px'];

    SIZE.forEach(size => {
      it(`renders with ${size} size`, () => {
        const { container } = render(<StyledDiv arrowPosition="top" arrowSize={size} />);
        const value = getArrowSize(size);

        expect(container.firstChild).toHaveStyleRule('width', value, { modifier: '::before' });
        expect(container.firstChild).toHaveStyleRule('height', value, { modifier: '::after' });
      });
    });
  });
});
