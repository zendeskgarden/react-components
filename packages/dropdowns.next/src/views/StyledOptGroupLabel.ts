/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getMinHeight as getOptionMinHeight } from './StyledOption';

const COMPONENT_ID = 'dropdowns.optgroup.label';

interface IStyledOptGroupLabelProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

/*
 * 1. Doubled to compensate for negative <ul> group margining.
 */
const sizeStyles = (props: IStyledOptGroupLabelProps) => {
  const marginBottom = math(`${getOptionMinHeight(props)} - ${props.theme.lineHeights.md}`);

  return css`
    margin-bottom: ${marginBottom}; /* [1] */
  `;
};

export const StyledOptGroupLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledOptGroupLabelProps>`
  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledOptGroupLabel.defaultProps = {
  theme: DEFAULT_THEME
};
