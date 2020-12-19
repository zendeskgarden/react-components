/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.sortable';

type SORT = 'asc' | 'desc';

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

StyledBaseIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledSortableStrokeIconWrapper = styled(StyledBaseIconWrapper)``;

StyledSortableStrokeIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledSortableFillIconWrapper = styled(StyledBaseIconWrapper)``;

StyledSortableFillIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledSortableButtonProps {
  /** Sets the sort order */
  sort?: SORT;
  /** Sets the width of the cell */
  width?: string | number;
}

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
  border: none; /* [1] */
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  math(`${props.theme.space.base} + ${props.theme.iconSizes.sm}`)};
  width: ${props => props.width};
  text-decoration: none; /* [2] */
  color: inherit;
  font-family: inherit; /* [1] */
  font-size: inherit; /* [1] */
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${StyledSortableStrokeIconWrapper} {
    opacity: ${props => props.sort === undefined && 1};
  }

  ${StyledSortableFillIconWrapper} {
    opacity: ${props => props.sort !== undefined && 1};
    color: ${props => {
      if (props.sort === 'asc') {
        return getColor('neutralHue', 600, props.theme);
      } else if (props.sort === 'desc') {
        return getColor('neutralHue', 400, props.theme);
      }

      return undefined;
    }};
    fill: ${props => {
      if (props.sort === 'asc') {
        return getColor('neutralHue', 400, props.theme);
      } else if (props.sort === 'desc') {
        return getColor('neutralHue', 600, props.theme);
      }

      return undefined;
    }};
  }

  &:hover,
  &[data-garden-focus-visible] {
    text-decoration: none;
    color: ${props => getColor('primaryHue', 600, props.theme)};

    ${props =>
      props.sort === undefined &&
      `
      ${StyledSortableFillIconWrapper} {
        opacity: 1;
        color: ${getColor('primaryHue', 600, props.theme)};
        fill: ${getColor('primaryHue', 600, props.theme)};
      }

      ${StyledSortableStrokeIconWrapper} {
        opacity: 0;
      }
    `};

    ${props =>
      props.sort === 'asc' &&
      `
      ${StyledSortableFillIconWrapper} {
        color: ${getColor('primaryHue', 600, props.theme)};
        fill: ${getColor('primaryHue', 600, props.theme, 0.25)};
      }
    `}

    ${props =>
      props.sort === 'desc' &&
      `
      ${StyledSortableFillIconWrapper} {
        color: ${getColor('primaryHue', 600, props.theme, 0.25)};
        fill: ${getColor('primaryHue', 600, props.theme)};
      }
    `}
  }

  &:focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSortableButton.defaultProps = {
  theme: DEFAULT_THEME
};
