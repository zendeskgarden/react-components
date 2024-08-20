/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ALIGN_ITEMS, IRowProps, JUSTIFY_CONTENT, WRAP } from '../types';
import useGridContext from '../utils/useGridContext';
import { StyledRow } from '../styled';

/**
 * @deprecated use `Grid.Row` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Row = React.forwardRef<HTMLDivElement, IRowProps>(({ wrap, ...props }, ref) => {
  const { gutters, debug } = useGridContext();

  return <StyledRow gutters={gutters} debug={debug} wrapAll={wrap} ref={ref} {...props} />;
});

Row.displayName = 'Grid.Row';

Row.propTypes = {
  alignItems: PropTypes.oneOf(ALIGN_ITEMS),
  alignItemsXs: PropTypes.oneOf(ALIGN_ITEMS),
  alignItemsSm: PropTypes.oneOf(ALIGN_ITEMS),
  alignItemsMd: PropTypes.oneOf(ALIGN_ITEMS),
  alignItemsLg: PropTypes.oneOf(ALIGN_ITEMS),
  alignItemsXl: PropTypes.oneOf(ALIGN_ITEMS),
  justifyContent: PropTypes.oneOf(JUSTIFY_CONTENT),
  justifyContentXs: PropTypes.oneOf(JUSTIFY_CONTENT),
  justifyContentSm: PropTypes.oneOf(JUSTIFY_CONTENT),
  justifyContentMd: PropTypes.oneOf(JUSTIFY_CONTENT),
  justifyContentLg: PropTypes.oneOf(JUSTIFY_CONTENT),
  justifyContentXl: PropTypes.oneOf(JUSTIFY_CONTENT),
  wrap: PropTypes.oneOf(WRAP),
  wrapXs: PropTypes.oneOf(WRAP),
  wrapSm: PropTypes.oneOf(WRAP),
  wrapMd: PropTypes.oneOf(WRAP),
  wrapLg: PropTypes.oneOf(WRAP),
  wrapXl: PropTypes.oneOf(WRAP)
};
