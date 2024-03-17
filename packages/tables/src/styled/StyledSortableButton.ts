/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColorV8,
  focusStyles,
  SELECTOR_FOCUS_VISIBLE
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

StyledBaseIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledSortableStrokeIconWrapper = styled(StyledBaseIconWrapper)`
  /* stylelint-disable-line no-empty-source */
`;

StyledSortableStrokeIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledSortableFillIconWrapper = styled(StyledBaseIconWrapper)`
  /* stylelint-disable-line no-empty-source */
`;

StyledSortableFillIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledSortableButtonProps {
  sort?: ISortableCellProps['sort'];
  width?: ISortableCellProps['width'];
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
  transition: box-shadow 0.1s ease-in-out;
  border: none; /* [1] */
  border-radius: ${props => props.theme.borderRadii.sm};
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
        return getColorV8('neutralHue', 600, props.theme);
      } else if (props.sort === 'desc') {
        return getColorV8('neutralHue', 400, props.theme);
      }

      return undefined;
    }};
    fill: ${props => {
      if (props.sort === 'asc') {
        return getColorV8('neutralHue', 400, props.theme);
      } else if (props.sort === 'desc') {
        return getColorV8('neutralHue', 600, props.theme);
      }

      return undefined;
    }};
  }

  &:hover,
  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
    color: ${props => getColorV8('primaryHue', 600, props.theme)};

    ${props =>
      props.sort === undefined &&
      `
      ${StyledSortableFillIconWrapper} {
        opacity: 1;
        color: ${getColorV8('primaryHue', 600, props.theme)};
        fill: ${getColorV8('primaryHue', 600, props.theme)};
      }

      ${StyledSortableStrokeIconWrapper} {
        opacity: 0;
      }
    `};

    ${props =>
      props.sort === 'asc' &&
      `
      ${StyledSortableFillIconWrapper} {
        color: ${getColorV8('primaryHue', 600, props.theme)};
        fill: ${getColorV8('primaryHue', 600, props.theme, 0.25)};
      }
    `}

    ${props =>
      props.sort === 'desc' &&
      `
      ${StyledSortableFillIconWrapper} {
        color: ${getColorV8('primaryHue', 600, props.theme, 0.25)};
        fill: ${getColorV8('primaryHue', 600, props.theme)};
      }
    `}
  }

  ${props =>
    focusStyles({
      theme: props.theme
    })}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSortableButton.defaultProps = {
  theme: DEFAULT_THEME
};
