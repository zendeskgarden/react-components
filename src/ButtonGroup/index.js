import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ItemConfig from "./ItemConfig";
import Item from "./Item";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "../Button/styles.css";

export default class ButtonGroup extends ThemedComponent {
  static Item = ItemConfig;

  static propTypes = {
    active: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(["danger"]),
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    onChange: PropTypes.func,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  };

  static defaultProps = {
    dir: "ltr",
    tabIndex: 0,
    vertical: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Button",
      styles
    });
    this.selectionModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: false
    });
    this.selectionModel.onSelectionChanged = this.onSelectionChanged;
    this.selectionModel.onValueChosen = props.onChange;
    this.keyboard = true;
    this.state = {};
  }

  setSelectableItems({ active, children, dir, size, vertical, color }) {
    const buttons = [];

    Children.forEach(children, child => {
      if (child && child.type === ItemConfig) {
        const { children, disabled, id } = child.props;
        buttons.push(
          <Item
            active={id === active}
            disabled={disabled}
            id={id}
            key={id}
            value={id}
            size={size}
            color={color}
          >
            {children}
          </Item>
        );
      } else {
        buttons.push(child);
      }
    });

    this.selectionModel.items = buttons;
    this.setState({ buttons: this.selectionModel.items });
  }

  onSelectionChanged = () => {
    const buttons = this.selectionModel.items;
    this.setState({ buttons });
  };

  componentWillMount() {
    this.setSelectableItems(this.props);
  }

  componentWillReceiveProps = nextProps => {
    this.selectionModel.rtl = nextProps.dir === "rtl";
    this.setSelectableItems(nextProps);
  };

  render() {
    const { dir, tabIndex, testId, className } = this.props;

    const { buttons } = this.state;
    const { theme } = this;

    const props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    if (dir === "rtl") {
      props.dir = dir;
    }

    return (
      <nav
        className={classNames(
          theme.group,
          {
            [theme.rtl]: dir === "rtl"
          },
          className
        )}
        tabIndex={tabIndex}
        onFocus={() => {
          if (!this.selectionModel.hasSelection() && this.keyboard) {
            this.selectionModel.reactivate();
          }
          this.keyboard = true;
        }}
        onMouseDown={() => {
          this.keyboard = false;
          setTimeout(() => {
            this.keyboard = true;
          }, 0);
        }}
        onBlur={this.selectionModel.clear}
        onKeyDown={this.selectionModel.handleKeyDown}
        role="tablist"
        {...props}
      >
        {buttons}
      </nav>
    );
  }
}
