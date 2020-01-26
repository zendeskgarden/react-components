/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import ChevronLeftIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import { withTheme } from '@zendeskgarden/react-theming';
import { usePagination } from '@zendeskgarden/container-pagination';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import { StyledPagination, StyledPage, StyledGap, StyledNavigation } from '../styled';

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';

export type PAGE_TYPE = 'next' | 'page' | 'gap' | 'previous';

export interface IPaginationProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> {
  /**
   * The currently selected page
   */
  currentPage: number;
  /**
   * The total number of pages available
   */
  totalPages: number;
  /**
   * The number of pages to pad the current page with when page gaps are
   * displayed
   */
  pagePadding?: number;
  /**
   * Position for the leading and trailing gap indicator, if needed based on
   * current and total pages
   */
  pageGap?: number;
  /**
   * @param {Any} currentPage - The currently selected page
   */
  onChange?: (currentPage: number) => void;
  /**
   * Apply localized labels, test attributes, etc. to individual pages.
   *
   * @param {PAGE_TYPE} pageType - the type of the page to transform props for;
   *  one of: `'previous'`, `'gap'`, `'page'`, `'next'`
   * @param {Any} props - default page props to transform
   */
  transformPageProps?: (pageType: PAGE_TYPE, props: any) => any;
}

/**
 * High-abstraction element for the `Pagination` pattern
 */
const Pagination = React.forwardRef<HTMLUListElement, IPaginationProps & ThemeProps<DefaultTheme>>(
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
    const [focusedItem, setFocusedItem] = useState();
    const [internalCurrentPage, setCurrentPage] = useState(1);
    const currentPage = getControlledValue(controlledCurrentPage, internalCurrentPage);

    const {
      getContainerProps,
      getPageProps,
      getPreviousPageProps,
      getNextPageProps
    } = usePagination({
      rtl: otherProps.theme.rtl,
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

        if (updatedCurrentPage !== undefined) {
          onChange && onChange(updatedCurrentPage);
        }

        setFocusedItem(updatedFocusedKey);
        setCurrentPage(updatedCurrentPage);
      }
    });

    const getTransformedProps = (pageType: PAGE_TYPE, props: any = {}) => {
      if (transformPageProps) {
        return transformPageProps(pageType, props);
      }

      return props;
    };

    const renderPreviousPage = (rtl: boolean) => {
      const isFirstPageSelected = totalPages > 0 && currentPage === 1;
      const focusRef = React.createRef();

      return (
        <StyledNavigation
          {...getTransformedProps(
            'previous',
            // The PreviousPage element should be hidden when first page is selected
            isFirstPageSelected
              ? { hidden: true }
              : getPreviousPageProps({
                  role: null,
                  key: PREVIOUS_KEY,
                  isFocused: focusedItem === PREVIOUS_KEY,
                  item: PREVIOUS_KEY,
                  ref: focusRef,
                  focusRef
                })
          )}
        >
          {rtl ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </StyledNavigation>
      );
    };

    const renderNextPage = (rtl: boolean) => {
      const isLastPageSelected = currentPage === totalPages;
      const focusRef = React.createRef();

      return (
        <StyledNavigation
          {...getTransformedProps(
            'next',
            // The NextPage element should be hidden when the last page is selected
            isLastPageSelected
              ? { hidden: true }
              : getNextPageProps({
                  role: null,
                  item: NEXT_KEY,
                  key: NEXT_KEY,
                  isFocused: focusedItem === NEXT_KEY,
                  ref: focusRef,
                  focusRef
                })
          )}
        >
          {rtl ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </StyledNavigation>
      );
    };

    const createGap = (pageIndex: number) => (
      <StyledGap {...getTransformedProps('gap', { key: `gap-${pageIndex}` })}>…</StyledGap>
    );

    const createPage = (pageIndex: number) => {
      const focusRef = React.createRef();

      return (
        <StyledPage
          {...getTransformedProps(
            'page',
            getPageProps({
              role: null,
              key: pageIndex,
              item: pageIndex,
              page: pageIndex,
              title: pageIndex.toString(),
              current: currentPage === pageIndex,
              ref: focusRef,
              focusRef
            })
          )}
        >
          {pageIndex}
        </StyledPage>
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
      <StyledPagination {...getContainerProps({ role: null, ...otherProps })} ref={ref}>
        {renderPreviousPage(otherProps.theme.rtl)}
        {totalPages > 0 && renderPages()}
        {renderNextPage(otherProps.theme.rtl)}
      </StyledPagination>
    );
  }
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagePadding: PropTypes.number,
  pageGap: PropTypes.number,
  onChange: PropTypes.func,
  transformPageProps: PropTypes.func
};

Pagination.defaultProps = {
  pagePadding: 2,
  pageGap: 2
};

export default withTheme(Pagination) as React.FC<
  IPaginationProps & React.RefAttributes<HTMLUListElement>
>;
