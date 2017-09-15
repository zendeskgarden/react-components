import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Column,
  Table as VirtualTable,
  AutoSizer,
  ArrowKeyStepper,
  defaultTableRowRenderer,
  defaultTableHeaderRowRenderer
} from "react-virtualized";
import { findDOMNode } from "react-dom";

import ThemedComponent from "../utils/theming/ThemedComponent";
import View from "../core/View";
import Checkbox from "../Checkbox";

import styles from "./styles.css";

class GardenColumn {}
class GardenCheckboxColumn {}

export default class Table extends ThemedComponent {
  static Column = GardenColumn;
  static CheckboxColumn = GardenCheckboxColumn;

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
    density: PropTypes.oneOf(["default", "small", "large"]),
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    height: PropTypes.number,
    onSort: PropTypes.func,
    sortBy: PropTypes.string,
    sortDirection: PropTypes.oneOf(["ASC", "DESC"]),
    isRowDisabled: PropTypes.func,
    isGroupRow: ({ isGroupRow, groupRowRenderer }) => {
      if (isGroupRow && !groupRowRenderer) {
        throw new Error(
          "groupRowRenderer is required if isGroupRow is provided."
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
    children: PropTypes.node.isRequired,
    /**
     * The reference of the react-virtualized Table component
     */
    ref: PropTypes.func
  };

  static defaultProps = {
    selectedData: [],
    striped: false,
    density: "default",
    dir: "ltr"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Table",
      styles
    });

    this.state = {
      focusedRow: -1,
      isFocused: false
    };
  }

  rowRenderer = rowProps => {
    const { theme } = this;
    const { striped, isGroupRow, groupRowRenderer } = this.props;
    const { index, rowData } = rowProps;
    const { focusedRow, isFocused } = this.state;
    let isValidGroupRow = isGroupRow && isGroupRow(index);

    rowProps.className = classNames(rowProps.className, theme.table_row, {
      [theme["table_row--focused"]]: isFocused && focusedRow === index,
      [theme["table_row--selected"]]: this.selectedMapping[rowData["id"]],
      [theme["table_row--zebra"]]:
        striped && !isValidGroupRow && index % 2 === 0
    });

    // Apply grouped-row styling if applicable
    if (isValidGroupRow) {
      let label, value;

      if (groupRowRenderer) {
        const groupRowValues = groupRowRenderer(rowProps);
        label = groupRowValues.label;
        value = groupRowValues.value;
      }

      rowProps.className = classNames(
        rowProps.className,
        theme["table_row--group"]
      );
      rowProps.columns = [
        <div key={`Row${rowProps.rowIndex}-Col0`} className={theme.cell}>
          {label}
          <span className={theme["cell--description"]}>
            {value}
          </span>
        </div>
      ];
    }

    return React.cloneElement(defaultTableRowRenderer(rowProps), {
      tabIndex: -1
    });
  };

  headerRowRenderer = rowProps => {
    const { dir } = this.props;
    const { theme } = this;

    rowProps.className = classNames(rowProps.className, theme.table_row_header);

    // Resolves inline styling react-virtualized applies for the scrollbar
    if (dir === "rtl") {
      rowProps.style.paddingLeft = rowProps.style.paddingRight;
      rowProps.style.paddingRight = 0;
    }

    // Remove default tabIndex applied by react-virtualized
    rowProps.columns = rowProps.columns.map(child =>
      React.cloneElement(child, {
        tabIndex: -1
      })
    );

    return defaultTableHeaderRowRenderer(rowProps);
  };

  onRowClick = ({ index }) => {
    const { onRowClick } = this.props;

    /**
     * Necessary to continue Grid focus after DOM element is "virtualized"
     * https://github.com/bvaughn/react-virtualized/issues/776
     */
    if (this.tableRef) {
      const gridElement = findDOMNode(this.tableRef.Grid);
      gridElement.focus();
    }

    onRowClick && onRowClick(index);

    this.setState({
      focusedRow: index
    });
  };

  retrieveHeaderHeight = () => {
    const { density } = this.props;

    if (density === "small") {
      return 40;
    } else if (density === "large") {
      return 72;
    } else {
      return 48;
    }
  };

  retrieveRowHeight = ({ index }) => {
    const { density, isGroupRow } = this.props;

    // Group rows are always the small sizing
    if (density === "small" || (isGroupRow && isGroupRow(index))) {
      return 32;
    } else if (density === "large") {
      return 64;
    } else {
      return 40;
    }
  };

  retrieveCheckboxColumn = (childProps, key) => {
    const { theme } = this;
    const { data, isRowDisabled, isGroupRow } = this.props;
    const {
      onSelection,
      allowSelectAll = true,
      headerClassName,
      className,
      ...otherProps
    } = childProps;

    if (!onSelection) {
      return;
    }

    const numSelectedRows = Object.keys(this.selectedMapping).length;

    let dataLength;
    if (!isGroupRow) {
      dataLength = data.length;
    } else {
      dataLength = 0;
      for (let x = 0; x < data.length; x++) {
        if (!isGroupRow(x)) {
          dataLength++;
        }
      }
    }

    const allRowsSelected = numSelectedRows === dataLength;

    // eslint-disable-next-line react/prop-types
    const headerRenderer = ({ dataKey }) => {
      return (
        <Checkbox
          checked={allRowsSelected}
          indeterminate={numSelectedRows > 0 && !allRowsSelected}
          onChange={checked => {
            const newlySelectedRows = [];

            if (checked) {
              for (let x = 0; x < data.length; x++) {
                if (!(isGroupRow && isGroupRow(x))) {
                  newlySelectedRows.push(data[x][dataKey]);
                }
              }
            }

            onSelection(newlySelectedRows);

            this.setState({
              focusedRow: -1
            });
          }}
        />
      );
    };

    const cellRenderer = cellProps => {
      const { rowData, dataKey } = cellProps;
      const isChecked = this.selectedMapping[rowData[dataKey]];

      return (
        <Checkbox
          checked={isChecked || false}
          disabled={isRowDisabled && isRowDisabled(cellProps.rowIndex)}
          tabIndex={-1}
          onChange={checked => {
            if (checked) {
              this.selectedMapping[rowData[dataKey]] = true;
            } else {
              delete this.selectedMapping[rowData[dataKey]];
            }

            const selectedData = [];
            for (const key in this.selectedMapping) {
              selectedData.push(key);
            }
            onSelection(selectedData);
          }}
        />
      );
    };

    return (
      <Column
        key={key}
        width={30}
        headerClassName={classNames(
          theme.cell,
          theme["cell--min"],
          headerClassName
        )}
        className={classNames(theme.cell, className)}
        headerRenderer={allowSelectAll ? headerRenderer : () => ""}
        cellRenderer={cellRenderer}
        disableSort
        {...otherProps}
      />
    );
  };

  onSort = sortState => {
    const { onSort } = this.props;
    onSort && onSort(sortState);

    this.setState({
      focusedRow: -1
    });
  };

  retrieveSelectedMapping = selectedData => {
    const mapping = {};

    for (const key of selectedData) {
      mapping[key] = true;
    }

    return mapping;
  };

  retrieveStandardColumn = (columnProps, tableProps, key, theme) => {
    const { onSort, sortBy, sortDirection } = tableProps;

    const {
      headerClassName,
      className,
      // eslint-disable-next-line no-unused-vars
      headerRenderer,
      truncate,
      ...otherColumnProps
    } = columnProps;

    return (
      <Column
        key={key}
        headerClassName={classNames(theme.cell, headerClassName, key)}
        className={classNames(
          theme.cell,
          {
            [theme["cell--truncate"]]: truncate === undefined || truncate
          },
          className
        )}
        headerRenderer={// eslint-disable-next-line react/prop-types
        ({ label, dataKey, disableSort }) => {
          const isSortable = onSort && !disableSort;

          return (
            <span
              tabIndex={isSortable ? 0 : -1}
              className={classNames({
                [theme["cell--sortable"]]: isSortable,
                [theme["is-ascending"]]:
                  dataKey === sortBy && sortDirection === "ASC",
                [theme["is-descending"]]:
                  dataKey === sortBy && sortDirection === "DESC"
              })}
            >
              {label}
            </span>
          );
        }}
        {...otherColumnProps}
      />
    );
  };

  retrieveColumns = () => {
    const { children } = this.props;
    const tableColumns = [];

    React.Children.forEach(children, (child, index) => {
      if (child.type === GardenColumn) {
        tableColumns.push(
          this.retrieveStandardColumn(
            child.props,
            this.props,
            index,
            this.theme
          )
        );
      } else if (child.type === GardenCheckboxColumn) {
        this.checkboxDataKey = child.props.dataKey;
        this.onSelection = child.props.onSelection;
        tableColumns.push(this.retrieveCheckboxColumn(child.props, index));
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
      if (scrollToRow < focusedRow) {
        scrollToRow--;
      } else {
        scrollToRow++;
      }
    }

    return scrollToRow;
  };

  applyKeyboardActions = tableReference => {
    const { ref } = this.props;
    ref && ref(tableReference);

    if (!this.tableRef && tableReference) {
      this.tableRef = tableReference;
      const gridElement = findDOMNode(this.tableRef.Grid);

      gridElement.addEventListener("mouseUp", event => {
        this.blurredByMouse = true;

        setTimeout(() => {
          this.blurredByMouse = false;
        }, 0);
      });

      gridElement.addEventListener("focus", event => {
        const { focusedRow } = this.state;
        const newlyFocusedRow = this.retrieveNextValidFocusIndex(focusedRow);

        this.setState({
          isFocused: true,
          focusedRow: newlyFocusedRow
        });
      });

      gridElement.addEventListener("blur", event => {
        if (!this.blurredByMouse) {
          this.setState({ isFocused: false });
        }
      });

      gridElement.addEventListener("keydown", event => {
        const SPACE_KEY_CODE = 32;
        const ENTER_KEY_CODE = 13;
        const HOME_KEY_CODE = 36;
        const END_KEY_CODE = 35;
        const { data, onRowClick, isRowDisabled } = this.props;
        const { focusedRow } = this.state;
        const { keyCode } = event;

        if (keyCode === SPACE_KEY_CODE) {
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
        } else if (keyCode === ENTER_KEY_CODE) {
          event.preventDefault();

          onRowClick && onRowClick(focusedRow);
        } else if (keyCode === HOME_KEY_CODE) {
          event.preventDefault();

          this.setState({
            focusedRow: this.retrieveNextValidFocusIndex(0)
          });
        } else if (keyCode === END_KEY_CODE) {
          event.preventDefault();

          this.setState({
            focusedRow: this.retrieveNextValidFocusIndex(data.length - 1)
          });
        }
      });
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
      sortBy,
      sortDirection,
      height,
      // eslint-disable-next-line no-unused-vars
      onRowClick,
      ...otherTableProps
    } = this.props;
    const { focusedRow } = this.state;

    return (
      <View className={className}>
        <ArrowKeyStepper
          columnCount={1}
          isControlled
          onScrollToChange={({ scrollToRow }) => {
            const focusedRow = this.retrieveNextValidFocusIndex(scrollToRow);
            this.setState({ focusedRow });
          }}
          mode="cells"
          rowCount={data.length}
          scrollToRow={focusedRow}
        >
          {({ onSectionRendered, scrollToRow }) =>
            <AutoSizer disableHeight>
              {({ width }) =>
                <VirtualTable
                  width={width}
                  height={height}
                  headerHeight={this.retrieveHeaderHeight()}
                  rowHeight={this.retrieveRowHeight}
                  rowCount={data.length}
                  ref={this.applyKeyboardActions}
                  rowGetter={({ index }) => data[index]}
                  className={classNames(theme.table, {
                    [theme["table--sm"]]: density === "small",
                    [theme["table--lg"]]: density === "large",
                    [theme["is-rtl"]]: dir === "rtl"
                  })}
                  tabIndex={0}
                  gridClassName={theme.grid}
                  gridStyle={{ direction: dir }}
                  rowRenderer={this.rowRenderer}
                  headerRowRenderer={this.headerRowRenderer}
                  onRowClick={this.onRowClick}
                  sort={this.onSort}
                  sortBy={sortBy}
                  sortDirection={sortDirection}
                  {...otherTableProps}
                  scrollToIndex={scrollToRow}
                >
                  {this.retrieveColumns()}
                </VirtualTable>}
            </AutoSizer>}
        </ArrowKeyStepper>
      </View>
    );
  }
}
