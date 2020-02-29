/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import menuStyles, { MENU_POSITION } from './menuStyles';

interface IStyledMenuProps extends ThemeProps<DefaultTheme> {
  menuPosition?: MENU_POSITION;
  menuHidden?: boolean;
  menuMargin?: string;
  menuZIndex?: number;
  menuAnimationModifier?: string;
  menuChildSelector?: string;
}

const StyledMenu = styled.div<IStyledMenuProps>`
  ${props =>
    menuStyles(props.menuPosition || 'top', {
      hidden: props.menuHidden,
      margin: props.menuMargin,
      zIndex: props.menuZIndex,
      childSelector: props.menuChildSelector,
      animationModifier: props.menuAnimationModifier,
      ...props
    })}
`;

const getMarginProperty = (position: MENU_POSITION) => {
  let retVal;

  if (position === 'top') {
    retVal = 'margin-bottom';
  } else if (position === 'right') {
    retVal = 'margin-left';
  } else if (position === 'bottom') {
    retVal = 'margin-top';
  } else {
    retVal = 'margin-right';
  }

  return retVal;
};

describe('menuStyles', () => {
  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledMenu />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl', { modifier: '& > *' });
  });

  it('renders with animation', () => {
    const { container } = render(<StyledMenu menuAnimationModifier=".animate" />);

    expect(container.firstChild).toHaveStyleRule(
      'animation',
      expect.stringContaining('cubic-bezier'),
      { modifier: '&.animate > *' }
    );
  });

  it('renders with the expected child selector', () => {
    const StyledChild = styled.div``;
    const { container } = render(<StyledMenu menuChildSelector={`${StyledChild}`} />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-block', {
      modifier: `& ${StyledChild}`
    });
  });

  describe('position', () => {
    const POSITION: Array<MENU_POSITION> = ['top', 'right', 'bottom', 'left'];

    POSITION.forEach(position => {
      it(`renders with the expected ${position} positioning`, () => {
        const { container } = render(
          <StyledMenu menuPosition={position} menuMargin="0" menuAnimationModifier=".animate" />
        );
        const marginProperty = getMarginProperty(position);

        expect(container.firstChild).toHaveStyleRule(marginProperty, '0');
      });
    });
  });

  describe('hidden', () => {
    it('renders visible by default', () => {
      const { container } = render(<StyledMenu />);

      expect(container.firstChild).not.toHaveStyleRule('visibility', 'hidden');
    });

    it('renders expected hidden styling', () => {
      const { container } = render(<StyledMenu menuHidden={true} />);

      expect(container.firstChild).toHaveStyleRule('visibility', 'hidden');
    });
  });

  describe('margin', () => {
    const MARGIN = ['4px', '8px'];

    MARGIN.forEach(margin => {
      it(`renders with the expected ${margin} margin`, () => {
        const { container } = render(<StyledMenu menuMargin={margin} />);

        expect(container.firstChild).toHaveStyleRule('margin-bottom', margin);
      });
    });
  });

  describe('zIndex', () => {
    it('renders expected default', () => {
      const { container } = render(<StyledMenu />);

      expect(container.firstChild).toHaveStyleRule('z-index', '0');
    });

    it('renders expected z-index', () => {
      const { container } = render(<StyledMenu menuZIndex={100} />);

      expect(container.firstChild).toHaveStyleRule('z-index', '100');
    });
  });
});
