/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {
  dropzoneStateStyles,
  PRIMARY_HUE,
  DANGER_HUE,
  NEUTRAL_HUE
} from '../../utils/dropzoneStateStyles';

const COMPONENT_ID = 'dropzone';

export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
  hasMessage?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  isHighlighted?: boolean;
  isActive?: boolean;
}

function getStateStyles(props: IStyledDropzoneProps) {
  const { isDanger, isDisabled, theme } = props;

  if (isDisabled) {
    return {
      backgroundColor: getColor(NEUTRAL_HUE, 200, theme),
      borderColor: getColor(NEUTRAL_HUE, 300, theme),
      color: getColor(NEUTRAL_HUE, 400, theme)
    };
  }

  /**
   * isDanger
   */
  if (isDanger) {
    return dropzoneStateStyles(DANGER_HUE, props);
  }

  /**
   * Default
   */
  return dropzoneStateStyles(PRIMARY_HUE, props);
}

export const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropzoneProps>`
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  border-width: 1px;
  border-style: dashed;
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.base * 4}px;
  width: 100%;
  text-align: ${p => p.hasMessage && 'center'};
  font-family: ${props => props.theme.fonts.system};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};
  box-sizing: border-box;

  ${getStateStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropzone.defaultProps = {
  theme: DEFAULT_THEME
};
