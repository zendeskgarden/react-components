/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone';

export interface IStyledDropzoneProps extends ThemeProps<DefaultTheme> {
  hasMessage?: boolean;
  isDanger?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
}

/**
 * 2. Remove 1px padding, add 1px to border to prevent layout shifting from hover.
 */
function getStateStyles(props: IStyledDropzoneProps) {
  const { isDanger, isDisabled, isActive, isHovered, theme } = props;
  const hoverPadding = `${theme.space.base * 3 - 1}px`;

  if (isDisabled) {
    return {
      backgroundColor: getColor('neutralHue', 200, theme),
      borderColor: getColor('neutralHue', 300, theme),
      color: getColor('neutralHue', 400, theme)
    };
  }

  /**
   * Danger state
   */
  if (isDanger) {
    if (isHovered) {
      return {
        padding: hoverPadding /* [2] */,
        borderWidth: theme.borderRadii.sm /* [2] */,
        borderColor: getColor('dangerHue', 700, theme),
        borderStyle: 'solid',
        backgroundColor: getColor('dangerHue', 600, theme, 0.08),
        color: getColor('dangerHue', 800, theme)
      };
    }

    if (isActive) {
      return {
        borderColor: getColor('dangerHue', 600, theme),
        backgroundColor: getColor('dangerHue', 600, theme, 0.08),
        color: getColor('dangerHue', 600, theme)
      };
    }

    return {
      borderColor: getColor('dangerHue', 600, theme),
      backgroundColor: theme.colors.background,
      color: getColor('dangerHue', 600, theme)
    };
  }

  /**
   * Default states
   */
  if (isHovered) {
    return {
      padding: hoverPadding /* [2] */,
      borderWidth: theme.borderRadii.sm /* [2] */,
      borderColor: getColor('primaryHue', 600, theme),
      borderStyle: 'solid',
      backgroundColor: getColor('primaryHue', 600, theme, 0.08),
      color: getColor('primaryHue', 800, theme)
    };
  }

  if (isActive) {
    return {
      borderColor: getColor('primaryHue', 600, theme),
      backgroundColor: getColor('primaryHue', 600, theme, 0.08),
      color: getColor('primaryHue', 600, theme)
    };
  }

  return {
    borderColor: getColor('neutralHue', 600, theme),
    background: theme.colors.background,
    color: getColor('neutralHue', 600, theme)
  };
}

/**
 * 1. Offsets inner spacing from hover state.
 */
export const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDropzoneProps>`
  display: ${p => p.hasMessage && 'flex'};
  align-items: ${p => p.hasMessage && 'center'};
  justify-content: ${p => p.hasMessage && 'center'};
  border-width: 1px;
  border-style: dashed;
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.sm}; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${getStateStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDropzone.defaultProps = {
  theme: DEFAULT_THEME
};
