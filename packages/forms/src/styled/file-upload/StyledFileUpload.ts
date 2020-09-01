/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.file_upload';

interface IStyledFileUploadProps {
  isDragging?: boolean;
  isCompact?: boolean;
}

const positionStyles = (props: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const topMargin = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;

  return css`
    /* stylelint-disable */
    ${StyledLabel} + &,
    ${StyledHint} + &,
    ${StyledMessage} + &,
    & + ${StyledHint},
    & + ${StyledMessage} {
      margin-top: ${topMargin};
    }
    /* stylelint-enable */
  `;
};

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const baseColor = getColor('primaryHue', 600, props.theme);
  const hoverColor = getColor('primaryHue', 700, props.theme);
  const activeColor = getColor('primaryHue', 800, props.theme);
  const disabledBackgroundColor = getColor('primaryHue', 200, props.theme);
  const disabledForegroundColor = getColor('primaryHue', 400, props.theme);
  const boxShadow = `inset ${props.theme.shadows.md(rgba(baseColor as string, 0.35))}`;

  return css`
    border-color: ${props.isDragging ? activeColor : getColor('neutralHue', 600, props.theme)};
    background-color: ${props.isDragging && rgba(baseColor as string, 0.2)};
    color: ${props.isDragging ? activeColor : baseColor};

    &:hover {
      border-color: ${hoverColor};
      background-color: ${rgba(baseColor as string, 0.08)};
      color: ${hoverColor};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${boxShadow};
    }

    &:active {
      border-color: ${activeColor};
      background-color: ${rgba(baseColor as string, 0.2)};
      color: ${activeColor};
    }

    &:disabled {
      border-color: ${disabledForegroundColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

export const StyledFileUpload = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileUploadProps>`
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  border: dashed ${props => props.theme.borderWidths.sm};
  border-radius: ${props => props.theme.borderRadii.md};
  cursor: pointer;
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 15}px`};
  text-align: center;
  line-height: ${props => props.theme.lineHeights.md};
  font-size: ${props => props.theme.fontSizes.md};

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  ${props => colorStyles(props)};
  ${props => positionStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileUpload.defaultProps = {
  theme: DEFAULT_THEME
};
