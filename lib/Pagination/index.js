"use strict";

exports.__esModule = true;

var _isInteger = require("babel-runtime/core-js/number/is-integer");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var _Gap = require("./Gap");

var _Gap2 = _interopRequireDefault(_Gap);

var _PageIncrement = require("./PageIncrement");

var _PageIncrement2 = _interopRequireDefault(_PageIncrement);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function (_ThemedComponent) {
  (0, _inherits3.default)(Pagination, _ThemedComponent);

  function Pagination(props, context) {
    (0, _classCallCheck3.default)(this, Pagination);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: _styles2.default
    }));

    _initialiseProps.call(_this);

    _this.mouseInitiated = false;
    _this.state = {
      pages: [],
      currentSelectedPage: undefined
    };

    _this.selectionModel = new _ReactSingleSelectionModel2.default({
      rtl: props.dir === "rtl",
      vertical: false
    });
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = _this.onValueChosen;
    _this.selectionModel.onHome = _this.onHomePressed;
    _this.selectionModel.onEnd = _this.onEndPressed;
    return _this;
  }

  /**
   * When the user presses Home we should select the first page, not the page incrementer.
   */


  /**
   * When the user presses End we should select the last page, not the page incrementer.
   */


  Pagination.prototype.componentWillMount = function componentWillMount() {
    this.setSelectableItems(this.props);
  };

  Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.selectionModel.rtl = nextProps.dir === "rtl";
    this.setSelectableItems(nextProps);
  };

  Pagination.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var theme = this.theme;
    var _props = this.props,
        dir = _props.dir,
        tabIndex = _props.tabIndex,
        testId = _props.testId;
    var _state = this.state,
        pages = _state.pages,
        currentSelectedPage = _state.currentSelectedPage;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.pagination, (_classNames = {}, _classNames[theme.is_rtl] = dir === "rtl", _classNames)),
        role: "navigation",
        "aria-label": "Pagination",
        testId: testId,
        onFocus: function onFocus() {
          if (!_this2.selectionModel.hasSelection() && !_this2.mouseInitiated) {
            // We should focus the current page on initial focus.
            _this2.selectionModel.reactivate(currentSelectedPage);
          }

          _this2.mouseInitiated = false;
        },
        onMouseDown: function onMouseDown() {
          // Necessary to not focus on first page when initially focused with mouse.
          _this2.mouseInitiated = true;

          setTimeout(function () {
            _this2.mouseInitiated = false;
          }, 0);
        },
        onBlur: function onBlur() {
          _this2.selectionModel.clear();
        },
        onKeyDown: this.selectionModel.handleKeyDown,
        tabIndex: tabIndex
      },
      pages
    );
  };

  return Pagination;
}(_ThemedComponent3.default);

Pagination.propTypes = {
  /**
   * The index (**integer**) of the current page that is selected.
   */
  currentPage: function currentPage(_ref) {
    var _currentPage = _ref.currentPage,
        total = _ref.total;

    if (!(0, _isInteger2.default)(_currentPage)) {
      throw new Error("The current page must be a whole number (integer).");
    } else if (_currentPage >= total) {
      throw new Error("The current page must be less than the total number of pages.");
    }
  },
  /**
   * The total number (**integer**) of pages available.
   */
  total: function total(_ref2) {
    var _total = _ref2.total;

    if (!(0, _isInteger2.default)(_total)) {
      throw new Error("The total must be a whole number (integer).");
    } else if (_total < 1) {
      throw new Error("The total must be greater than 0.");
    }
  },
  /**
   * Callback that is triggered when a page is selected. Passes the current selected page index.
   */
  onPageSelected: _propTypes2.default.func,
  /**
   * The number (**integer**) of pages to pad your currently selected page.
   */
  pagePadding: function pagePadding(_ref3) {
    var _pagePadding = _ref3.pagePadding;

    if (typeof _pagePadding === "undefined") {
      return null;
    } else if (!(0, _isInteger2.default)(_pagePadding)) {
      throw new Error("Page padding must be a whole number (integer).");
    } else if (_pagePadding < 1) {
      throw new Error("Page padding must be greater than 0.");
    }
  },
  /**
   * Used to allow localization of the aria-label for page elements, is English by default.  Is passed the "currentPage" as a parameter.
   */
  pageLabelFormatter: _propTypes2.default.func,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string
};
Pagination.defaultProps = {
  dir: "ltr",
  tabIndex: 0,
  pagePadding: 2
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onSelectionChanged = function () {
    _this3.setState({ pages: _this3.selectionModel.items });
  };

  this.onValueChosen = function (selectedPage) {
    if (selectedPage === "previous") {
      _this3.assignCurrentPage(_this3.props.currentPage - 1);

      // We must clear the previous buttons selection since it is now disabled.
      if (_this3.props.currentPage === 1) {
        _this3.selectionModel.clear();
      }
    } else if (selectedPage === "next") {
      _this3.assignCurrentPage(_this3.props.currentPage + 1);

      // We must clear the next buttons selection since it is now disabled.
      if (_this3.props.currentPage === _this3.props.total - 2) {
        _this3.selectionModel.clear();
      }
    } else {
      _this3.assignCurrentPage(selectedPage);
    }
  };

  this.onHomePressed = function (event) {
    var selectedItem = _this3.selectionModel.model.items[0];

    if (selectedItem.key === "previous") {
      selectedItem = _this3.selectionModel.model.items[1];
    }

    _this3.selectionModel.model.select(selectedItem);
    event.preventDefault();
    event.stopPropagation();
  };

  this.onEndPressed = function (event) {
    var selectedItem = _this3.selectionModel.model.items[_this3.selectionModel.model.items.length - 1];
    if (selectedItem.key === "next") {
      selectedItem = _this3.selectionModel.model.items[_this3.selectionModel.model.items.length - 2];
    }

    _this3.selectionModel.model.select(selectedItem);
    event.preventDefault();
    event.stopPropagation();
  };

  this.assignCurrentPage = function (currentPage) {
    _this3.props.onPageSelected(currentPage);
  };

  this.pageAriaLabelFormatter = function (currentPage) {
    var pageLabelFormatter = _this3.props.pageLabelFormatter;


    if (pageLabelFormatter) {
      return pageLabelFormatter(currentPage);
    }

    return "Page " + currentPage;
  };

  this.createPage = function (pageIndex, currentPage, isAnimated) {
    return _react2.default.createElement(
      _Page2.default,
      {
        isCurrent: pageIndex === currentPage,
        isAnimated: isAnimated,
        key: pageIndex,
        ariaLabel: _this3.pageAriaLabelFormatter(pageIndex + 1),
        onSelection: function onSelection() {
          // We should remove the focus state when the page is selected.
          _this3.selectionModel.clear();
          _this3.assignCurrentPage(pageIndex);
        },
        value: pageIndex
      },
      pageIndex + 1
    );
  };

  this.setSelectableItems = function (props) {
    var total = props.total,
        pagePadding = props.pagePadding,
        currentPage = props.currentPage;

    var currentSelectedPage = void 0;

    var pages = [_react2.default.createElement(_PageIncrement2.default, {
      key: "previous",
      value: "previous",
      description: "Previous Page",
      disabled: currentPage === 0,
      onSelection: function onSelection() {
        // We should remove the focus state when current page is incremented.
        _this3.selectionModel.clear();
        _this3.assignCurrentPage(currentPage - 1);
      }
    })];

    for (var x = 0; x < total; x++) {
      if (x === currentPage) {
        currentSelectedPage = _this3.createPage(x, currentPage, true);
        pages.push(currentSelectedPage);
        continue;
      }

      // Always display the first and last page
      if (x === 0 || x === total - 1) {
        pages.push(_this3.createPage(x, currentPage, true));
        continue;
      }

      // Display pages used for padding around the current page
      if (x >= currentPage - pagePadding && x <= currentPage + pagePadding) {
        pages.push(_this3.createPage(x, currentPage, false));
        continue;
      }

      // Handle case where front gap should not be displayed
      if (currentPage <= pagePadding + 2 && x <= pagePadding * 2 + 2) {
        pages.push(_this3.createPage(x, currentPage, true));
        continue;
      }

      // Handle case where back gap should not be displayed
      if (currentPage >= total - pagePadding - 3 && x >= total - pagePadding * 2 - 4) {
        pages.push(_this3.createPage(x, currentPage, true));
        continue;
      }

      if (x < currentPage) {
        pages.push(_react2.default.createElement(_Gap2.default, { key: x }));

        if (currentPage >= total - pagePadding - 2) {
          x = total - pagePadding * 2 - 4;
        } else {
          x = currentPage - pagePadding - 1;
        }
      } else {
        pages.push(_react2.default.createElement(_Gap2.default, { key: x }));
        x = total - 2;
      }
    }

    pages.push(_react2.default.createElement(_PageIncrement2.default, {
      key: "next",
      value: "next",
      description: "Next Page",
      disabled: currentPage === total - 1,
      onSelection: function onSelection() {
        // We should remove the focus state when current page is incremented.
        _this3.selectionModel.clear();
        _this3.assignCurrentPage(currentPage + 1);
      }
    }));

    _this3.selectionModel.items = pages;
    _this3.setState({
      pages: _this3.selectionModel.items,
      currentSelectedPage: currentSelectedPage
    });
  };
};

exports.default = Pagination;