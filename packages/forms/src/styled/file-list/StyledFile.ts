/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledFileClose } from './StyledFileClose';

const COMPONENT_ID = 'forms.file';

const colorStyles = (props: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  const borderColor = getColor('neutralHue', 300, props.theme);
  const foregroundColor = getColor('neutralHue', 800, props.theme);

  return `
    border-color: ${borderColor};
    color: ${foregroundColor};
  `;
};

const sizeStyles = (props: IStyledFileProps & ThemeProps<DefaultTheme>) => {
  const size = `${props.theme.space.base * (props.isCompact ? 7 : 10)}px`;
  const spacing = `${props.theme.space.base * 3}px`;

  return `
    box-sizing: border-box;
    border: ${props.theme.borders.sm};
    border-radius: ${props.theme.borderRadii.md};
    padding: 0 ${spacing};
    height: ${size};
    font-size: ${props.theme.fontSizes.md};

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
}

export const StyledFile = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileProps>`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;

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
