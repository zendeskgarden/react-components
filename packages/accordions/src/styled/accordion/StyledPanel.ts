/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

export interface IStyledPanel {
  isBare?: boolean;
  isCompact?: boolean;
  isExpanded?: boolean;
  isAnimated?: boolean;
}

const COMPONENT_ID = 'accordions.panel';

const paddingStyles = (props: IStyledPanel & ThemeProps<DefaultTheme>) => {
  const { base } = props.theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * 5;
  let paddingBottom = base * 8;

  if (props.isCompact) {
    paddingTop = base * 2;
    paddingHorizontal = base * 3;
    paddingBottom = base * 4;
  }

  if (props.isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }

  return css`
    transition: ${props.isAnimated && 'padding 0.25s ease-in-out'};
    padding: ${paddingTop}px ${paddingHorizontal}px ${paddingBottom}px;
  `;
};

export const StyledPanel = styled.section.attrs<IStyledPanel>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPanel>`
  ${paddingStyles};
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${
      props.isBare ? 'transparent' : getColor('neutralHue', 300, props.theme)
    }`};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  isAnimated: true,
  theme: DEFAULT_THEME
};
