import React from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import View from "../core/View";
import RelativePositionedPopup from "../core/RelativePositionedPopup";
import KEY_CODES from "../utils/keyCodes";

import Container from "./Container";
import Item from "./Item";
import LinkItem from "./LinkItem";
import Separator from "./Separator";
import PreviousItem from "./PreviousItem";
import NextItem from "./NextItem";
import HeaderItem from "./HeaderItem";
import AddItem from "./AddItem";
import MediaItem from "./MediaItem";

import styles from "./styles.css";

export default class Menu extends ThemedComponent {
  static propTypes = {
    arrow: PropTypes.bool,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    centerArrow: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    fixedWidth: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onChange: PropTypes.func,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
    positioning: RelativePositionedPopup.propTypes.positioning,
    size: PropTypes.oneOf(["small", "medium"]),
    stretched: PropTypes.bool,
    testId: PropTypes.string,
    trigger: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
    /**
     * Allows arrow keys to expand Menu. Used by the Select component.
     */
    enableArrowKeyExpansion: PropTypes.bool,
    /**
     * Focus the trigger DOM node when a menu item is selected
     */
    focusOnClose: PropTypes.bool
  };

  static defaultProps = {
    arrow: false,
    dir: "ltr",
    centerArrow: false,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 4,
    positioning: ["bottom_right", "top_right"],
    stretched: false,
    size: "medium",
    enableArrowKeyExpansion: false,
    focusOnClose: true
  };

  static Container = Container;
  static Item = Item;
  static LinkItem = LinkItem;
  static Separator = Separator;
  static PreviousItem = PreviousItem;
  static NextItem = NextItem;
  static HeaderItem = HeaderItem;
  static AddItem = AddItem;
  static MediaItem = MediaItem;

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
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

  onValueChosen = (value, event) => {
    const { onChange, focusOnClose } = this.props;

    this.closeMenu();
    onChange && onChange(value, event);

    if (focusOnClose) {
      const triggerDOMNode = findDOMNode(this.refs.triggerElement);
      triggerDOMNode.focus();
    }
  };

  showMenu = () => {
    const { onOpen } = this.props;

    if (this.state.hidden) {
      this.setState({ hidden: false }, () => {
        onOpen && onOpen();
      });
    }
  };

  closeMenu = e => {
    const { onClose } = this.props;

    this.selectionModel.clear();
    this.setState({ hidden: true }, () => {
      onClose && onClose();
    });
    e && e.stopPropagation();
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

  render() {
    const {
      arrow,
      dir,
      centerArrow,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      positioning,
      trigger,
      testId,
      stretched,
      enableArrowKeyExpansion,
      ...other
    } = this.props;
    const { theme } = this;
    const { hidden, items } = this.state;

    const triggerElement = React.cloneElement(
      typeof trigger === "function" ? trigger({ open: !hidden }) : trigger,
      { ref: "triggerElement" }
    );

    const anchor = (
      <View
        className={classNames({
          [theme.stretched]: stretched
        })}
        onKeyDown={event => {
          if (!hidden) {
            this.selectionModel.handleKeyDown(event);
          } else if (
            enableArrowKeyExpansion &&
            (event.keyCode === KEY_CODES.UP || event.keyCode === KEY_CODES.DOWN)
          ) {
            this.showMenu();
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        onBlur={event => {
          if (!this.containerMousedDown) {
            this.closeMenu(event);
          }
        }}
        onClick={this.toggleHidden}
        onEnter={this.keyboardToggleHidden}
        onEscape={this.closeMenu}
        onSpace={this.keyboardToggleHidden}
      >
        {triggerElement}
      </View>
    );

    const arrowMargin = arrow ? 3 : 0;

    const centerPoint = centerArrow ? 19 : null;

    return (
      <RelativePositionedPopup
        anchor={anchor}
        centerPoint={centerPoint}
        dir={dir}
        hidden={hidden}
        positioning={positioning}
        marginTop={marginTop + arrowMargin}
        marginLeft={marginLeft + arrowMargin}
        marginRight={marginRight + arrowMargin}
        marginBottom={marginBottom + arrowMargin}
        stretched={stretched}
        testId={testId}
      >
        {position =>
          <Container
            {...other}
            animate={!hidden}
            dir={dir}
            arrow={arrow}
            position={position}
            onMouseDown={event => {
              this.containerMousedDown = true;

              setTimeout(() => {
                this.containerMousedDown = false;
              }, 0);
            }}
            onBlur={() => this.closeMenu()}
            onKeyDown={this.selectionModel.handleKeyDown}
            onEscape={this.closeMenu}
          >
            {items}
          </Container>}
      </RelativePositionedPopup>
    );
  }
}
