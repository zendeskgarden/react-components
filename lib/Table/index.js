import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _getIterator from "babel-runtime/core-js/get-iterator";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { findDOMNode } from "react-dom";
import { Table as VirtualTable, AutoSizer, ArrowKeyStepper } from "react-virtualized";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";
import KEY_CODES from "../utils/keyCodes.js";

import retrieveStandardColumn from "./Column.js";
import retrieveCheckboxColumn from "./CheckboxColumn.js";
import { headerRowRenderer as _headerRowRenderer, rowRenderer as defaultRowRenderer, retrieveHeaderHeight, retrieveRowHeight } from "./Rows.js";
import styles from "./styles";

var GardenColumn = function GardenColumn() {
  _classCallCheck(this, GardenColumn);
};

var GardenCheckboxColumn = function GardenCheckboxColumn() {
  _classCallCheck(this, GardenCheckboxColumn);
};

var Table = function (_ThemedComponent) {
  _inherits(Table, _ThemedComponent);

  function Table(props, context) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Table",
      styles: styles
    }));

    _this.onRowClick = function (_ref) {
      var index = _ref.index;
      var onRowClick = _this.props.onRowClick;


      onRowClick && onRowClick(index);
      _this.onRowFocus(index, true);
    };

    _this.onRowFocus = function (focusedRow, isFocused) {
      var onRowFocus = _this.props.onRowFocus;

      onRowFocus && onRowFocus(focusedRow);

      _this.setState({
        focusedRow: focusedRow,
        isFocused: isFocused
      });
    };

    _this.onSort = function (sortState) {
      var onSort = _this.props.onSort;

      onSort && onSort(sortState);

      _this.onRowFocus(0, false);
    };

    _this.retrieveSelectedMapping = function (selectedData) {
      var mapping = {};

      for (var _iterator = selectedData, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var key = _ref2;

        mapping[key] = true;
      }

      return mapping;
    };

    _this.retrieveColumns = function () {
      var theme = _this.theme;
      var children = _this.props.children;

      var tableColumns = [];

      React.Children.forEach(children, function (child, index) {
        if (child.type === GardenColumn) {
          tableColumns.push(retrieveStandardColumn({
            columnProps: child.props,
            tableProps: _this.props,
            key: index,
            theme: theme
          }));
        } else if (child.type === GardenCheckboxColumn) {
          _this.checkboxDataKey = child.props.dataKey;
          _this.onSelection = child.props.onSelection;

          var checkboxColumn = retrieveCheckboxColumn({
            childProps: child.props,
            tableProps: _this.props,
            key: index,
            theme: theme,
            selectedMapping: _this.selectedMapping,
            onHeaderSelection: function onHeaderSelection() {
              return _this.onRowFocus(0, false);
            }
          });
          tableColumns.push(checkboxColumn);
        } else {
          tableColumns.push(child);
        }
      });

      return tableColumns;
    };

    _this.retrieveNextValidFocusIndex = function (scrollToRow) {
      var _this$props = _this.props,
          isGroupRow = _this$props.isGroupRow,
          data = _this$props.data;
      var focusedRow = _this.state.focusedRow;

      scrollToRow = scrollToRow === -1 ? 0 : scrollToRow;

      if (!isGroupRow) {
        return scrollToRow;
      }

      while (scrollToRow < data.length && scrollToRow >= 0 && isGroupRow(scrollToRow)) {
        if (scrollToRow < focusedRow && scrollToRow !== 0) {
          scrollToRow--;
        } else {
          scrollToRow++;
        }
      }

      return scrollToRow;
    };

    _this.applyKeyboardActions = function (tableReference) {
      var ref = _this.props.ref;

      ref && ref(tableReference);

      if (!_this.tableRef && tableReference) {
        _this.tableRef = tableReference;
        var gridElement = findDOMNode(_this.tableRef.Grid);

        gridElement.addEventListener("mousedown", function (event) {
          _this.focusedByMouse = true;

          setTimeout(function () {
            _this.focusedByMouse = false;
          }, 0);
        });

        gridElement.addEventListener("focusin", function (event) {
          var focusedRow = _this.state.focusedRow;


          if (!_this.focusedByMouse) {
            var newlyFocusedRow = _this.retrieveNextValidFocusIndex(focusedRow);
            _this.onRowFocus(newlyFocusedRow, true);
          }
        });

        gridElement.addEventListener("focusout", function (event) {
          _this.setState({ isFocused: false });
        });

        gridElement.addEventListener("keydown", function (event) {
          var _handlers;

          var _this$props2 = _this.props,
              data = _this$props2.data,
              onRowClick = _this$props2.onRowClick,
              isRowDisabled = _this$props2.isRowDisabled;
          var focusedRow = _this.state.focusedRow;
          var keyCode = event.keyCode;


          var handlers = (_handlers = {}, _handlers[KEY_CODES.SPACE] = function (event) {
            event.preventDefault();

            if (isRowDisabled && isRowDisabled(focusedRow)) {
              return;
            }

            var isRowSelected = _this.selectedMapping[data[focusedRow][_this.checkboxDataKey]];

            if (!isRowSelected) {
              _this.selectedMapping[data[focusedRow][_this.checkboxDataKey]] = true;
            } else {
              delete _this.selectedMapping[data[focusedRow][_this.checkboxDataKey]];
            }

            var selectedData = [];
            for (var key in _this.selectedMapping) {
              selectedData.push(key);
            }

            _this.onSelection && _this.onSelection(selectedData);
          }, _handlers[KEY_CODES.ENTER] = function (event) {
            event.preventDefault();
            onRowClick && onRowClick(focusedRow);
          }, _handlers[KEY_CODES.HOME] = function (event) {
            event.preventDefault();

            // Necessary to remove focus from nested element on key navigation
            var gridElement = findDOMNode(_this.tableRef.Grid);
            gridElement.focus();

            _this.onRowFocus(_this.retrieveNextValidFocusIndex(0), true);
          }, _handlers[KEY_CODES.END] = function (event) {
            event.preventDefault();

            // Necessary to remove focus from nested element on key navigation
            var gridElement = findDOMNode(_this.tableRef.Grid);
            gridElement.focus();

            _this.onRowFocus(_this.retrieveNextValidFocusIndex(data.length - 1), true);
          }, _handlers);

          var handler = handlers[keyCode];
          handler && handler(event);
        });
      }
    };

    _this.state = {
      focusedRow: 0,
      isFocused: false
    };
    return _this;
  }

  Table.prototype.componentWillMount = function componentWillMount() {
    var selectedData = this.props.selectedData;

    this.selectedMapping = this.retrieveSelectedMapping(selectedData);
  };

  Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var selectedData = nextProps.selectedData;

    this.selectedMapping = this.retrieveSelectedMapping(selectedData);

    this.tableRef.recomputeRowHeights();
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var theme = this.theme;

    var _props = this.props,
        className = _props.className,
        data = _props.data,
        density = _props.density,
        dir = _props.dir,
        _rowRenderer = _props.rowRenderer,
        otherTableProps = _objectWithoutProperties(_props, ["className", "data", "density", "dir", "rowRenderer"]);

    var focusedRow = this.state.focusedRow;


    return React.createElement(
      View,
      { className: classNames(theme.table_container, className) },
      React.createElement(
        AutoSizer,
        null,
        function (_ref3) {
          var width = _ref3.width,
              height = _ref3.height;
          return React.createElement(
            ArrowKeyStepper,
            {
              columnCount: 1,
              isControlled: true,
              onScrollToChange: function onScrollToChange(_ref4) {
                var scrollToRow = _ref4.scrollToRow;

                var focusedRow = _this2.retrieveNextValidFocusIndex(scrollToRow);

                // Necessary to remove focus from nested element on key navigation
                var gridElement = findDOMNode(_this2.tableRef.Grid);
                gridElement.focus();

                _this2.onRowFocus(focusedRow, true);
              },
              mode: "cells",
              rowCount: data.length,
              scrollToRow: focusedRow
            },
            function (_ref5) {
              var _classNames;

              var onSectionRendered = _ref5.onSectionRendered,
                  scrollToRow = _ref5.scrollToRow;
              return React.createElement(
                VirtualTable,
                _extends({
                  width: width,
                  height: height,
                  headerHeight: retrieveHeaderHeight(_this2.props),
                  rowHeight: function rowHeight(rowProps) {
                    return retrieveRowHeight(rowProps, _this2.props);
                  },
                  rowCount: data.length,
                  ref: _this2.applyKeyboardActions,
                  rowGetter: function rowGetter(_ref6) {
                    var index = _ref6.index;
                    return data[index];
                  },
                  className: classNames(theme.table, (_classNames = {}, _classNames[theme.table_sm] = density === "cozy", _classNames[theme.table_lg] = density === "airy", _classNames[theme.rtl] = dir === "rtl", _classNames)),
                  tabIndex: 0,
                  gridClassName: theme.grid,
                  gridStyle: { direction: dir },
                  onHeaderClick: function onHeaderClick(_ref7) {
                    var event = _ref7.event;

                    // Necessary to allow Select All to function
                    var nodeName = event.target.nodeName;
                    if (nodeName !== "INPUT" && nodeName !== "LABEL") {
                      event.preventDefault();
                    }
                  },
                  headerRowRenderer: function headerRowRenderer(rowProps) {
                    return _headerRowRenderer(rowProps, _this2.props, theme);
                  }
                }, otherTableProps, {
                  sort: _this2.onSort,
                  onRowClick: _this2.onRowClick,
                  scrollToIndex: scrollToRow,
                  rowRenderer: function rowRenderer(rowProps) {
                    if (_rowRenderer) {
                      return _rowRenderer(rowProps, function (updateRowProps) {
                        return defaultRowRenderer(updateRowProps, _this2.props, _this2.state, theme, _this2.selectedMapping);
                      });
                    }

                    return defaultRowRenderer(rowProps, _this2.props, _this2.state, theme, _this2.selectedMapping);
                  }
                }),
                _this2.retrieveColumns()
              );
            }
          );
        }
      )
    );
  };

  return Table;
}(ThemedComponent);

Table.Column = GardenColumn;
Table.CheckboxColumn = GardenCheckboxColumn;
Table.propTypes = {
  striped: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Array of data objects to apply to each table row
   */
  data: PropTypes.array.isRequired,
  /**
   * Array of selected data ID's
   */
  selectedData: PropTypes.array,
  density: PropTypes.oneOf(["default", "cozy", "airy"]),
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  onSort: PropTypes.func,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.oneOf(["ASC", "DESC"]),
  isRowDisabled: PropTypes.func,
  isGroupRow: function isGroupRow(_ref8) {
    var _isGroupRow = _ref8.isGroupRow,
        groupRowRenderer = _ref8.groupRowRenderer,
        striped = _ref8.striped;

    if (_isGroupRow && !groupRowRenderer) {
      throw new Error("groupRowRenderer is required if isGroupRow is provided.");
    } else if (_isGroupRow && striped) {
      console.warn("Striped table styling should not be used with grouped rows.");
    }
  },
  groupRowRenderer: function groupRowRenderer(_ref9) {
    var _groupRowRenderer = _ref9.groupRowRenderer,
        isGroupRow = _ref9.isGroupRow;

    if (_groupRowRenderer && !isGroupRow) {
      throw new Error("isGroupRow is required if groupRowRenderer is provided.");
    }
  },
  onRowClick: PropTypes.func,
  onRowFocus: PropTypes.func,
  children: PropTypes.node.isRequired,
  /**
   * The reference of the react-virtualized Table component
   */
  ref: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number
};
Table.defaultProps = {
  selectedData: [],
  striped: false,
  density: "default",
  dir: "ltr"
};
export default Table;