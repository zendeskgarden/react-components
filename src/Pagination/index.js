import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import ThemedComponent from "../utils/theming/ThemedComponent";

import Page from "./Page";
import Gap from "./Gap";
import PageIncrement from "./PageIncrement";
import styles from "./styles.css";

export default class Pagination extends ThemedComponent {
  static propTypes = {
    /**
     * The index (**integer**) of the current page that is selected.
     */
    currentPage: ({ currentPage, total }) => {
      if (!Number.isInteger(currentPage)) {
        throw new Error("The current page must be a whole number (integer).");
      } else if (currentPage >= total) {
        throw new Error(
          "The current page must be less than the total number of pages."
        );
      }
    },
    /**
     * The total number (**integer**) of pages available.
     */
    total: ({ total }) => {
      if (!Number.isInteger(total)) {
        throw new Error("The total must be a whole number (integer).");
      } else if (total < 1) {
        throw new Error("The total must be greater than 0.");
      }
    },
    /**
     * Callback that is triggered when a page is selected. Passes the current selected page index.
     */
    onPageSelected: PropTypes.func,
    /**
     * The number (**integer**) of pages to pad your currently selected page.
     */
    pagePadding: ({ pagePadding }) => {
      if (typeof pagePadding === "undefined") {
        return null;
      } else if (!Number.isInteger(pagePadding)) {
        throw new Error("Page padding must be a whole number (integer).");
      } else if (pagePadding < 1) {
        throw new Error("Page padding must be greater than 0.");
      }
    },
    /**
     * Used to allow localization of the aria-label for page elements, is English by default.  Is passed the "currentPage" as a parameter.
     */
    pageLabelFormatter: PropTypes.func,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    tabIndex: 0,
    pagePadding: 2
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Pagination",
      styles
    });

    this.mouseInitiated = false;
    this.state = {
      pages: [],
      currentSelectedPage: undefined
    };

    this.selectionModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: false
    });
    this.selectionModel.onSelectionChanged = this.onSelectionChanged;
    this.selectionModel.onValueChosen = this.onValueChosen;
    this.selectionModel.onHome = this.onHomePressed;
    this.selectionModel.onEnd = this.onEndPressed;
  }

  onSelectionChanged = () => {
    this.setState({ pages: this.selectionModel.items });
  };

  onValueChosen = selectedPage => {
    if (selectedPage === "previous") {
      this.assignCurrentPage(this.props.currentPage - 1);

      // We must clear the previous buttons selection since it is now disabled.
      if (this.props.currentPage === 1) {
        this.selectionModel.clear();
      }
    } else if (selectedPage === "next") {
      this.assignCurrentPage(this.props.currentPage + 1);

      // We must clear the next buttons selection since it is now disabled.
      if (this.props.currentPage === this.props.total - 2) {
        this.selectionModel.clear();
      }
    } else {
      this.assignCurrentPage(selectedPage);
    }
  };

  /**
   * When the user presses Home we should select the first page, not the page incrementer.
   */
  onHomePressed = event => {
    let selectedItem = this.selectionModel.model.items[0];

    if (selectedItem.key === "previous") {
      selectedItem = this.selectionModel.model.items[1];
    }

    this.selectionModel.model.select(selectedItem);
    event.preventDefault();
    event.stopPropagation();
  };

  /**
   * When the user presses End we should select the last page, not the page incrementer.
   */
  onEndPressed = event => {
    let selectedItem = this.selectionModel.model.items[
      this.selectionModel.model.items.length - 1
    ];
    if (selectedItem.key === "next") {
      selectedItem = this.selectionModel.model.items[
        this.selectionModel.model.items.length - 2
      ];
    }

    this.selectionModel.model.select(selectedItem);
    event.preventDefault();
    event.stopPropagation();
  };

  assignCurrentPage = currentPage => {
    this.props.onPageSelected(currentPage);
  };

  pageAriaLabelFormatter = currentPage => {
    const { pageLabelFormatter } = this.props;

    if (pageLabelFormatter) {
      return pageLabelFormatter(currentPage);
    }

    return `Page ${currentPage}`;
  };

  createPage = (pageIndex, currentPage, isAnimated) => {
    return (
      <Page
        isCurrent={pageIndex === currentPage}
        isAnimated={isAnimated}
        key={pageIndex}
        ariaLabel={this.pageAriaLabelFormatter(pageIndex + 1)}
        onSelection={() => {
          // We should remove the focus state when the page is selected.
          this.selectionModel.clear();
          this.assignCurrentPage(pageIndex);
        }}
        value={pageIndex}
      >
        {pageIndex + 1}
      </Page>
    );
  };

  setSelectableItems = props => {
    const { total, pagePadding, currentPage } = props;
    let currentSelectedPage;

    const pages = [
      <PageIncrement
        key="previous"
        value="previous"
        description="Previous Page"
        disabled={currentPage === 0}
        onSelection={() => {
          // We should remove the focus state when current page is incremented.
          this.selectionModel.clear();
          this.assignCurrentPage(currentPage - 1);
        }}
      />
    ];

    for (let x = 0; x < total; x++) {
      if (x === currentPage) {
        currentSelectedPage = this.createPage(x, currentPage, true);
        pages.push(currentSelectedPage);
        continue;
      }

      // Always display the first and last page
      if (x === 0 || x === total - 1) {
        pages.push(this.createPage(x, currentPage, true));
        continue;
      }

      // Display pages used for padding around the current page
      if (x >= currentPage - pagePadding && x <= currentPage + pagePadding) {
        pages.push(this.createPage(x, currentPage, false));
        continue;
      }

      // Handle case where front gap should not be displayed
      if (currentPage <= pagePadding + 2 && x <= pagePadding * 2 + 2) {
        pages.push(this.createPage(x, currentPage, true));
        continue;
      }

      // Handle case where back gap should not be displayed
      if (
        currentPage >= total - pagePadding - 3 &&
        x >= total - pagePadding * 2 - 4
      ) {
        pages.push(this.createPage(x, currentPage, true));
        continue;
      }

      if (x < currentPage) {
        pages.push(<Gap key={x} />);

        if (currentPage >= total - pagePadding - 2) {
          x = total - pagePadding * 2 - 4;
        } else {
          x = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(<Gap key={x} />);
        x = total - 2;
      }
    }

    pages.push(
      <PageIncrement
        key="next"
        value="next"
        description="Next Page"
        disabled={currentPage === total - 1}
        onSelection={() => {
          // We should remove the focus state when current page is incremented.
          this.selectionModel.clear();
          this.assignCurrentPage(currentPage + 1);
        }}
      />
    );

    this.selectionModel.items = pages;
    this.setState({
      pages: this.selectionModel.items,
      currentSelectedPage
    });
  };

  componentWillMount() {
    this.setSelectableItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.selectionModel.rtl = nextProps.dir === "rtl";
    this.setSelectableItems(nextProps);
  }

  render() {
    const { theme } = this;
    const { dir, tabIndex, testId } = this.props;
    const { pages, currentSelectedPage } = this.state;

    return (
      <View
        className={classNames(theme.pagination, {
          [theme.is_rtl]: dir === "rtl"
        })}
        role="navigation"
        aria-label="Pagination"
        testId={testId}
        onFocus={() => {
          if (!this.selectionModel.hasSelection() && !this.mouseInitiated) {
            // We should focus the current page on initial focus.
            this.selectionModel.reactivate(currentSelectedPage);
          }

          this.mouseInitiated = false;
        }}
        onMouseDown={() => {
          // Necessary to not focus on first page when initially focused with mouse.
          this.mouseInitiated = true;

          setTimeout(() => {
            this.mouseInitiated = false;
          }, 0);
        }}
        onBlur={() => {
          this.selectionModel.clear();
        }}
        onKeyDown={this.selectionModel.handleKeyDown}
        tabIndex={tabIndex}
      >
        {pages}
      </View>
    );
  }
}
