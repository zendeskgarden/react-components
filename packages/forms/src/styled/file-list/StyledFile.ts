/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import {
  retrieveComponentStyles,
  getLineHeight,
  focusStyles,
  getColor
} from '@zendeskgarden/react-theming';
import { FileValidation } from '../../types';
import { StyledFileClose } from './StyledFileClose';

const COMPONENT_ID = 'forms.file';

interface IStyledFileProps {
  $isCompact?: boolean;
  $focusInset?: boolean;
  $validation?: FileValidation;
}

const colorStyles = ({
  theme,
  $focusInset,
  $validation
}: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  let borderVariable;
  let focusBorderVariable;
  let foregroundVariable;

  if ($validation === 'success') {
    borderVariable = 'border.successEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.success';
  } else if ($validation === 'error') {
    borderVariable = 'border.dangerEmphasis';
    focusBorderVariable = borderVariable;
    foregroundVariable = 'foreground.danger';
  } else {
    borderVariable = 'border.default';
    focusBorderVariable = 'border.primaryEmphasis';
    foregroundVariable = 'foreground.default';
  }

  const borderColor = getColor({ theme, variable: borderVariable });
  const focusBorderColor = getColor({ theme, variable: focusBorderVariable });
  const foregroundColor = getColor({ theme, variable: foregroundVariable });

  return css`
    border-color: ${borderColor};
    color: ${foregroundColor};

    ${focusStyles({
      theme,
      inset: $focusInset,
      color: { variable: focusBorderVariable },
      styles: { borderColor: focusBorderColor }
    })}
  `;
};

const sizeStyles = ({ theme, $isCompact }: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  const size = `${theme.space.base * ($isCompact ? 7 : 10)}px`;
  const spacing = `${theme.space.base * ($isCompact ? 2 : 3)}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);

  return `
    box-sizing: border-box;
    border: ${theme.borders.sm};
    border-radius: ${theme.borderRadii.md};
    padding: 0 ${spacing};
    height: ${size};
    line-height: ${lineHeight};
    font-size: ${fontSize};

    & > span {
      width: 100%;
    }

    & > ${StyledFileClose} {
      width: ${size};
      height: ${size};
      margin-${theme.rtl ? 'left' : 'right'}: -${spacing};
    }
  `;
};

export const StyledFile = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileProps>`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;

  ${sizeStyles};

  ${colorStyles};

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > [role='progressbar'] {
    position: absolute;
    bottom: 0;
    left: 0;
    transition: opacity 0.2s ease-in-out;
    margin: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;

    & > div {
      border-top-${props => (props.theme.rtl ? 'right' : 'left')}-radius: 0;
    }
  }

  & > [role='progressbar'][aria-valuenow='0'],
  & > [role='progressbar'][aria-valuenow='100'] {
    opacity: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
