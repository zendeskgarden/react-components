import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import View from "../core/View";
import RelativePositionedPopup from "../core/RelativePositionedPopup";

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
    trigger: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  };

  static defaultProps = {
    arrow: false,
    dir: "ltr",
    centerArrow: false,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    positioning: ["bottom_right", "top_right"],
    stretched: false,
    size: "medium"
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
    const { onChange } = this.props;
    this.closeMenu();
    onChange && onChange(value, event);
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
      ...other
    } = this.props;
    const { theme } = this;
    const { hidden, items } = this.state;

    const anchor = (
      <View
        className={classNames({
          [theme.stretched]: stretched
        })}
        onKeyDown={this.selectionModel.handleKeyDown}
        onBlur={this.closeMenu}
        onClick={this.toggleHidden}
        onEnter={this.keyboardToggleHidden}
        onEscape={this.closeMenu}
        onSpace={this.keyboardToggleHidden}
      >
        {typeof trigger === "function" ? trigger({ open: !hidden }) : trigger}
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
          >
            {items}
          </Container>}
      </RelativePositionedPopup>
    );
  }
}
