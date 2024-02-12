/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useContext, forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { usePagination } from '@zendeskgarden/container-pagination';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { IPaginationProps, PageType } from '../../types';
import { StyledPagination } from '../../styled';
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
      transformPageProps,
      totalPages,
      pagePadding,
      pageGap,
      onChange,
      ...otherProps
    },
    ref
  ) => {
    const [focusedItem, setFocusedItem] = useState<number | string>();
    const [internalCurrentPage, setInternalCurrentPage] = useState(1);
    const currentPage = getControlledValue(controlledCurrentPage, internalCurrentPage)!;
    const theme = useContext(ThemeContext);

    const { getContainerProps, getPageProps, getPreviousPageProps, getNextPageProps } =
      usePagination<number | string | undefined>({
        rtl: theme.rtl,
        focusedItem,
        selectedItem: currentPage,
        onFocus: item => {
          setFocusedItem(item);
        },
        onSelect: item => {
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
        }
      });

    const getTransformedProps = (pageType: PageType, props: any = {}, pageNumber?: number) => {
      if (transformPageProps) {
        return transformPageProps(pageType, props, pageNumber);
      }

      return props;
    };

    const renderPreviousPage = () => {
      const isFirstPageSelected = totalPages > 0 && currentPage === 1;
      const focusRef = React.createRef<HTMLLIElement>();
      const props = isFirstPageSelected
        ? // The PreviousPage element should be hidden when first page is selected
          { hidden: true }
        : {
            ...getPreviousPageProps({ 'aria-label': '', role: null, item: PREVIOUS_KEY, focusRef }),
            // [HACK] appease TS above and then knock-out ARIA label for fallback addition via transform below
            'aria-label': undefined
          };

      return (
        <Previous
          isFocused={focusedItem === PREVIOUS_KEY}
          {...getTransformedProps('previous', props)}
          ref={focusRef}
        />
      );
    };

    const renderNextPage = () => {
      const isLastPageSelected = currentPage === totalPages;
      const focusRef = React.createRef<HTMLLIElement>();
      const props = isLastPageSelected
        ? // The NextPage element should be hidden when the last page is selected
          { hidden: true }
        : {
            ...getNextPageProps({
              'aria-label': '',
              role: null,
              item: NEXT_KEY,
              focusRef
            }),
            // [HACK] appease TS above and then knock-out ARIA label for fallback addition via transform below
            'aria-label': undefined
          };

      return (
        <Next
          isFocused={focusedItem === NEXT_KEY}
          {...getTransformedProps('next', props)}
          ref={focusRef}
        />
      );
    };

    const createGap = (pageIndex: number) => (
      <Gap key={`gap-${pageIndex}`} {...getTransformedProps('gap')} />
    );

    const createPage = (pageIndex: number) => {
      const focusRef = React.createRef<HTMLLIElement>();
      const props = {
        ...getPageProps({ 'aria-label': '', role: null, item: pageIndex, focusRef }),
        // [HACK] appease TS above and then knock-out ARIA label for fallback addition via transform below
        'aria-label': undefined,
        title: pageIndex
      };

      return (
        <Page key={pageIndex} {...getTransformedProps('page', props, pageIndex)} ref={focusRef}>
          {pageIndex}
        </Page>
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
      <StyledPagination
        {...(getContainerProps({ role: null }) as HTMLAttributes<HTMLUListElement>)}
        {...otherProps}
        ref={ref}
      >
        {renderPreviousPage()}
        {totalPages > 0 && renderPages()}
        {renderNextPage()}
      </StyledPagination>
    );
  }
);

OffsetPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagePadding: PropTypes.number,
  pageGap: PropTypes.number,
  onChange: PropTypes.func,
  transformPageProps: PropTypes.func
};

OffsetPagination.defaultProps = {
  pagePadding: 2,
  pageGap: 2
};

OffsetPagination.displayName = 'OffsetPagination';
