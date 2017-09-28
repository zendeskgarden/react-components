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
import {
  headerRowRenderer,
  rowRenderer,
  retrieveHeaderHeight,
  retrieveRowHeight
} from "./Rows.js";
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

  retrieveColumns = () => {
    const { theme } = this;
    const { children } = this.props;
    const tableColumns = [];

    React.Children.forEach(children, (child, index) => {
      if (child.type === GardenColumn) {
        tableColumns.push(
          retrieveStandardColumn(child.props, this.props, index, theme)
        );
      } else if (child.type === GardenCheckboxColumn) {
        this.checkboxDataKey = child.props.dataKey;
        this.onSelection = child.props.onSelection;

        const checkboxColumn = retrieveCheckboxColumn(
          child.props,
          this.props,
          index,
          theme,
          this.selectedMapping,
          () => this.setState({ focusedRow: -1 })
        );
        tableColumns.push(checkboxColumn);
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
              this.selectedMapping[
                data[focusedRow][this.checkboxDataKey]
              ] = true;
            } else {
              delete this.selectedMapping[
                data[focusedRow][this.checkboxDataKey]
              ];
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
            this.setState({
              focusedRow: this.retrieveNextValidFocusIndex(0)
            });
          },
          [KEY_CODES.END]: event => {
            event.preventDefault();
            this.setState({
              focusedRow: this.retrieveNextValidFocusIndex(data.length - 1)
            });
          }
        };

        const handler = handlers[keyCode];
        handler && handler(event);
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
    const { className, data, density, dir, ...otherTableProps } = this.props;
    const { focusedRow } = this.state;

    return (
      <View className={classNames(theme.table_container, className)}>
        <AutoSizer>
          {({ width, height }) =>
            <ArrowKeyStepper
              columnCount={1}
              isControlled
              onScrollToChange={({ scrollToRow }) => {
                const focusedRow = this.retrieveNextValidFocusIndex(
                  scrollToRow
                );
                this.setState({ focusedRow });
              }}
              mode="cells"
              rowCount={data.length}
              scrollToRow={focusedRow}
            >
              {({ onSectionRendered, scrollToRow }) =>
                <VirtualTable
                  width={width}
                  height={height}
                  headerHeight={retrieveHeaderHeight(this.props)}
                  rowHeight={rowProps =>
                    retrieveRowHeight(rowProps, this.props)}
                  rowCount={data.length}
                  ref={this.applyKeyboardActions}
                  rowGetter={({ index }) => data[index]}
                  className={classNames(theme.table, {
                    [theme.table_sm]: density === "small",
                    [theme.table_lg]: density === "large",
                    [theme.rtl]: dir === "rtl"
                  })}
                  tabIndex={0}
                  gridClassName={theme.grid}
                  gridStyle={{ direction: dir }}
                  rowRenderer={rowProps =>
                    rowRenderer(
                      rowProps,
                      this.props,
                      this.state,
                      theme,
                      this.selectedMapping
                    )}
                  headerRowRenderer={rowProps =>
                    headerRowRenderer(rowProps, this.props, theme)}
                  {...otherTableProps}
                  sort={this.onSort}
                  onRowClick={this.onRowClick}
                  scrollToIndex={scrollToRow}
                >
                  {this.retrieveColumns()}
                </VirtualTable>}
            </ArrowKeyStepper>}
        </AutoSizer>
      </View>
    );
  }
}
