/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ToggleButton } from '@zendeskgarden/react-buttons';
import {
  menuStyles,
  arrowStyles,
  MENU_POSITION as MenuPosition,
  ARROW_POSITION as ArrowPosition
} from '@zendeskgarden/react-theming';

const TOP: Record<string, string> = {
  right: 'calc(-50% - 8px)',
  left: 'calc(-50% - 8px)'
};

const RIGHT: Record<string, string> = {
  left: '100%'
};

const BOTTOM: Record<string, string> = {
  top: '100%'
};

const LEFT: Record<string, string> = {
  right: '100%'
};

const MENU_ARROW_MAPPING: Record<MenuPosition, ArrowPosition> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

const StyledMenu = styled.div<{ position: MenuPosition }>`
  /* stylelint-disable-next-line declaration-no-important */
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;

  ${props =>
    arrowStyles(MENU_ARROW_MAPPING[props.position], {
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

const StyledWrapper = styled.div<{ position: MenuPosition; isHidden: boolean }>`
  ${props =>
    menuStyles(props.position, {
      theme: props.theme,
      hidden: props.isHidden,
      margin: props.theme.space.xs,
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

interface IArgs {
  position: MenuPosition;
  isAnimated: boolean;
}

export const MenuStylesStory: Story<IArgs> = ({ isAnimated, position }) => {
  const [isHidden, setIsHidden] = useState(true);

  const style = {
    top: TOP[position],
    right: RIGHT[position],
    bottom: BOTTOM[position],
    left: LEFT[position]
  };

  return (
    <Grid>
      <Row style={{ height: 'calc(100vh - 80px)' }}>
        <Col textAlign="center" alignSelf="center">
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <ToggleButton onClick={() => setIsHidden(!isHidden)} isPressed={!isHidden}>
              Trigger
            </ToggleButton>
            {!isHidden && (
              <StyledWrapper
                data-garden-animate={isAnimated}
                position={position}
                isHidden={isHidden}
                style={style}
              >
                <StyledMenu data-garden-animate={isAnimated} position={position}>
                  <span>Menu</span>
                </StyledMenu>
              </StyledWrapper>
            )}
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
