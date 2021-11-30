/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, rgba } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor,
  getLineHeight
} from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.file_upload';

interface IStyledFileUploadProps {
  isDragging?: boolean;
  isCompact?: boolean;
}

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const baseColor = getColor('primaryHue', 600, props.theme);
  const hoverColor = getColor('primaryHue', 700, props.theme);
  const activeColor = getColor('primaryHue', 800, props.theme);
  const disabledBackgroundColor = getColor('neutralHue', 200, props.theme);
  const disabledForegroundColor = getColor('neutralHue', 400, props.theme);
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

    &[aria-disabled='true'] {
      border-color: ${disabledForegroundColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const marginTop = `${props.theme.space.base * (props.isCompact ? 1 : 2)}px`;
  const paddingHorizontal = `${props.isCompact ? 2 : 4}em`;
  const paddingVertical = math(
    `${props.theme.space.base * (props.isCompact ? 2.5 : 5)} - ${props.theme.borderWidths.sm}`
  );
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 5, fontSize);

  return css`
    padding: ${paddingVertical} ${paddingHorizontal};
    min-width: 4em;
    line-height: ${lineHeight};
    font-size: ${fontSize};

    /* stylelint-disable */
    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && + ${StyledMessage} {
      margin-top: ${marginTop};
    }
    /* stylelint-enable */
  `;
};

export const StyledFileUpload = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileUploadProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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
  text-align: center;
  user-select: none;

  ${sizeStyles};

  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileUpload.defaultProps = {
  theme: DEFAULT_THEME
};
