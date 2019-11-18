/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import {
  TYPE_ALIGN_CONTENT,
  TYPE_ALIGN_ITEMS,
  TYPE_DIRECTION,
  TYPE_JUSTIFY_CONTENT,
  TYPE_SPACE,
  TYPE_WRAP
} from '../utils/types';

const COMPONENT_ID = 'grid.row';

const flexStyles = (
  alignContent: TYPE_ALIGN_CONTENT | undefined,
  alignItems: TYPE_ALIGN_ITEMS | undefined,
  direction: TYPE_DIRECTION | undefined,
  justifyContent: TYPE_JUSTIFY_CONTENT | undefined,
  wrap: TYPE_WRAP | undefined
) => {
  let flexAlignContent;
  let flexAlignItems;
  let flexJustifyContent;

  if (alignContent === 'start' || alignContent === 'end') {
    flexAlignContent = `flex-${alignContent}`;
  } else if (alignContent === 'between' || alignContent === 'around') {
    flexAlignContent = `space-${alignContent}`;
  } else {
    flexAlignContent = alignContent;
  }

  if (alignItems === 'start' || alignItems === 'end') {
    flexAlignItems = `flex-${alignItems}`;
  } else {
    flexAlignItems = alignItems;
  }

  if (justifyContent === 'start' || justifyContent === 'end') {
    flexJustifyContent = `flex-${justifyContent}`;
  } else if (justifyContent === 'between' || justifyContent === 'around') {
    flexJustifyContent = `space-${justifyContent}`;
  } else {
    flexJustifyContent = justifyContent;
  }

  return css`
    flex-flow: ${direction} ${wrap};
    align-content: ${flexAlignContent};
    align-items: ${flexAlignItems};
    justify-content: ${flexJustifyContent};
  `;
};

const mediaStyles = (
  minWidth: string,
  alignContent: TYPE_ALIGN_CONTENT | undefined,
  alignItems: TYPE_ALIGN_ITEMS | undefined,
  direction: TYPE_DIRECTION | undefined,
  justifyContent: TYPE_JUSTIFY_CONTENT | undefined,
  wrap: TYPE_WRAP | undefined
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(alignContent, alignItems, direction, justifyContent, wrap)};
    }
  `;
};

const sizeStyles = (props: IStyledRowProps) => {
  const margin = props.gutters ? math(`${props.theme.space[props.gutters!]} / 2`) : 0;

  return css`
    margin-right: -${margin};
    margin-left: -${margin};
  `;
};

export interface IStyledRowProps extends ThemeProps<DefaultTheme> {
  gutters?: TYPE_SPACE;
  alignContent?: TYPE_ALIGN_CONTENT;
  alignContentXs?: TYPE_ALIGN_CONTENT;
  alignContentSm?: TYPE_ALIGN_CONTENT;
  alignContentMd?: TYPE_ALIGN_CONTENT;
  alignContentLg?: TYPE_ALIGN_CONTENT;
  alignContentXl?: TYPE_ALIGN_CONTENT;
  alignItems?: TYPE_ALIGN_ITEMS;
  alignItemsXs?: TYPE_ALIGN_ITEMS;
  alignItemsSm?: TYPE_ALIGN_ITEMS;
  alignItemsMd?: TYPE_ALIGN_ITEMS;
  alignItemsLg?: TYPE_ALIGN_ITEMS;
  alignItemsXl?: TYPE_ALIGN_ITEMS;
  direction?: TYPE_DIRECTION;
  directionXs?: TYPE_DIRECTION;
  directionSm?: TYPE_DIRECTION;
  directionMd?: TYPE_DIRECTION;
  directionLg?: TYPE_DIRECTION;
  directionXl?: TYPE_DIRECTION;
  justifyContent?: TYPE_JUSTIFY_CONTENT;
  justifyContentXs?: TYPE_JUSTIFY_CONTENT;
  justifyContentSm?: TYPE_JUSTIFY_CONTENT;
  justifyContentMd?: TYPE_JUSTIFY_CONTENT;
  justifyContentLg?: TYPE_JUSTIFY_CONTENT;
  justifyContentXl?: TYPE_JUSTIFY_CONTENT;
  wrap?: TYPE_WRAP;
  wrapXs?: TYPE_WRAP;
  wrapSm?: TYPE_WRAP;
  wrapMd?: TYPE_WRAP;
  wrapLg?: TYPE_WRAP;
  wrapXl?: TYPE_WRAP;
}

export const StyledRow = styled.div.attrs<IStyledRowProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRowProps>`
  display: flex;
  box-sizing: inherit;

  ${props =>
    flexStyles(
      props.alignContent,
      props.alignItems,
      props.direction,
      props.justifyContent,
      props.wrap
    )}
  ${props => sizeStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.alignContentXs,
      props.alignItemsXs,
      props.directionXs,
      props.justifyContentXs,
      props.wrapXs
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.alignContentSm,
      props.alignItemsSm,
      props.directionSm,
      props.justifyContentSm,
      props.wrapSm
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.alignContentMd,
      props.alignItemsMd,
      props.directionMd,
      props.justifyContentMd,
      props.wrapMd
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.alignContentLg,
      props.alignItemsLg,
      props.directionLg,
      props.justifyContentLg,
      props.wrapLg
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.alignContentXl,
      props.alignItemsXl,
      props.directionXl,
      props.justifyContentXl,
      props.wrapXl
    )};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  wrap: 'wrap',
  theme: DEFAULT_THEME
};
