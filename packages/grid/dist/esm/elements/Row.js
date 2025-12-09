/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { WRAP, JUSTIFY_CONTENT, ALIGN_ITEMS } from '../types/index.js';
import useGridContext from '../utils/useGridContext.js';
import '../styled/StyledCol.js';
import '../styled/StyledGrid.js';
import { StyledRow } from '../styled/StyledRow.js';
import '../styled/pane/StyledPane.js';
import '../styled/pane/StyledPaneContent.js';
import '../styled/pane/StyledPaneSplitter.js';
import '../styled/pane/StyledPaneSplitterButton.js';
import '../styled/pane/StyledPaneSplitterButtonContainer.js';

const Row = React.forwardRef(({
  alignItems,
  alignItemsXs,
  alignItemsSm,
  alignItemsMd,
  alignItemsLg,
  alignItemsXl,
  justifyContent,
  justifyContentXs,
  justifyContentSm,
  justifyContentMd,
  justifyContentLg,
  justifyContentXl,
  wrap,
  wrapXs,
  wrapSm,
  wrapMd,
  wrapLg,
  wrapXl,
  ...props
}, ref) => {
  const {
    gutters,
    debug
  } = useGridContext();
  return React.createElement(StyledRow, Object.assign({
    $gutters: gutters,
    $debug: debug,
    $alignItems: alignItems,
    $alignItemsXs: alignItemsXs,
    $alignItemsSm: alignItemsSm,
    $alignItemsMd: alignItemsMd,
    $alignItemsLg: alignItemsLg,
    $alignItemsXl: alignItemsXl,
    $justifyContent: justifyContent,
    $justifyContentXs: justifyContentXs,
    $justifyContentSm: justifyContentSm,
    $justifyContentMd: justifyContentMd,
    $justifyContentLg: justifyContentLg,
    $justifyContentXl: justifyContentXl,
    $wrapAll: wrap,
    $wrapXs: wrapXs,
    $wrapSm: wrapSm,
    $wrapMd: wrapMd,
    $wrapLg: wrapLg,
    $wrapXl: wrapXl,
    ref: ref
  }, props));
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

export { Row };
