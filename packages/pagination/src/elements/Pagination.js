/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { usePagination } from '@zendeskgarden/container-pagination';

import PaginationContainer from '../containers/PaginationContainer';
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

const getTransformedProps = (pageType, props = {}) => {
  const { transformPageProps } = props;

  if (transformPageProps) {
    return transformPageProps(pageType, props);
  }

  return props;
};

const renderPreviousPage = ({ getPreviousPageProps, focusedItem, currentPage }) => {
  const isFirstPageSelected = currentPage === 1;

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
          item: PREVIOUS_KEY,
          focusRef: createRef(null),
          focused: focusedItem === PREVIOUS_KEY
        })
      )}
    />
  );
};

const renderNextPage = ({ getNextPageProps, focusedItem, currentPage, totalPages }) => {
  const isLastPageSelected = currentPage === totalPages;

  // The NextPage element should be hidden when the last page is selected
  if (isLastPageSelected) {
    return <NextPage hidden />;
  }

  return (
    <NextPage
      {...getTransformedProps(
        PAGE_TYPE.NEXT_PAGE,
        getNextPageProps({
          key: NEXT_KEY,
          item: NEXT_KEY,
          focusRef: createRef(null),
          focused: focusedItem === NEXT_KEY
        })
      )}
    />
  );
};

const createPage = ({ pageIndex, getPageProps, focusedItem, currentPage }) => {
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
          focusRef: createRef(null)
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
const renderPages = ({ getPageProps, totalPages, pagePadding, currentPage, focusedItem }) => {
  const pages = [];

  for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
    // Always display the current page
    if (pageIndex === currentPage) {
      pages.push(createPage({ pageIndex, getPageProps, focusedItem, currentPage }));
      continue;
    }

    // Always display the first and last page
    if (pageIndex === 1 || pageIndex === totalPages) {
      pages.push(createPage({ pageIndex, getPageProps, focusedItem, currentPage }));
      continue;
    }

    // Display pages used for padding around the current page
    if (pageIndex >= currentPage - pagePadding && pageIndex <= currentPage + pagePadding) {
      pages.push(createPage({ pageIndex, getPageProps, focusedItem, currentPage }));
      continue;
    }

    // Handle case where front gap should not be displayed
    if (currentPage <= pagePadding + 3 && pageIndex <= pagePadding * 2 + 3) {
      pages.push(createPage({ pageIndex, getPageProps, focusedItem, currentPage }));
      continue;
    }

    // Handle case where back gap should not be displayed
    if (
      currentPage >= totalPages - pagePadding - 2 &&
      pageIndex >= totalPages - pagePadding * 2 - 4
    ) {
      pages.push(createPage({ pageIndex, getPageProps, focusedItem, currentPage }));
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

/**
 * Since PaginationContainer only manages accessibility
 * we must mutate the data to compute currentPage
 */
const onPaginationSelect = ({ selectedItem, focusedItem, currentPage, totalPages, onChange }) => {
  if (selectedItem === PREVIOUS_KEY && currentPage > 1) {
    currentPage = currentPage - 1;

    // Must manually change focusedItem once PreviousPage is no longer visible
    if (currentPage === 1 && focusedItem === PREVIOUS_KEY) {
      focusedItem = 1;
    }
  } else if (selectedItem === NEXT_KEY && currentPage < totalPages) {
    currentPage = currentPage + 1;

    // Must manually change focusedItem once NextPage is no longer visible
    if (currentPage === totalPages && focusedItem === NEXT_KEY) {
      focusedItem = totalPages;
    }
  } else if (typeof selectedItem === 'number') {
    currentPage = selectedItem;
  }

  if (currentPage !== undefined) {
    onChange && onChange(currentPage);
  }
};

export default function Pagination({ pagePadding = 2, onChange, totalPages, currentPage }) {
  const previousPageRef = useRef(null);
  const nextPageRef = useRef(null);
  const [controlledSelectedItem, setSelectedItem] = useState(currentPage);
  const {
    selectedItem,
    focusedItem,
    getContainerProps,
    getNextPageProps,
    getPreviousPageProps,
    getPageProps
  } = usePagination({
    selectedItem: controlledSelectedItem,
    onSelect: newSelectedItem => {
      setSelectedItem({ selectedItem: newSelectedItem, focusedItem, controlledSelectedItem });
      onPaginationSelect({
        selectedItem: newSelectedItem,
        focusedItem,
        currentPage,
        totalPages,
        onChange
      });
    }
  });

  return (
    <PaginationView {...getContainerProps()}>
      {renderPreviousPage({ getPreviousPageProps, currentPage, focusedItem })}
      {renderPages({
        getPageProps,
        pagePadding,
        totalPages,
        selectedItem,
        focusedItem,
        currentPage
      })}
      {renderNextPage({ getNextPageProps, currentPage, focusedItem, totalPages })}
    </PaginationView>
  );
}

Pagination.propTypes = {
  /**
   * The currently selected page
   */
  currentPage: PropTypes.number.isRequired,
  /**
   * The currently focused key
   */
  focusedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
   * @param {Object} newState
   * @param {Any} newState.focusedItem - The newly focused page key
   * @param {Any} newState.currentPage - The newly selected page
   */
  onStateChange: PropTypes.func,
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
