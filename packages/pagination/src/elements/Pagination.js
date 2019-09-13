/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { ControlledComponent, IdManager } from '@zendeskgarden/react-selection';
import { PaginationContainer } from '@zendeskgarden/container-pagination';

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

class Pagination extends ControlledComponent {
  static propTypes = {
    /**
     * The currently selected page
     */
    currentPage: PropTypes.number.isRequired,
    /**
     * The currently focused key
     */
    focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
     * @param {Any} newState.focusedKey - The newly focused page key
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

  static defaultProps = {
    pagePadding: 2
  };

  constructor(...args) {
    super(...args);

    this.state = {
      currentPage: undefined,
      focusedKey: undefined,
      id: IdManager.generateId('garden-pagination')
    };
  }

  getTransformedProps = (pageType, props = {}) => {
    const { transformPageProps } = this.props;

    if (transformPageProps) {
      return transformPageProps(pageType, props);
    }

    return props;
  };

  renderPreviousPage = getPreviousPageProps => {
    const { focusedKey, currentPage } = this.getControlledState();
    const isFirstPageSelected = currentPage === 1;
    const focusRef = React.createRef();

    // The PreviousPage element should be hidden when first page is selected
    if (isFirstPageSelected) {
      return (
        <PreviousPage {...this.getTransformedProps(PAGE_TYPE.PREVIOUS_PAGE, { hidden: true })} />
      );
    }

    return (
      <PreviousPage
        {...this.getTransformedProps(
          PAGE_TYPE.PREVIOUS_PAGE,
          getPreviousPageProps({
            key: PREVIOUS_KEY,
            focused: focusedKey === PREVIOUS_KEY,
            item: PREVIOUS_KEY,
            ref: focusRef,
            focusRef
          })
        )}
      />
    );
  };

  renderNextPage = getNextPageProps => {
    const { focusedKey, currentPage } = this.getControlledState();
    const { totalPages } = this.props;
    const isLastPageSelected = currentPage === totalPages;
    const focusRef = React.createRef();

    // The NextPage element should be hidden when the last page is selected
    if (isLastPageSelected) {
      return <NextPage hidden />;
    }

    return (
      <NextPage
        {...this.getTransformedProps(
          PAGE_TYPE.NEXT_PAGE,
          getNextPageProps({
            item: NEXT_KEY,
            key: NEXT_KEY,
            focused: focusedKey === NEXT_KEY,
            ref: focusRef,
            focusRef
          })
        )}
      />
    );
  };

  createPage = (pageIndex, getPageProps) => {
    const { focusedKey, currentPage } = this.getControlledState();
    const focusRef = React.createRef();

    return (
      <Page
        {...this.getTransformedProps(
          PAGE_TYPE.PAGE,
          getPageProps({
            current: currentPage === pageIndex,
            focused: focusedKey === pageIndex,
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
  renderPages = getPageProps => {
    const { currentPage } = this.getControlledState();
    const { totalPages, pagePadding } = this.props;

    const pages = [];

    for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
      // Always display the current page
      if (pageIndex === currentPage) {
        pages.push(this.createPage(pageIndex, getPageProps));
        continue;
      }

      // Always display the first and last page
      if (pageIndex === 1 || pageIndex === totalPages) {
        pages.push(this.createPage(pageIndex, getPageProps));
        continue;
      }

      // Display pages used for padding around the current page
      if (pageIndex >= currentPage - pagePadding && pageIndex <= currentPage + pagePadding) {
        pages.push(this.createPage(pageIndex, getPageProps));
        continue;
      }

      // Handle case where front gap should not be displayed
      if (currentPage <= pagePadding + 3 && pageIndex <= pagePadding * 2 + 3) {
        pages.push(this.createPage(pageIndex, getPageProps));
        continue;
      }

      // Handle case where back gap should not be displayed
      if (
        currentPage >= totalPages - pagePadding - 2 &&
        pageIndex >= totalPages - pagePadding * 2 - 4
      ) {
        pages.push(this.createPage(pageIndex, getPageProps));
        continue;
      }

      // Render Gap and determine next starting pageIndex
      if (pageIndex < currentPage) {
        pages.push(
          <Gap {...this.getTransformedProps(PAGE_TYPE.GAP, { key: `gap-${pageIndex}` })} />
        );

        if (currentPage >= totalPages - pagePadding - 2) {
          pageIndex = totalPages - pagePadding * 2 - 3;
        } else {
          pageIndex = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(
          <Gap {...this.getTransformedProps(PAGE_TYPE.GAP, { key: `gap-${pageIndex}` })} />
        );
        pageIndex = totalPages - 1;
      }
    }

    return pages;
  };

  /**
   * Since PaginationContainer only manages accessibility
   * we must mutate the data to compute currentPage
   */
  onPaginationStateChange = newProps => {
    const { totalPages, onChange } = this.props;
    const { currentPage } = this.getControlledState();

    if (newProps.selectedKey === PREVIOUS_KEY && currentPage > 1) {
      newProps.currentPage = currentPage - 1;

      // Must manually change focusedKey once PreviousPage is no longer visible
      if (newProps.currentPage === 1 && newProps.focusedKey === PREVIOUS_KEY) {
        newProps.focusedKey = 1;
      }
    } else if (newProps.selectedKey === NEXT_KEY && currentPage < totalPages) {
      newProps.currentPage = currentPage + 1;

      // Must manually change focusedKey once NextPage is no longer visible
      if (newProps.currentPage === totalPages && newProps.focusedKey === NEXT_KEY) {
        newProps.focusedKey = totalPages;
      }
    } else if (typeof newProps.selectedKey === 'number') {
      newProps.currentPage = newProps.selectedKey;
    }

    if (newProps.currentPage !== undefined) {
      onChange && onChange(newProps.currentPage);
    }

    this.setControlledState(newProps);
  };

  render() {
    const { id, focusedKey, currentPage } = this.getControlledState();

    return (
      <PaginationContainer
        id={id}
        rtl={isRtl(this.props)}
        focusedItem={focusedKey}
        selectedItem={currentPage}
        onFocus={item => {
          this.setControlledState({ focusedKey: item });
        }}
        onSelect={item => {
          const { totalPages, onChange } = this.props;
          let updatedCurrentPage = item;
          let updatedFocusedKey = focusedKey;

          if (updatedCurrentPage === PREVIOUS_KEY && currentPage > 1) {
            updatedCurrentPage = currentPage - 1;

            // Must manually change focusedKey once PreviousPage is no longer visible
            if (updatedCurrentPage === 1 && focusedKey === PREVIOUS_KEY) {
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

          this.setControlledState({
            currentPage: updatedCurrentPage,
            focusedKey: updatedFocusedKey
          });
        }}
        onStateChange={this.onPaginationStateChange}
      >
        {({ getContainerProps, getPageProps, getPreviousPageProps, getNextPageProps }) => (
          <PaginationView {...getContainerProps()}>
            {this.renderPreviousPage(getPreviousPageProps)}
            {this.renderPages(getPageProps)}
            {this.renderNextPage(getNextPageProps)}
          </PaginationView>
        )}
      </PaginationContainer>
    );
  }
}

export default withTheme(Pagination);
