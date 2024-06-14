/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  DEFAULT_THEME,
  StyledBaseIcon,
  getColor,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { FileValidation } from '../../types';

const COMPONENT_ID = 'forms.file.icon';

export interface IStyledFileIconProps {
  $isCompact?: boolean;
  $validation?: FileValidation;
}

const colorStyles = ({ theme, $validation }: IStyledFileIconProps & ThemeProps<DefaultTheme>) => {
  const color = $validation ? undefined : getColor({ theme, variable: 'foreground.subtle' });

  return css`
    color: ${color};
  `;
};

const sizeStyles = ({ $isCompact, theme }: IStyledFileIconProps & ThemeProps<DefaultTheme>) => {
  const width = $isCompact ? theme.iconSizes.sm : theme.iconSizes.md;
  const margin = `${theme.space.base * 2}px`;

  return css`
    width: ${width};
    /* stylelint-disable-next-line property-no-unknown */
    margin-${theme.rtl ? 'left' : 'right'}: ${margin};
  `;
};

export const StyledFileIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  flex-shrink: 0;

  ${sizeStyles};

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileIcon.defaultProps = {
  theme: DEFAULT_THEME
};
