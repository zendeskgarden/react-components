/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme, DataAttributes } from 'styled-components';
import { StyledBaseIcon, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.icon';

interface IStyledIconProps {
  $isStart?: boolean;
}

const sizeStyles = (props: IStyledIconProps & ThemeProps<DefaultTheme>) => {
  const margin = props.$isStart && `${props.theme.space.base * 2}px`;
  const size = props.theme.iconSizes.md;

  return css`
    margin-${props.theme.rtl ? 'left' : 'right'}: ${margin};
    width: ${size};
    height: ${size};
  `;
};

export const StyledIcon = styled(StyledBaseIcon).attrs<DataAttributes>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIconProps>`
  position: relative;
  top: -1px;
  vertical-align: middle;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
