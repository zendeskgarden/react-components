/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { ControlledComponent, IdManager } from '@zendesk/garden-react-selection';

import PaginationContainer from '../containers/PaginationContainer';
import PaginationView from '../views/PaginationView';
import Page from '../views/Page';
import Gap from '../views/Gap';
import NextPage from '../views/NextPage';
import PreviousPage from '../views/PreviousPage';

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';

export default class Pagination extends ControlledComponent {
  static propTypes = {
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
     * @param {Object} newState
     * @param {Any} newState.currentPage - The newly selected page
     */
    onStateChange: PropTypes.func,
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.string
  };

  static defaultProps = {
    pagePadding: 2
  };

  constructor(...args) {
    super(...args);

    this.state = {
      currentPage: undefined,
      focusedKey: undefined,
      id: IdManager.generateId()
    };
  }

  renderPreviousPage = getPreviousPageProps => {
    const { focusedKey, currentPage } = this.getControlledState();
    const isFirstPageSelected = currentPage === 1;

    // The PreviousPage element should be hidden when first page is selected
    if (isFirstPageSelected) {
      return <PreviousPage hidden />;
    }

    return (
      <PreviousPage
        {...getPreviousPageProps({ key: PREVIOUS_KEY, focused: focusedKey === PREVIOUS_KEY })}
      />
    );
  };

  renderNextPage = getNextPageProps => {
    const { focusedKey, currentPage } = this.getControlledState();
    const { totalPages } = this.props;
    const isLastPageSelected = currentPage === totalPages;

    // The NextPage element should be hidden when the last page is selected
    if (isLastPageSelected) {
      return <NextPage hidden />;
    }

    return <NextPage {...getNextPageProps({ key: NEXT_KEY, focused: focusedKey === NEXT_KEY })} />;
  };

  createPage = (pageIndex, getPageProps) => {
    const { focusedKey, currentPage } = this.getControlledState();

    return (
      <Page
        {...getPageProps({
          current: currentPage === pageIndex,
          focused: focusedKey === pageIndex,
          key: pageIndex
        })}
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
        pages.push(<Gap key={`gap-${pageIndex}`} />);

        if (currentPage >= totalPages - pagePadding - 2) {
          pageIndex = totalPages - pagePadding * 2 - 3;
        } else {
          pageIndex = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(<Gap key={`gap-${pageIndex}`} />);
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
    const { totalPages } = this.props;
    const { currentPage, focusedKey } = this.getControlledState();

    const shouldBeFocused =
      typeof focusedKey !== 'undefined' && typeof newProps.focusedKey === 'undefined';

    if (newProps.selectedKey === PREVIOUS_KEY && currentPage > 1) {
      newProps.currentPage = currentPage - 1;

      // Must manually change focusedKey once PreviousPage is no longer visible
      if (newProps.currentPage === 1 && shouldBeFocused) {
        newProps.focusedKey = 1;
      }
    } else if (newProps.selectedKey === NEXT_KEY && currentPage < totalPages) {
      newProps.currentPage = currentPage + 1;

      // Must manually change focusedKey once NextPage is no longer visible
      if (newProps.currentPage === totalPages && shouldBeFocused) {
        newProps.focusedKey = totalPages;
      }
    } else if (typeof newProps.selectedKey === 'number') {
      newProps.currentPage = newProps.selectedKey;
    }

    this.setControlledState(newProps);
  };

  render() {
    const { id, focusedKey, currentPage } = this.getControlledState();

    return (
      <PaginationContainer
        id={id}
        focusedKey={focusedKey}
        selectedKey={currentPage}
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
