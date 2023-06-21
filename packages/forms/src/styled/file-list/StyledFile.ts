/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor,
  getLineHeight,
  focusStyles
} from '@zendeskgarden/react-theming';
import { FileValidation } from '../../types';
import { StyledFileClose } from './StyledFileClose';

const COMPONENT_ID = 'forms.file';

const colorStyles = (props: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  let borderColor;
  let focusBorderColor;
  let foregroundColor;

  if (props.validation === 'success') {
    borderColor = getColor('successHue', 600, props.theme);
    focusBorderColor = borderColor;
    foregroundColor = borderColor;
  } else if (props.validation === 'error') {
    borderColor = getColor('dangerHue', 600, props.theme);
    focusBorderColor = borderColor;
    foregroundColor = borderColor;
  } else {
    borderColor = getColor('neutralHue', 300, props.theme);
    focusBorderColor = getColor('primaryHue', 600, props.theme);
    foregroundColor = props.theme.colors.foreground;
  }

  return css`
    border-color: ${borderColor};
    color: ${foregroundColor};

    ${focusStyles({
      theme: props.theme,
      inset: props.focusInset,
      hue: focusBorderColor,
      styles: { borderColor: focusBorderColor }
    })}
  `;
};

const sizeStyles = (props: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  const size = `${props.theme.space.base * (props.isCompact ? 7 : 10)}px`;
  const spacing = `${props.theme.space.base * (props.isCompact ? 2 : 3)}px`;
  const fontSize = props.theme.fontSizes.md;
  const lineHeight = getLineHeight(props.theme.space.base * 5, fontSize);

  return `
    box-sizing: border-box;
    border: ${props.theme.borders.sm};
    border-radius: ${props.theme.borderRadii.md};
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
      margin-${props.theme.rtl ? 'left' : 'right'}: -${spacing};
    }
  `;
};

interface IStyledFileProps {
  isCompact?: boolean;
  focusInset?: boolean;
  validation?: FileValidation;
}

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
      /* stylelint-disable-next-line property-no-unknown, property-case */
      border-top-${props => (props.theme.rtl ? 'right' : 'left')}-radius: 0;
    }
  }

  & > [role='progressbar'][aria-valuenow='0'],
  & > [role='progressbar'][aria-valuenow='100'] {
    opacity: 0;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFile.defaultProps = {
  theme: DEFAULT_THEME
};
