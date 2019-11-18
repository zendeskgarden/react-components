/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  TYPE_ALIGN_CONTENT,
  TYPE_ALIGN_ITEMS,
  TYPE_JUSTIFY_CONTENT,
  ARRAY_ALIGN_CONTENT,
  ARRAY_ALIGN_ITEMS,
  ARRAY_JUSTIFY_CONTENT
} from '../utils/types';
import useGridContext from '../utils/useGridContext';
import { StyledRow } from '../styled';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the `align-content` flex container property, affecting vertical
   * `Col` distribution, for all screen sizes
   */
  alignContent?: TYPE_ALIGN_CONTENT;
  /** Applies the `align-content` flex container property for extra-small screen sizes */
  alignContentXs?: TYPE_ALIGN_CONTENT;
  /** Applies the `align-content` flex container property for small screen sizes */
  alignContentSm?: TYPE_ALIGN_CONTENT;
  /** Applies the `align-content` flex container property for medium screen sizes */
  alignContentMd?: TYPE_ALIGN_CONTENT;
  /** Applies the `align-content` flex container property for large screen sizes */
  alignContentLg?: TYPE_ALIGN_CONTENT;
  /** Applies the `align-content` flex container property for extra-large screen sizes */
  alignContentXl?: TYPE_ALIGN_CONTENT;
  /**
   * Applies the `align-items` flex container property, affecting vertical `Col`
   * alignment, for all screen sizes
   */
  alignItems?: TYPE_ALIGN_ITEMS;
  /** Applies the `align-items` flex container property for extra-small screen sizes */
  alignItemsXs?: TYPE_ALIGN_ITEMS;
  /** Applies the `align-items` flex container property for small screen sizes */
  alignItemsSm?: TYPE_ALIGN_ITEMS;
  /** Applies the `align-items` flex container property for medium screen sizes */
  alignItemsMd?: TYPE_ALIGN_ITEMS;
  /** Applies the `align-items` flex container property for large screen sizes */
  alignItemsLg?: TYPE_ALIGN_ITEMS;
  /** Applies the `align-items` flex container property for extra-large screen sizes */
  alignItemsXl?: TYPE_ALIGN_ITEMS;
  /**
   * Applies the `justify-content` flex container property, affecting horizontal
   * `Col` distribution, for all screen sizes
   */
  justifyContent?: TYPE_JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property for extra-small screen sizes */
  justifyContentXs?: TYPE_JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property for small screen sizes */
  justifyContentSm?: TYPE_JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property for medium screen sizes */
  justifyContentMd?: TYPE_JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property for large screen sizes */
  justifyContentLg?: TYPE_JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property for extra-large screen sizes */
  justifyContentXl?: TYPE_JUSTIFY_CONTENT;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Row = React.forwardRef<HTMLDivElement, IRowProps>((props, ref) => {
  const { gutters } = useGridContext();

  return <StyledRow gutters={gutters} ref={ref} {...props} />;
});

Row.propTypes = {
  alignContent: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignContentXs: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignContentSm: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignContentMd: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignContentLg: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignContentXl: PropTypes.oneOf(ARRAY_ALIGN_CONTENT),
  alignItems: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  alignItemsXs: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  alignItemsSm: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  alignItemsMd: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  alignItemsLg: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  alignItemsXl: PropTypes.oneOf(ARRAY_ALIGN_ITEMS),
  justifyContent: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  justifyContentXs: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  justifyContentSm: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  justifyContentMd: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  justifyContentLg: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  justifyContentXl: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT)
};

export default Row;
