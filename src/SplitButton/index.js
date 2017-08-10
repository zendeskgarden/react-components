import React, { Children } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ThemedComponent from "../utils/theming/ThemedComponent";
import ChevronIcon from "@zendesk/garden-svg-icons/src/14-chevron.svg";

import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import View from "../View";
import Menu from "../Menu";
import Button from "../Button";
import RelativePositionedPopup from "../RelativePositionedPopup";
import IconButton from "../IconButton";
import styles from "./styles.css";

export default class SplitButton extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    mainButtonDisabled: PropTypes.bool,
    dropdownDisabled: PropTypes.bool,
    /** Node for main button label, defaults to first child */
    label: PropTypes.node,
    /** <a href="#menu">See Menu</a> */
    fixedWidth: PropTypes.bool,
    /** <a href="#menu">See Menu</a> */
    marginBottom: PropTypes.number,
    /** <a href="#menu">See Menu</a> */
    marginLeft: PropTypes.number,
    /** <a href="#menu">See Menu</a> */
    marginRight: PropTypes.number,
    /** <a href="#menu">See Menu</a> */
    marginTop: PropTypes.number,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
    positioning: RelativePositionedPopup.propTypes.positioning,
    pill: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    /** Enables tooltip */
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf(["default", "primary"]),
    /** <a href="#menu">See Menu</a> */
    wide: PropTypes.bool
  };

  static defaultProps = {
    dir: "ltr",
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    positioning: ["bottom_left", "top_left"]
  };

  static Item = Menu.Item;
  static Separator = Menu.Separator;

  constructor(props, context) {
    super(props, context, {
      namespace: "SplitButton",
      styles
    });

    this.selectionModel = new ReactSingleSelectionModel();
    this.selectionModel.onSelectionChanged = this.onSelectionChanged;
    this.selectionModel.onValueChosen = this.onValueChosen;
    this.state = {
      hidden: true,
      items: []
    };
  }

  setSelectableItems(children) {
    this.selectionModel.items = children;
    this.setState({ items: this.selectionModel.items });
  }

  componentWillMount() {
    const { children } = this.props;
    this.setSelectableItems(children);
  }

  componentWillReceiveProps = nextProps => {
    const { children } = nextProps;
    this.setSelectableItems(children);
  };

  onSelectionChanged = () => {
    const items = this.selectionModel.items;
    this.setState({ items });
    this.showMenu();
  };

  onValueChosen = value => {
    const { onSelect } = this.props;
    this.closeMenu();
    onSelect && onSelect(value);
  };

  showMenu = () => {
    const { onOpen } = this.props;

    if (this.state.hidden) {
      this.setState({ hidden: false }, () => {
        onOpen && onOpen();
      });
    }
  };

  closeMenu = () => {
    const { onClose } = this.props;

    this.selectionModel.clear();
    this.setState({ hidden: true }, () => {
      onClose && onClose();
    });
  };

  toggleHidden = e => {
    if (this.state.hidden) {
      this.showMenu();
    } else {
      this.closeMenu();
    }
    e && e.stopPropagation();
  };

  keyboardToggleHidden = e => {
    if (!this.selectionModel.hasSelection()) {
      this.toggleHidden();
      e.preventDefault();
      e.stopPropagation();
    }
  };

  get defaultItem() {
    const { children } = this.props;
    return Children.toArray(children).find(c => c.type && c.type.selectable);
  }

  selectDefault = () => {
    const { onSelect } = this.props;

    onSelect && onSelect(this.defaultItem.props.value);
  };

  onClick = e => {
    if (e.type === "click") {
      if (this.state.hidden) {
        this.showMenu();
      } else {
        this.closeMenu();
      }
    }
  };

  onKeyDown = e => {
    const { hidden } = this.props;

    const keyDownHandlers = {
      "13": this.keyboardToggleHidden,
      "27": this.closeMenu,
      "32": this.keyboardToggleHidden
    };

    const handler = keyDownHandlers[e.keyCode];
    if (handler) {
      handler(e);
      e.preventDefault();
      e.stopPropagation();
    }

    if (!hidden) {
      this.selectionModel.handleKeyDown(e);
    }
  };

  render() {
    const {
      dir,
      mainButtonDisabled,
      dropdownDisabled,
      fixedWidth,
      label,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      onClick,
      pill,
      positioning,
      size,
      type,
      tabIndex,
      testId,
      title,
      wide
    } = this.props;

    const { hidden, items } = this.state;
    const { theme } = this;

    return (
      <RelativePositionedPopup
        dir={dir}
        hidden={hidden}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        positioning={positioning}
        testId={testId}
        anchor={
          <View
            className={classNames(theme.group, { [theme.rtl]: dir === "rtl" })}
          >
            <Button
              disabled={mainButtonDisabled}
              onClick={onClick || this.selectDefault}
              pill={pill}
              size={size}
              tabIndex={tabIndex}
              testId={testId && `${testId}-button`}
              title={title}
              type={type}
            >
              {label || this.defaultItem.props.children}
            </Button>
            <IconButton
              disabled={dropdownDisabled}
              className={classNames({ [theme.active]: !hidden })}
              isRotated={!hidden}
              onKeyDown={this.onKeyDown}
              onBlur={this.closeMenu}
              onClick={this.onClick}
              pill={pill}
              size={size}
              testId={testId && `${testId}-menu-button`}
              type={type}
            >
              <ChevronIcon />
            </IconButton>
          </View>
        }
      >
        {position =>
          <Menu.Container
            animate={!hidden}
            dir={dir}
            fixedWidth={fixedWidth}
            position={position}
            wide={wide}
          >
            {items}
          </Menu.Container>}
      </RelativePositionedPopup>
    );
  }
}
