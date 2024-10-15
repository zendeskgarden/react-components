/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  getLineHeight,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.file_upload';

interface IStyledFileUploadProps {
  $isDragging?: boolean;
  $isCompact?: boolean;
}

const colorStyles = ({ theme, $isDragging }: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const borderOptions = { theme, variable: 'border.primaryEmphasis' };
  const backgroundOptions = { theme, variable: 'background.primaryEmphasis' };
  const foregroundOptions = { theme, variable: 'foreground.primary' };
  const offset100 = { dark: { offset: -100 }, light: { offset: 100 } };
  const offset200 = { dark: { offset: -200 }, light: { offset: 200 } };
  const borderColor = getColor({ theme, variable: 'border.emphasis' });
  const foregroundColor = getColor(foregroundOptions);
  const hoverBorderColor = getColor({ ...borderOptions, ...offset100 });
  const hoverBackgroundColor = getColor({ ...backgroundOptions, transparency: theme.opacity[100] });
  const hoverForegroundColor = getColor({ ...foregroundOptions, ...offset100 });
  const activeBorderColor = getColor({ ...borderOptions, ...offset200 });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeForegroundColor = getColor({ ...foregroundOptions, ...offset200 });
  const disabledBorderColor = getColor({ theme, variable: 'border.disabled' });
  const disabledBackgroundColor = getColor({ theme, variable: 'background.disabled' });
  const disabledForegroundColor = getColor({ theme, variable: 'foreground.disabled' });

  return css`
    border-color: ${$isDragging ? activeBorderColor : borderColor};
    background-color: ${$isDragging ? activeBackgroundColor : undefined};
    color: ${$isDragging ? activeForegroundColor : foregroundColor};

    &:hover {
      border-color: ${hoverBorderColor};
      background-color: ${hoverBackgroundColor};
      color: ${hoverForegroundColor};
    }

    ${focusStyles({ theme })}

    &:active {
      border-color: ${activeBorderColor};
      background-color: ${activeBackgroundColor};
      color: ${activeForegroundColor};
    }

    &[aria-disabled='true'] {
      border-color: ${disabledBorderColor};
      background-color: ${disabledBackgroundColor};
      color: ${disabledForegroundColor};
    }
  `;
};

const sizeStyles = ({ theme, $isCompact }: ThemeProps<DefaultTheme> & IStyledFileUploadProps) => {
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;
  const paddingHorizontal = `${$isCompact ? 2 : 4}em`;
  const paddingVertical = math(
    `${theme.space.base * ($isCompact ? 2.5 : 5)} - ${theme.borderWidths.sm}`
  );
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);

  return css`
    padding: ${paddingVertical} ${paddingHorizontal};
    min-width: 4em;
    line-height: ${lineHeight};
    font-size: ${fontSize};

    ${StyledLabel}:not([hidden]) + &&,
    ${StyledHint} + &&,
    ${StyledMessage} + &&,
    && + ${StyledHint},
    && + ${StyledMessage} {
      margin-top: ${marginTop};
    }
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

  &[aria-disabled='true'] {
    cursor: default;
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
