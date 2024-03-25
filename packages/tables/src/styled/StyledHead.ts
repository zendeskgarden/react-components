/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';
import { StyledHeaderRow } from './StyledHeaderRow';

const COMPONENT_ID = 'tables.head';

interface IStyledHeadProps {
  isSticky?: boolean;
}

/*
 * 1. Prevent <Checkbox> or <OverflowButton> from leaking over the sticky header
 * 2. Replace header row border with a box-shadow that maintains position
 */
const stickyStyles = (props: ThemeProps<DefaultTheme>) => {
  const borderColor = getColorV8('neutralHue', 300, props.theme);

  return css`
    position: sticky;
    top: 0;
    z-index: 1; /* [1] */
    box-shadow: inset 0 -${props.theme.borderWidths.sm} 0 ${borderColor}; /* [2] */
    background-color: ${getColorV8('background', 600 /* default shade */, props.theme)};

    & > ${StyledHeaderRow}:last-child {
      border-bottom-color: transparent; /* [2] */
    }
  `;
};

export const StyledHead = styled.thead.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeadProps>`
  ${props => props.isSticky && stickyStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHead.defaultProps = {
  theme: DEFAULT_THEME
};
