/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import { StyledList } from '../../styled/OffsetPagination/StyledList.js';
import { StyledListItem } from '../../styled/OffsetPagination/StyledListItem.js';
import '../../styled/OffsetPagination/StyledPage.js';
import '../../styled/CursorPagination/StyledCursorPagination.js';
import '../../styled/CursorPagination/StyledCursor.js';
import '../../styled/CursorPagination/StyledIcon.js';
import '../../styled/OffsetPagination/StyledGapListItem.js';
import '../../styled/OffsetPagination/StyledNavigation.js';
import { StyledNav } from '../../styled/OffsetPagination/StyledNav.js';
import { Previous } from './components/Previous.js';
import { Next } from './components/Next.js';
import { Page } from './components/Page.js';
import { Gap } from './components/Gap.js';

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';
const OffsetPagination = forwardRef((_ref, ref) => {
  let {
    currentPage: controlledCurrentPage,
    totalPages,
    pagePadding = 2,
    pageGap = 2,
    onChange,
    'aria-label': ariaLabel,
    labels,
    ...otherProps
  } = _ref;
  const [focusedItem, setFocusedItem] = useState();
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);
  const navigationLabel = useText(OffsetPagination, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Pagination');
  const currentPage = getControlledValue(controlledCurrentPage, internalCurrentPage);
  const handleFocus = useCallback(item => {
    setFocusedItem(item);
  }, []);
  const handleSelect = useCallback(item => {
    let updatedCurrentPage = item;
    let updatedFocusedKey = focusedItem;
    if (updatedCurrentPage === PREVIOUS_KEY && currentPage > 1) {
      updatedCurrentPage = currentPage - 1;
      if (updatedCurrentPage === 1 && focusedItem === PREVIOUS_KEY) {
        updatedFocusedKey = 1;
      }
    } else if (updatedCurrentPage === NEXT_KEY && currentPage < totalPages) {
      updatedCurrentPage = currentPage + 1;
      if (updatedCurrentPage === totalPages && updatedFocusedKey === NEXT_KEY) {
        updatedFocusedKey = totalPages;
      }
    }
    if (onChange && updatedCurrentPage !== undefined) {
      onChange(updatedCurrentPage);
    }
    setFocusedItem(updatedFocusedKey);
    setInternalCurrentPage(updatedCurrentPage);
  }, [currentPage, focusedItem, onChange, totalPages]);
  const renderPreviousPage = () => {
    const isFirstPageSelected = totalPages > 0 && currentPage === 1;
    return React__default.createElement(StyledListItem, null, React__default.createElement(Previous, {
      hidden: isFirstPageSelected,
      onFocus: () => handleFocus('previous'),
      onClick: () => handleSelect('previous'),
      "aria-label": labels?.previous
    }));
  };
  const renderNextPage = () => {
    const isLastPageSelected = currentPage === totalPages;
    return React__default.createElement(StyledListItem, null, React__default.createElement(Next, {
      hidden: isLastPageSelected,
      onFocus: () => handleFocus('next'),
      onClick: () => handleSelect('next'),
      "aria-label": labels?.next
    }));
  };
  const createGap = pageIndex => React__default.createElement(Gap, {
    key: `gap-${pageIndex}`,
    "aria-label": labels?.gap
  });
  const createPage = pageIndex => {
    return React__default.createElement(StyledListItem, {
      key: pageIndex
    }, React__default.createElement(Page, {
      onFocus: () => handleFocus(pageIndex),
      onClick: () => handleSelect(pageIndex),
      "aria-current": currentPage === pageIndex ? 'page' : undefined,
      "aria-label": labels?.renderPage?.(pageIndex)
    }, pageIndex));
  };
  const renderPages = () => {
    const pages = [];
    const PADDING = pagePadding;
    const GAP = pageGap;
    for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
      if (pageIndex === currentPage || pageIndex < GAP || pageIndex > totalPages - GAP + 1) {
        pages.push(createPage(pageIndex));
        continue;
      }
      let minimum;
      let maximum;
      if (currentPage <= GAP + PADDING) {
        minimum = GAP + 1;
        maximum = minimum + PADDING * 2;
      } else if (currentPage >= totalPages - GAP - PADDING) {
        maximum = totalPages - GAP;
        minimum = maximum - PADDING * 2;
      } else {
        minimum = currentPage - PADDING;
        maximum = currentPage + PADDING;
      }
      if (pageIndex >= minimum && pageIndex <= currentPage || pageIndex >= currentPage && pageIndex <= maximum) {
        pages.push(createPage(pageIndex));
        continue;
      }
      if (pageIndex === GAP) {
        if (minimum > GAP + 1 && currentPage > GAP + PADDING + 1) {
          pages.push(createGap(pageIndex));
        } else {
          pages.push(createPage(pageIndex));
        }
        continue;
      }
      if (pageIndex === totalPages - GAP + 1) {
        if (maximum < totalPages - GAP && currentPage < totalPages - GAP - PADDING) {
          pages.push(createGap(pageIndex));
        } else {
          pages.push(createPage(pageIndex));
        }
        continue;
      }
    }
    return pages;
  };
  return React__default.createElement(StyledNav, {
    "aria-label": navigationLabel
  }, React__default.createElement(StyledList, Object.assign({}, otherProps, {
    ref: ref
  }), renderPreviousPage(), totalPages > 0 && renderPages(), renderNextPage()));
});
OffsetPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagePadding: PropTypes.number,
  pageGap: PropTypes.number,
  onChange: PropTypes.func,
  labels: PropTypes.any
};
OffsetPagination.displayName = 'OffsetPagination';

export { OffsetPagination };
