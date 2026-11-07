/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import type { WithTheme } from '../../types/views';
import { StyledFloatingMenu } from '../dropdown/StyledFloatingMenu';
import { StyledTooltipWrapper } from '../tooltip/StyledTooltipWrapper';

export const getLineHeight = (props: WithTheme) => {
  return `${props.theme.space.base * 5}px`;
};

/*
 * 1. Body-row cells, not rows, are positioned (see StyledRow). A positioned
 *    cell shrinks a popup rendered inline in it to the cell's width, so keep
 *    the popup at its own width, at the menu's own specificity so menu
 *    overrides still apply.
 * 2. A positioned cell later in the table paints over an earlier cell's popup
 *    without a z-index. Zero specificity keeps an explicit Tooltip zIndex prop
 *    (emitted by the wrapper's own rule) winning.
 */
const popupStyles = () => {
  return css`
    /* [1] */
    :where(&) ${StyledFloatingMenu} {
      width: max-content;
    }

    /* [1] [2] */
    :where(&) :where(${StyledTooltipWrapper}) {
      z-index: 1;
      width: max-content;
    }
  `;
};

/**
 * 1. <table> reset
 * 2. Rounded cells require the separate border model.
 */
export const StyledTable = styled.table<WithTheme>`
  display: table;
  border: none; /* [1] */
  width: 100%; /* [1] */
  table-layout: fixed; /* [1] */
  border-collapse: separate; /* [2] */
  border-spacing: 0; /* [1] */
  line-height: ${props => getLineHeight(props)};
  color: ${props => getColor({ variable: 'foreground.default', theme: props.theme })};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${popupStyles}

  ${componentStyles};
`;
