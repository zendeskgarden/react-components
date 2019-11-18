/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import {
  TYPE_ALIGN_CONTENT,
  TYPE_ALIGN_ITEMS,
  TYPE_JUSTIFY_CONTENT,
  TYPE_SPACE
} from '../utils/types';

const COMPONENT_ID = 'grid.row';

const flexStyles = (
  alignContent: TYPE_ALIGN_CONTENT | undefined,
  alignItems: TYPE_ALIGN_ITEMS | undefined,
  justifyContent: TYPE_JUSTIFY_CONTENT | undefined
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
    align-content: ${flexAlignContent};
    align-items: ${flexAlignItems};
    justify-content: ${flexJustifyContent};
  `;
};

const mediaStyles = (
  minWidth: string,
  alignContent: TYPE_ALIGN_CONTENT | undefined,
  alignItems: TYPE_ALIGN_ITEMS | undefined,
  justifyContent: TYPE_JUSTIFY_CONTENT | undefined
) => {
  return css`
    @media (min-width: ${minWidth}) {
      ${flexStyles(alignContent, alignItems, justifyContent)};
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
  justifyContent?: TYPE_JUSTIFY_CONTENT;
  justifyContentXs?: TYPE_JUSTIFY_CONTENT;
  justifyContentSm?: TYPE_JUSTIFY_CONTENT;
  justifyContentMd?: TYPE_JUSTIFY_CONTENT;
  justifyContentLg?: TYPE_JUSTIFY_CONTENT;
  justifyContentXl?: TYPE_JUSTIFY_CONTENT;
}

export const StyledRow = styled.div.attrs<IStyledRowProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledRowProps>`
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;

  ${props => flexStyles(props.alignContent, props.alignItems, props.justifyContent)}
  ${props => sizeStyles(props)};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xs,
      props.alignContentXs,
      props.alignItemsXs,
      props.justifyContentXs
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.sm,
      props.alignContentSm,
      props.alignItemsSm,
      props.justifyContentSm
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.md,
      props.alignContentMd,
      props.alignItemsMd,
      props.justifyContentMd
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.lg,
      props.alignContentLg,
      props.alignItemsLg,
      props.justifyContentLg
    )};

  ${props =>
    mediaStyles(
      props.theme.breakpoints.xl,
      props.alignContentXl,
      props.alignItemsXl,
      props.justifyContentXl
    )};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
