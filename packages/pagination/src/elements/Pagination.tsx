/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { usePagination } from '@zendeskgarden/container-pagination';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import {
  StyledPagination,
  StyledPage,
  StyledGap,
  StyledNextPage,
  StyledPreviousPage
} from '../styled';

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
   * The number of pages to pad the currentPage with
   * when determining the Gap placement
   */
  pagePadding?: number;
  /**
   * @param {Any} currentPage - The newly selected page
   */
  onChange?: (updatedCurrentPage: number) => void;
  /**
   * Allows custom props to be applied to each page element. Useful for QA attributes and localization.
   */
  transformPageProps?: (pageTypes: PAGE_TYPE, props: any) => any;
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
      rtl: isRtl(otherProps),
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

    const renderPreviousPage = () => {
      const isFirstPageSelected = currentPage === 1;
      const focusRef = React.createRef();

      // The PreviousPage element should be hidden when first page is selected
      if (isFirstPageSelected) {
        return <StyledPreviousPage {...getTransformedProps('previous', { hidden: true })} />;
      }

      return (
        <StyledPreviousPage
          {...getTransformedProps(
            'previous',
            getPreviousPageProps({
              key: PREVIOUS_KEY,
              isFocused: focusedItem === PREVIOUS_KEY,
              item: PREVIOUS_KEY,
              ref: focusRef,
              focusRef
            })
          )}
        />
      );
    };

    const renderNextPage = () => {
      const isLastPageSelected = currentPage === totalPages;
      const focusRef = React.createRef();

      // The NextPage element should be hidden when the last page is selected
      if (isLastPageSelected) {
        return <StyledNextPage {...getTransformedProps('next', { hidden: true })} />;
      }

      return (
        <StyledNextPage
          {...getTransformedProps(
            'next',
            getNextPageProps({
              item: NEXT_KEY,
              key: NEXT_KEY,
              isFocused: focusedItem === NEXT_KEY,
              ref: focusRef,
              focusRef
            })
          )}
        />
      );
    };

    const createPage = (pageIndex: number) => {
      const focusRef = React.createRef();

      return (
        <StyledPage
          {...getTransformedProps(
            'page',
            getPageProps({
              selectedAriaKey: 'aria-current',
              key: pageIndex,
              item: pageIndex,
              page: pageIndex,
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

      for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
        // Always display the current page
        if (pageIndex === currentPage) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Always display the first and last page
        if (pageIndex === 1 || pageIndex === totalPages) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Display pages used for padding around the current page
        if (pageIndex >= currentPage - pagePadding! && pageIndex <= currentPage + pagePadding) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Handle case where front gap should not be displayed
        if (currentPage <= pagePadding! + 3 && pageIndex <= pagePadding! * 2 + 3) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Handle case where back gap should not be displayed
        if (
          currentPage >= totalPages - pagePadding! - 2 &&
          pageIndex >= totalPages - pagePadding! * 2 - 4
        ) {
          pages.push(createPage(pageIndex));
          continue;
        }

        // Render Gap and determine next starting pageIndex
        if (pageIndex < currentPage) {
          pages.push(
            <StyledGap {...getTransformedProps('gap', { key: `gap-${pageIndex}` })}>…</StyledGap>
          );

          if (currentPage >= totalPages - pagePadding! - 2) {
            pageIndex = totalPages - pagePadding! * 2 - 3;
          } else {
            pageIndex = currentPage - pagePadding! - 1;
          }
        } else {
          pages.push(
            <StyledGap {...getTransformedProps('gap', { key: `gap-${pageIndex}` })}>…</StyledGap>
          );
          pageIndex = totalPages - 1;
        }
      }

      return pages;
    };

    return (
      <StyledPagination {...getContainerProps(otherProps)} ref={ref}>
        {renderPreviousPage()}
        {renderPages()}
        {renderNextPage()}
      </StyledPagination>
    );
  }
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pagePadding: PropTypes.number,
  onChange: PropTypes.func,
  transformPageProps: PropTypes.func
};

Pagination.defaultProps = {
  pagePadding: 2
};

export default withTheme(Pagination) as React.ForwardRefExoticComponent<
  IPaginationProps & React.RefAttributes<HTMLUListElement>
>;
