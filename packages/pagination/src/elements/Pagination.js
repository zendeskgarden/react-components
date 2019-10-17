/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { usePagination } from '@zendeskgarden/container-pagination';
import { getControlledValue } from '@zendeskgarden/container-utilities';

import PaginationView from '../views/PaginationView';
import Page from '../views/Page';
import Gap from '../views/Gap';
import NextPage from '../views/NextPage';
import PreviousPage from '../views/PreviousPage';

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';

export const PAGE_TYPE = {
  NEXT_PAGE: 'next',
  PAGE: 'page',
  GAP: 'gap',
  PREVIOUS_PAGE: 'previous'
};

/**
 * High-abstraction element for the `Pagination` pattern
 */
function Pagination({
  id,
  currentPage: controlledCurrentPage,
  transformPageProps,
  totalPages,
  pagePadding,
  onChange,
  ...otherProps
}) {
  const [focusedItem, setFocusedItem] = useState();
  const [internalCurrentPage, setCurrentPage] = useState(1);
  const currentPage = getControlledValue(controlledCurrentPage, internalCurrentPage);

  const { getContainerProps, getPageProps, getPreviousPageProps, getNextPageProps } = usePagination(
    {
      id,
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
    }
  );

  const getTransformedProps = (pageType, props = {}) => {
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
      return <PreviousPage {...getTransformedProps(PAGE_TYPE.PREVIOUS_PAGE, { hidden: true })} />;
    }

    return (
      <PreviousPage
        {...getTransformedProps(
          PAGE_TYPE.PREVIOUS_PAGE,
          getPreviousPageProps({
            key: PREVIOUS_KEY,
            focused: focusedItem === PREVIOUS_KEY,
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
      return <NextPage hidden />;
    }

    return (
      <NextPage
        {...getTransformedProps(
          PAGE_TYPE.NEXT_PAGE,
          getNextPageProps({
            item: NEXT_KEY,
            key: NEXT_KEY,
            focused: focusedItem === NEXT_KEY,
            ref: focusRef,
            focusRef
          })
        )}
      />
    );
  };

  const createPage = pageIndex => {
    const focusRef = React.createRef();

    return (
      <Page
        {...getTransformedProps(
          PAGE_TYPE.PAGE,
          getPageProps({
            current: currentPage === pageIndex,
            focused: focusedItem === pageIndex,
            key: pageIndex,
            item: pageIndex,
            page: pageIndex,
            ref: focusRef,
            focusRef
          })
        )}
      >
        {pageIndex}
      </Page>
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
      if (pageIndex >= currentPage - pagePadding && pageIndex <= currentPage + pagePadding) {
        pages.push(createPage(pageIndex));
        continue;
      }

      // Handle case where front gap should not be displayed
      if (currentPage <= pagePadding + 3 && pageIndex <= pagePadding * 2 + 3) {
        pages.push(createPage(pageIndex));
        continue;
      }

      // Handle case where back gap should not be displayed
      if (
        currentPage >= totalPages - pagePadding - 2 &&
        pageIndex >= totalPages - pagePadding * 2 - 4
      ) {
        pages.push(createPage(pageIndex));
        continue;
      }

      // Render Gap and determine next starting pageIndex
      if (pageIndex < currentPage) {
        pages.push(<Gap {...getTransformedProps(PAGE_TYPE.GAP, { key: `gap-${pageIndex}` })} />);

        if (currentPage >= totalPages - pagePadding - 2) {
          pageIndex = totalPages - pagePadding * 2 - 3;
        } else {
          pageIndex = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(<Gap {...getTransformedProps(PAGE_TYPE.GAP, { key: `gap-${pageIndex}` })} />);
        pageIndex = totalPages - 1;
      }
    }

    return pages;
  };

  return (
    <PaginationView {...getContainerProps()}>
      {renderPreviousPage(getPreviousPageProps)}
      {renderPages(getPageProps)}
      {renderNextPage(getNextPageProps)}
    </PaginationView>
  );
}

Pagination.propTypes = {
  /**
   * The currently selected page
   */
  currentPage: PropTypes.number.isRequired,
  /**
   * The total number of pages available
   */
  totalPages: PropTypes.number.isRequired,
  /**
   * The number of pages to pad the currentPage with
   * when determining the Gap placement
   */
  pagePadding: PropTypes.number,
  /**
   * @param {Any} currentPage - The newly selected page
   */
  onChange: PropTypes.func,
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: PropTypes.string,
  /**
   * Allows custom props to be applied to each page element. Useful for QA attributes and localization.
   * @param {String} pageType - Unique type for each page type: "previous", "page", "gap", and "next"
   * @param {Object} pageProps - The props to be transformed for the page object
   */
  transformPageProps: PropTypes.func
};

Pagination.defaultProps = {
  pagePadding: 2
};

export default withTheme(Pagination);
