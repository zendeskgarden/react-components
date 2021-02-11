/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* stylelint-disable declaration-no-important */

import React, { useState } from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import {
  menuStyles,
  arrowStyles,
  MENU_POSITION,
  ARROW_POSITION
} from '@zendeskgarden/react-theming';

interface IMenuStylesProps {
  position: MENU_POSITION;
  isAnimated: boolean;
}

const MENU_ARROW_MAPPING: Record<MENU_POSITION, ARROW_POSITION> = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right'
};

const StyledMenu = styled.div<{ position: MENU_POSITION }>`
  padding-top: 41px !important;
  width: 100px;
  height: 100px;
  text-align: center !important;

  ${props =>
    arrowStyles(MENU_ARROW_MAPPING[props.position], {
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

const StyledWrapper = styled.div<{ position: MENU_POSITION; isHidden: boolean }>`
  ${props =>
    menuStyles(props.position, {
      theme: props.theme,
      hidden: props.isHidden,
      margin: props.theme.space.xs,
      animationModifier: '[data-garden-animate="true"]'
    })};
`;

export const MenuStyles: Story<IMenuStylesProps> = ({ isAnimated, position }) => {
  const [isHidden, setIsHidden] = useState(true);

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

  const style = {
    top: TOP[position],
    right: RIGHT[position],
    bottom: BOTTOM[position],
    left: LEFT[position]
  };

  return (
    <Grid>
      <Row>
        <Col textAlign="center" style={{ padding: 80 }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <Button onClick={() => setIsHidden(!isHidden)}>Trigger</Button>
            {!isHidden && (
              <StyledWrapper
                data-garden-animate={isAnimated}
                position={position}
                isHidden={isHidden}
                style={style}
              >
                <StyledMenu data-garden-animate={isAnimated} position={position}>
                  Menu
                </StyledMenu>
              </StyledWrapper>
            )}
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
