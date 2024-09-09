/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  focusStyles,
  SELECTOR_FOCUS_VISIBLE,
  getColor
} from '@zendeskgarden/react-theming';
import { ISortableCellProps } from '../types';

const COMPONENT_ID = 'tables.sortable';

const StyledBaseIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  ${props => (props.theme.rtl ? 'left' : 'right')}: 0;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: ${props => props.theme.iconSizes.sm};
  height: 100%;
  color: inherit;
  fill: inherit;
`;

export const StyledSortableStrokeIconWrapper = styled(StyledBaseIconWrapper)`
  /* empty-source */
`;

export const StyledSortableFillIconWrapper = styled(StyledBaseIconWrapper)`
  /* empty-source */
`;

interface IStyledSortableButtonProps {
  $sort?: ISortableCellProps['sort'];
  width?: ISortableCellProps['width'];
}

const colorStyles = ({ theme, $sort }: IStyledSortableButtonProps & ThemeProps<DefaultTheme>) => {
  const fgInactive = getColor({
    variable: 'foreground.subtle',
    transparency: theme.opacity[200],
    theme
  });
  const fgActive = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const fgPrimaryActive = getColor({ variable: 'foreground.primary', theme });
  const fgPrimaryInactive = getColor({
    variable: 'foreground.primary',
    theme,
    dark: { offset: -100 },
    transparency: theme.opacity[200]
  });
  let color = fgActive;
  let fill = fgActive;

  if ($sort === 'asc') {
    color = fgActive;
    fill = fgInactive;
  } else if ($sort === 'desc') {
    color = fgInactive;
    fill = fgActive;
  }

  return css`
    ${StyledSortableStrokeIconWrapper} {
      color: ${fgActive};
      fill: ${fgActive};
    }

    ${StyledSortableFillIconWrapper} {
      color: ${color};
      fill: ${fill};
    }

    &:hover,
    ${SELECTOR_FOCUS_VISIBLE} {
      color: ${fgPrimaryActive};

      ${$sort === undefined &&
      `
        ${StyledSortableFillIconWrapper} {
          opacity: 1;
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryActive};
        }

        ${StyledSortableStrokeIconWrapper} {
          opacity: 0;
        }
      `};

      ${$sort === 'asc' &&
      `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryInactive};
        }
      `}

      ${$sort === 'desc' &&
      `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryInactive};
          fill: ${fgPrimaryActive};
        }
      `}
    }

    ${focusStyles({ theme })}
  `;
};

/**
 * 1. Reset for <button> element
 * 2. Reset for <a>nchor element
 */
export const StyledSortableButton = styled.button.attrs<IStyledSortableButtonProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button'
})<IStyledSortableButtonProps>`
  position: relative;
  transition: box-shadow 0.1s ease-in-out;
  border: none; /* [1] */
  border-radius: ${props => props.theme.borderRadii.sm};
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    math(`${props.theme.space.base} + ${props.theme.iconSizes.sm}`)};
  width: ${props => props.width};
  text-decoration: none; /* [2] */
  color: inherit;
  font-family: inherit; /* [1] */
  font-size: inherit; /* [1] */
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${StyledSortableStrokeIconWrapper} {
    opacity: ${props => props.$sort === undefined && 1};
  }

  ${StyledSortableFillIconWrapper} {
    opacity: ${props => props.$sort !== undefined && 1};
  }

  &:hover,
  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
