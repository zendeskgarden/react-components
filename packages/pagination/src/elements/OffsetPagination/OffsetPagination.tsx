/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import { IPaginationProps } from '../../types';
import { StyledListItem, StyledNav, StyledList } from '../../styled';
import { Previous } from './components/Previous';
import { Next } from './components/Next';
import { Page } from './components/Page';
import { Gap } from './components/Gap';

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const OffsetPagination = forwardRef<HTMLUListElement, IPaginationProps>(
  (
    {
      currentPage: controlledCurrentPage,
      totalPages,
      pagePadding,
      pageGap,
      onChange,
      'aria-label': ariaLabel,
      labels,
      ...otherProps
    },
    ref
  ) => {
    const [focusedItem, setFocusedItem] = useState<number | string>();
    const [internalCurrentPage, setInternalCurrentPage] = useState(1);
    const navigationLabel = useText(
      OffsetPagination,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Pagination'
    );
    const currentPage = getControlledValue(controlledCurrentPage, internalCurrentPage)!;

    const handleFocus = useCallback<(item: string | number | undefined) => void>(item => {
      setFocusedItem(item);
    }, []);

    const handleSelect = useCallback<(item: string | number) => void>(
      item => {
        let updatedCurrentPage = item;
        let updatedFocusedKey = focusedItem;

        if (updatedCurrentPage === PREVIOUS_KEY && currentPage > 1) {
          updatedCurrentPage = currentPage - 1;

          // Must manually change focusedKey once PreviousPage is no longer visible
          if (updatedCurrentPage === 1 && focusedItem === PREVIOUS_KEY) {
            updatedFocusedKey = 1;
          }
        } else if (updatedCurrentPage === NEXT_KEY && currentPage < totalPages) {
          updatedCurrentPage = currentPage + 1;

          // Must manually change focusedKey once NextPage is no longer visible
          if (updatedCurrentPage === totalPages && updatedFocusedKey === NEXT_KEY) {
            updatedFocusedKey = totalPages;
          }
        }

        if (onChange && updatedCurrentPage !== undefined) {
          onChange(updatedCurrentPage as number);
        }

        setFocusedItem(updatedFocusedKey);
        setInternalCurrentPage(updatedCurrentPage as number);
      },
      [currentPage, focusedItem, onChange, totalPages]
    );

    const renderPreviousPage = () => {
      const isFirstPageSelected = totalPages > 0 && currentPage === 1;

      return (
        <StyledListItem>
          <Previous
            hidden={isFirstPageSelected}
            onFocus={() => handleFocus('previous')}
            onClick={() => handleSelect('previous')}
            aria-label={labels?.previous}
          />
        </StyledListItem>
      );
    };

    const renderNextPage = () => {
      const isLastPageSelected = currentPage === totalPages;

      return (
        <StyledListItem>
          <Next
            hidden={isLastPageSelected}
            onFocus={() => handleFocus('next')}
            onClick={() => handleSelect('next')}
            aria-label={labels?.next}
          />
        </StyledListItem>
      );
    };

    const createGap = (pageIndex: number) => (
      <Gap key={`gap-${pageIndex}`} aria-label={labels?.gap} />
    );

    const createPage = (pageIndex: number) => {
      return (
        <StyledListItem key={pageIndex}>
          <Page
            onFocus={() => handleFocus(pageIndex)}
            onClick={() => handleSelect(pageIndex)}
            aria-current={currentPage === pageIndex ? 'page' : undefined}
            aria-label={labels?.renderPage?.(pageIndex)}
          >
            {pageIndex}
          </Page>
        </StyledListItem>
      );
    };

    /**
     * Renders all Page and Gap Elements based on pagePadding prop
     */
    const renderPages = () => {
      const pages = [];
      const PADDING = pagePadding!;
      const GAP = pageGap!;

      for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
        // Always display current, first, and last pages
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

        // Display padded window of pages
        if (
          (pageIndex >= minimum && pageIndex <= currentPage) ||
          (pageIndex >= currentPage && pageIndex <= maximum)
        ) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Handle start gap
        if (pageIndex === GAP) {
          if (minimum > GAP + 1 && currentPage > GAP + PADDING + 1) {
            pages.push(createGap(pageIndex));
          } else {
            pages.push(createPage(pageIndex));
          }

          continue;
        }

        // Handle end gap
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

    return (
      <StyledNav aria-label={navigationLabel}>
        <StyledList {...otherProps} ref={ref}>
          {renderPreviousPage()}
          {totalPages > 0 && renderPages()}
          {renderNextPage()}
        </StyledList>
      </StyledNav>
    );
  }
);

OffsetPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagePadding: PropTypes.number,
  pageGap: PropTypes.number,
  onChange: PropTypes.func,
  labels: PropTypes.any
};

OffsetPagination.defaultProps = {
  pagePadding: 2,
  pageGap: 2
};

OffsetPagination.displayName = 'OffsetPagination';
