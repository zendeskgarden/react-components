/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { getLineHeight, retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledSeparator } from './StyledSeparator';
import { StyledTimelineContent } from './StyledContent';
import { StyledOppositeContent } from './StyledOppositeContent';

const COMPONENT_ID = 'timeline.item';

interface IStyledTimelineItem {
  $isAlternate?: boolean;
  $hasOppositeContent?: boolean;
}

export const StyledTimelineItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimelineItem>`
  display: flex;
  position: relative;
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  &:last-of-type ${StyledSeparator}::after {
    display: none;
  }

  ${props =>
    !props.$hasOppositeContent &&
    props.$isAlternate &&
    css`
      &::before {
        flex: 1;
        padding: ${props.theme.space.base * 4}px;
        content: '';
      }
    `}

  ${props =>
    props.$isAlternate &&
    css`
      &:nth-child(even) {
        flex-direction: row-reverse;
        ${StyledOppositeContent} {
          text-align: ${props.theme.rtl ? 'right' : 'left'};
        }
        ${StyledTimelineContent} {
          text-align: ${props.theme.rtl ? 'left' : 'right'};
        }
      }
    `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
