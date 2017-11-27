import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { findDOMNode } from "react-dom";
import {
  Table as VirtualTable,
  AutoSizer,
  ArrowKeyStepper
} from "react-virtualized";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";
import KEY_CODES from "../utils/keyCodes.js";

import retrieveStandardColumn from "./Column.js";
import retrieveCheckboxColumn from "./CheckboxColumn.js";
import retrieveMenuColumn from "./MenuColumn.js";
import {
  headerRowRenderer,
  rowRenderer as defaultRowRenderer,
  retrieveHeaderHeight,
  retrieveRowHeight
} from "./Rows.js";
import styles from "./styles.css";

class GardenColumn {}
class GardenCheckboxColumn {}
class GardenMenuColumn {}

export default class Table extends ThemedComponent {
  static Column = GardenColumn;
  static CheckboxColumn = GardenCheckboxColumn;
  static MenuColumn = GardenMenuColumn;

  static propTypes = {
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
    isGroupRow: ({ isGroupRow, groupRowRenderer, striped }) => {
      if (isGroupRow && !groupRowRenderer) {
        throw new Error(
          "groupRowRenderer is required if isGroupRow is provided."
        );
      } else if (isGroupRow && striped) {
        console.warn(
          "Striped table styling should not be used with grouped rows."
        );
      }
    },
    groupRowRenderer: ({ groupRowRenderer, isGroupRow }) => {
      if (groupRowRenderer && !isGroupRow) {
        throw new Error(
          "isGroupRow is required if groupRowRenderer is provided."
        );
      }
    },
    onRowClick: PropTypes.func,
    onRowFocus: PropTypes.func,
    children: PropTypes.node.isRequired,
    /**
     * The reference of the react-virtualized Table component
     */
    innerRef: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,
    useAutoSizer: PropTypes.bool
  };

  static defaultProps = {
    selectedData: [],
    striped: false,
    density: "default",
    dir: "ltr",
    useAutoSizer: true
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Table",
      styles
    });

    this.state = {
      focusedRow: 0,
      isFocused: false
    };
  }

  onRowClick = ({ index }) => {
    const { onRowClick } = this.props;

    onRowClick && onRowClick(index);
    this.onRowFocus(index, true);
  };

  onRowFocus = (focusedRow, isFocused) => {
    const { onRowFocus } = this.props;
    onRowFocus && onRowFocus(focusedRow);

    this.setState({
      focusedRow,
      isFocused
    });

    this.tableRef.scrollToRow(focusedRow);
  };

  onSort = sortState => {
    const { onSort } = this.props;
    onSort && onSort(sortState);

    this.onRowFocus(0, false);
  };

  retrieveSelectedMapping = selectedData => {
    const mapping = {};

    for (const key of selectedData) {
      mapping[key] = true;
    }

    return mapping;
  };

  retrieveColumns = () => {
    const { theme } = this;
    const { children } = this.props;
    const tableColumns = [];

    React.Children.forEach(children, (child, index) => {
      if (child.type === GardenColumn) {
        tableColumns.push(
          retrieveStandardColumn({
            columnProps: child.props,
            tableProps: this.props,
            key: index,
            theme
          })
        );
      } else if (child.type === GardenCheckboxColumn) {
        this.checkboxDataKey = child.props.dataKey;
        this.onSelection = child.props.onSelection;

        const checkboxColumn = retrieveCheckboxColumn({
          childProps: child.props,
          tableProps: this.props,
          key: index,
          theme,
          selectedMapping: this.selectedMapping,
          onHeaderSelection: () => this.onRowFocus(0, false)
        });
        tableColumns.push(checkboxColumn);
      } else if (child.type === GardenMenuColumn) {
        tableColumns.push(
          retrieveMenuColumn({
            columnProps: child.props,
            tableState: this.state,
            tableProps: this.props,
            key: index,
            theme,
            onRowFocus: this.onRowFocus
          })
        );
      } else {
        tableColumns.push(child);
      }
    });

    return tableColumns;
  };

  retrieveNextValidFocusIndex = scrollToRow => {
    const { isGroupRow, data } = this.props;
    const { focusedRow } = this.state;
    scrollToRow = scrollToRow === -1 ? 0 : scrollToRow;

    if (!isGroupRow) {
      return scrollToRow;
    }

    while (
      scrollToRow < data.length &&
      scrollToRow >= 0 &&
      isGroupRow(scrollToRow)
    ) {
      if (scrollToRow < focusedRow && scrollToRow !== 0) {
        scrollToRow--;
      } else {
        scrollToRow++;
      }
    }

    return scrollToRow;
  };

  applyKeyboardActions = tableReference => {
    const { innerRef } = this.props;
    innerRef && innerRef(tableReference);

    const mouseDown = event => {
      this.focusedByMouse = true;

      setTimeout(() => {
        this.focusedByMouse = false;
      }, 0);
    };

    const focusIn = event => {
      const { focusedRow } = this.state;

      if (!this.focusedByMouse) {
        const newlyFocusedRow = this.retrieveNextValidFocusIndex(focusedRow);
        this.onRowFocus(newlyFocusedRow, true);
      }
    };

    const blur = event => {
      this.setState({ isFocused: false });
    };

    const keyDown = event => {
      const { data, onRowClick, isRowDisabled } = this.props;
      const { focusedRow } = this.state;
      const { keyCode } = event;

      const handlers = {
        [KEY_CODES.SPACE]: event => {
          event.preventDefault();

          if (isRowDisabled && isRowDisabled(focusedRow)) {
            return;
          }

          const isRowSelected = this.selectedMapping[
            data[focusedRow][this.checkboxDataKey]
          ];

          if (!isRowSelected) {
            this.selectedMapping[data[focusedRow][this.checkboxDataKey]] = true;
          } else {
            delete this.selectedMapping[data[focusedRow][this.checkboxDataKey]];
          }

          const selectedData = [];
          for (const key in this.selectedMapping) {
            selectedData.push(key);
          }

          this.onSelection && this.onSelection(selectedData);
        },
        [KEY_CODES.ENTER]: event => {
          event.preventDefault();
          onRowClick && onRowClick(focusedRow);
        },
        [KEY_CODES.HOME]: event => {
          event.preventDefault();

          // Necessary to remove focus from nested element on key navigation
          const gridElement = findDOMNode(this.tableRef.Grid);
          gridElement.focus();

          this.onRowFocus(this.retrieveNextValidFocusIndex(0), true);
        },
        [KEY_CODES.END]: event => {
          event.preventDefault();

          // Necessary to remove focus from nested element on key navigation
          const gridElement = findDOMNode(this.tableRef.Grid);
          gridElement.focus();

          this.onRowFocus(
            this.retrieveNextValidFocusIndex(data.length - 1),
            true
          );
        }
      };

      const handler = handlers[keyCode];
      handler && handler(event);
    };

    if (!this.tableRef && tableReference) {
      this.tableRef = tableReference;
      const gridElement = findDOMNode(this.tableRef.Grid);

      gridElement.addEventListener("mousedown", mouseDown);
      gridElement.addEventListener("focusin", focusIn);
      gridElement.addEventListener("blur", blur);
      gridElement.addEventListener("keydown", keyDown);
    } else if (this.tableRef && !tableReference) {
      const gridElement = findDOMNode(this.tableRef.Grid);

      gridElement.removeEventListener("mousedown", mouseDown);
      gridElement.removeEventListener("focusin", focusIn);
      gridElement.removeEventListener("blur", blur);
      gridElement.removeEventListener("keydown", keyDown);
    }
  };

  componentWillMount() {
    const { selectedData } = this.props;
    this.selectedMapping = this.retrieveSelectedMapping(selectedData);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedData } = nextProps;
    this.selectedMapping = this.retrieveSelectedMapping(selectedData);

    this.tableRef.recomputeRowHeights();
  }

  render() {
    const { theme } = this;
    const {
      className,
      data,
      density,
      dir,
      rowRenderer,
      onRowsRendered,
      useAutoSizer,
      ...otherTableProps
    } = this.props;
    const { focusedRow } = this.state;

    const tableElement = (width, height) =>
      <ArrowKeyStepper
        columnCount={1}
        isControlled
        onScrollToChange={({ scrollToRow }) => {
          const focusedRow = this.retrieveNextValidFocusIndex(scrollToRow);

          // Necessary to remove focus from nested element on key navigation
          const gridElement = findDOMNode(this.tableRef.Grid);
          gridElement.focus();

          this.onRowFocus(focusedRow, true);
        }}
        mode="cells"
        rowCount={data.length}
        scrollToRow={focusedRow}
      >
        {({ onSectionRendered }) =>
          <VirtualTable
            width={width}
            height={height}
            headerHeight={retrieveHeaderHeight(this.props)}
            rowHeight={rowProps => retrieveRowHeight(rowProps, this.props)}
            rowCount={data.length}
            ref={this.applyKeyboardActions}
            rowGetter={({ index }) => data[index]}
            className={classNames(theme.table, {
              [theme.table_sm]: density === "cozy",
              [theme.table_lg]: density === "airy",
              [theme.rtl]: dir === "rtl"
            })}
            tabIndex={0}
            gridClassName={theme.grid}
            gridStyle={{ direction: dir }}
            onHeaderClick={({ event }) => {
              // Necessary to allow Select All to function
              const nodeName = event.target.nodeName;
              if (nodeName !== "INPUT" && nodeName !== "LABEL") {
                event.preventDefault();
              }
            }}
            headerRowRenderer={rowProps =>
              headerRowRenderer(rowProps, this.props, theme)}
            {...otherTableProps}
            sort={this.onSort}
            onRowClick={this.onRowClick}
            rowRenderer={rowProps => {
              if (rowRenderer) {
                return rowRenderer(rowProps, updateRowProps =>
                  defaultRowRenderer(
                    updateRowProps,
                    this.props,
                    this.state,
                    theme,
                    this.selectedMapping
                  )
                );
              }

              return defaultRowRenderer(
                rowProps,
                this.props,
                this.state,
                theme,
                this.selectedMapping
              );
            }}
            onRowsRendered={options => {
              onSectionRendered({
                rowStartIndex: options.startIndex,
                rowStopIndex: options.stopIndex
              });

              onRowsRendered && onRowsRendered(options);
            }}
          >
            {this.retrieveColumns()}
          </VirtualTable>}
      </ArrowKeyStepper>;

    return (
      <View className={classNames(theme.table_container, className)}>
        {useAutoSizer &&
          <AutoSizer>
            {({ width, height }) => tableElement(width, height)}
          </AutoSizer>}
        {!useAutoSizer && tableElement(this.props.width, this.props.height)}
      </View>
    );
  }
}
