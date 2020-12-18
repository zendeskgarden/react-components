/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  ALIGN_ITEMS,
  JUSTIFY_CONTENT,
  WRAP,
  ARRAY_ALIGN_ITEMS,
  ARRAY_JUSTIFY_CONTENT,
  ARRAY_WRAP
} from '../utils/types';
import useGridContext from '../utils/useGridContext';
import { StyledRow } from '../styled';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the `align-items` flex container property to the row.
   * This affects vertical `Col` alignment for all screen sizes.
   */
  alignItems?: ALIGN_ITEMS;
  /** Applies the `align-items` flex container property to the row for extra-small screens */
  alignItemsXs?: ALIGN_ITEMS;
  /** Applies the `align-items` flex container property to the row for small screens */
  alignItemsSm?: ALIGN_ITEMS;
  /** Applies the `align-items` flex container property to the row for medium screens */
  alignItemsMd?: ALIGN_ITEMS;
  /** Applies the `align-items` flex container property to the row for large screens */
  alignItemsLg?: ALIGN_ITEMS;
  /** Applies the `align-items` flex container property to the row for extra-large screens */
  alignItemsXl?: ALIGN_ITEMS;
  /**
   * Applies the `justify-content` flex container property to the row.
   * This affects horizontal `Col` alignment for all screen sizes.
   */
  justifyContent?: JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property to the row for extra-small screens */
  justifyContentXs?: JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property to the row for small screens */
  justifyContentSm?: JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property to the row for medium screens */
  justifyContentMd?: JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property to the row for large screens */
  justifyContentLg?: JUSTIFY_CONTENT;
  /** Applies the `justify-content` flex container property to the row for extra-large screens */
  justifyContentXl?: JUSTIFY_CONTENT;
  /**
   * Applies the `flex-wrap` container property to the row. This affects `Col` wrapping for
   * all screen sizes.
   */
  wrap?: WRAP;
  /** Applies the `flex-wrap` container property to the row for extra-small screens */
  wrapXs?: WRAP;
  /** Applies the `flex-wrap` container property to the row for small screens */
  wrapSm?: WRAP;
  /** Applies the `flex-wrap` container property to the row for medium screens */
  wrapMd?: WRAP;
  /** Applies the `flex-wrap` container property to the row for large screens */
  wrapLg?: WRAP;
  /** Applies the `flex-wrap` container property to the row for extra-large screens */
  wrapXl?: WRAP;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Row = React.forwardRef<HTMLDivElement, IRowProps>(({ wrap, ...props }, ref) => {
  const { gutters, debug } = useGridContext();

  return <StyledRow gutters={gutters} debug={debug} wrapAll={wrap} ref={ref} {...props} />;
});

Row.displayName = 'Row';

Row.propTypes = {
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
  justifyContentXl: PropTypes.oneOf(ARRAY_JUSTIFY_CONTENT),
  wrap: PropTypes.oneOf(ARRAY_WRAP),
  wrapXs: PropTypes.oneOf(ARRAY_WRAP),
  wrapSm: PropTypes.oneOf(ARRAY_WRAP),
  wrapMd: PropTypes.oneOf(ARRAY_WRAP),
  wrapLg: PropTypes.oneOf(ARRAY_WRAP),
  wrapXl: PropTypes.oneOf(ARRAY_WRAP)
};
