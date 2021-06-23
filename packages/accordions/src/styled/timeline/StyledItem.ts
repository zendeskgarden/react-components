/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledSeparator } from './StyledSeparator';
import { StyledTimelineContent } from './StyledContent';
import { StyledOppositeContent } from './StyledOppositeContent';

const COMPONENT_ID = 'timeline.item';

interface IStyledTimelineItem {
  surfaceColor?: string;
  isAlternate?: boolean;
  hasOppositeContent?: boolean;
}

export const StyledTimelineItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTimelineItem>`
  display: flex;
  position: relative;

  &:last-of-type ${StyledSeparator}::after {
    display: none;
  }

  ${props =>
    !props.hasOppositeContent &&
    props.isAlternate &&
    css`
      &:before {
        flex: 1;
        content: '';
        padding: ${props.theme.space.base * 4}px;
      }
    `}

  ${props =>
    props.isAlternate &&
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

StyledTimelineItem.defaultProps = {
  theme: DEFAULT_THEME
};
