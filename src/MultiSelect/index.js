import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uuid from "uuid";
import { findDOMNode } from "react-dom";

import Menu from "../Menu";
import View from "../core/View";
import TextInput from "../TextInput";
import Label from "./Label";
import ThemedComponent from "../utils/theming/ThemedComponent";
import RelativePositionedPopup from "../core/RelativePositionedPopup";
import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import KEY_CODES from "../utils/keyCodes.js";

import styles from "./styles.css";

export default class MultiSelect extends ThemedComponent {
  static Item = Menu.Item;
  static AddItem = Menu.AddItem;
  static HeaderItem = Menu.HeaderItem;
  static LinkItem = Menu.LinkItem;
  static MediaItem = Menu.MediaItem;
  static NextItem = Menu.NextItem;
  static PreviousItem = Menu.PreviousItem;
  static Separator = Menu.Separator;
  static Label = Label;

  static propTypes = {
    className: PropTypes.string,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    label: PropTypes.node,
    /**
     * Maximum height of the menu container.
     */
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Maximum height of the input.
     */
    inputMaxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    positioning: Menu.propTypes.positioning,
    /**
     * Whether form element fills the space provided.
     */
    stretched: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium"]),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    validation: PropTypes.oneOf(["error", "warning", "success"]),
    validationText: PropTypes.string,
    /**
     * Selectable items that are displayed within the MultiSelect.
     */
    selectedItems: PropTypes.arrayOf(PropTypes.element),
    /**
     * Menu items that are displayed within the MultiSelect.
     */
    children: PropTypes.node,
    onTextChange: PropTypes.func,
    textValue: PropTypes.string,
    placeholderText: PropTypes.string,
    fixedWidth: PropTypes.bool,
    showIcon: PropTypes.bool,
    onMenuValueSelected: PropTypes.func,
    menuShouldClose: PropTypes.func,
    type: PropTypes.oneOf(["default", "bare"])
  };

  static defaultProps = {
    dir: "ltr",
    disabled: false,
    positioning: ["bottom_stretch", "top_stretch"],
    stretched: true,
    size: "medium",
    tabIndex: 0,
    selectedItems: [],
    showIcon: true
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "MultiSelect",
      styles
    });

    this.state = {
      open: false
    };

    this.generatedId = uuid.v4();

    // Selected Item selection model
    this.selectedItemModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: false
    });
    this.selectedItemModel.onSelectionChanged = this.onSelectionChanged;

    this.menuItemsModel = new ReactSingleSelectionModel({
      rtl: props.dir === "rtl",
      vertical: true
    });
    this.menuItemsModel.onSelectionChanged = this.onSelectionChanged;
    this.menuItemsModel.onValueChosen = this.onMenuValueChosen;
  }

  componentWillMount() {
    this.setSelectableItems(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { dir } = nextProps;
    this.selectedItemModel.rtl = dir === "rtl";
    this.setSelectableItems(nextProps);
  }

  onSelectionChanged = () => {
    const selectedItems = this.selectedItemModel.items;
    const menuItems = this.menuItemsModel.items;
    this.setState({ selectedItems, menuItems });
  };

  onMenuValueChosen = (value, event) => {
    const { onMenuValueSelected, menuShouldClose } = this.props;

    onMenuValueSelected && onMenuValueSelected(value, event);

    if (!menuShouldClose || menuShouldClose(value, event)) {
      this.focusInput();
    }
  };

  setSelectableItems = ({ selectedItems, children, dir, disabled, size }) => {
    // The naming between Labels and Inputs differ by one size
    const defaultLabelSize = size === "medium" ? "large" : "medium";

    this.selectedItemModel.items = selectedItems.map((item, index) => {
      const isMultiSelectLabel = item.type && item.type.MultiSelectLabel;

      const defaultProps = {
        key: index,
        dir,
        disabled: item.props.disabled || disabled
      };

      if (isMultiSelectLabel) {
        defaultProps.size = defaultLabelSize;
        defaultProps.onRemove = !disabled ? item.props.onRemove : undefined;
      }

      return React.cloneElement(item, defaultProps);
    });

    this.menuItemsModel.items = children;

    this.setState({
      selectedItems: this.selectedItemModel.items,
      menuItems: this.menuItemsModel.items
    });
  };

  getId = () => this.props.id || this.generatedId;

  renderLabel = () => {
    const { label } = this.props;
    const { theme } = this;

    if (!label) {
      return null;
    }

    return (
      <label className={theme.label} htmlFor={this.getId()}>
        {label}
      </label>
    );
  };

  onClick = event => {
    const { disabled } = this.props;

    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  onOpen = event => {
    const { onOpen } = this.props;
    const { open } = this.state;

    if (!open) {
      onOpen && onOpen(event);
      this.setState({ open: true });
    }
  };

  onClose = event => {
    const { onClose } = this.props;
    this.setState({ open: false }, () => {
      onClose && onClose(event);
    });
  };

  renderHint = () => {
    const { theme } = this;
    const { hint } = this.props;

    return (
      hint &&
      <small className={theme.hint}>
        {hint}
      </small>
    );
  };

  focusInput() {
    this.textInputNode.focus();
  }

  renderAnchorElement = () => {
    const {
      dir,
      disabled,
      tabIndex,
      textValue,
      onTextChange,
      placeholderText,
      showIcon,
      inputMaxHeight,
      type
    } = this.props;
    const isRtl = dir === "rtl";
    const { open, focused, selectedItems, menuItems } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(theme.input, {
          [theme.open]: open && menuItems && menuItems.length > 0,
          [theme.no_chevron]: !showIcon || inputMaxHeight,
          [theme.input_overflow]: inputMaxHeight,
          [theme.style_bare]: type === "bare"
        })}
        style={{ maxHeight: inputMaxHeight }}
        dir={dir}
        disabled={disabled}
        onClick={this.onClick}
        onMouseDown={event => {
          const wasContainerClicked = event.target === this.inputContainerNode;

          if (wasContainerClicked) {
            this.selectedItemModel.clear();
          }

          // Necessary to not focus on first page when initially focused with mouse.
          this.mouseInitiated = true;

          setTimeout(() => {
            if (wasContainerClicked) {
              this.focusInput();

              if (open && showIcon) {
                this.onClose();
              }
            }

            this.mouseInitiated = false;
          }, 0);
        }}
        tabIndex={!disabled && -1}
        ref={ref => {
          this.inputContainerNode = this.inputContainerNode || findDOMNode(ref);
        }}
        onFocus={() => {
          // Scroll to bottom of input container if needed
          setTimeout(() => {
            if (inputMaxHeight) {
              this.inputContainerNode.scrollTop = this.inputContainerNode.scrollHeight;
            }
          }, 0);
        }}
        onBlur={event => {
          if (this.mouseInitiated) {
            event.preventDefault();
            event.stopPropagation();
          } else if (event.target === this.inputContainerNode) {
            this.selectedItemModel.clear();
          }
        }}
        onKeyDown={event => {
          const hasSelection = this.selectedItemModel.hasSelection();

          if (event.keyCode === KEY_CODES.ESCAPE) {
            this.onClose();
          }

          if (hasSelection) {
            const isLastItemSelected =
              this.selectedItemModel.model.selectedIndex ===
              this.selectedItemModel.model.items.length - 1;
            const isFirstItemSelected =
              this.selectedItemModel.model.selectedIndex === 0;

            if (event.keyCode === KEY_CODES.TAB) {
              this.selectedItemModel.clear();
            } else if (
              event.keyCode === KEY_CODES.END ||
              (event.keyCode === KEY_CODES.RIGHT &&
                isLastItemSelected &&
                !isRtl) ||
              (event.keyCode === KEY_CODES.LEFT && isLastItemSelected && isRtl)
            ) {
              this.selectedItemModel.clear();
              this.focusInput();
              event.preventDefault();
            } else if (
              event.keyCode === KEY_CODES.DELETE ||
              event.keyCode === KEY_CODES.BACKSPACE
            ) {
              const { onRemove } = this.selectedItemModel.model.selection.props;
              onRemove && onRemove(event);

              this.selectedItemModel.clear();
              this.focusInput();
            } else if (
              !(
                event.keyCode === KEY_CODES.LEFT &&
                isFirstItemSelected &&
                !isRtl
              ) &&
              !(
                event.keyCode === KEY_CODES.RIGHT &&
                isFirstItemSelected &&
                isRtl
              )
            ) {
              // Don't want to loop past first selection
              this.selectedItemModel.handleKeyDown(event);
            }
          } else if (!textValue) {
            const items = this.selectedItemModel.model.items;

            if (items.length > 0) {
              if (
                (event.keyCode === KEY_CODES.LEFT && !isRtl) ||
                (event.keyCode === KEY_CODES.RIGHT && isRtl)
              ) {
                this.selectedItemModel.reactivate(items[items.length - 1]);
                this.inputContainerNode.focus();
              } else if (event.keyCode === KEY_CODES.BACKSPACE) {
                const { onRemove } = items[items.length - 1].props;
                onRemove && onRemove(event);
                this.focusInput();
              } else if (event.keyCode === KEY_CODES.HOME) {
                // We should focus the current page on initial focus.
                this.selectedItemModel.reactivate(items[0]);
                this.inputContainerNode.focus();
                event.preventDefault();
              } else {
                this.menuItemsModel.handleKeyDown(event);
              }
            }
          } else {
            // We should preserve default TextInput keyboard navigation if menu is not selected
            if (
              !this.menuItemsModel.hasSelection() &&
              (event.keyCode === KEY_CODES.HOME ||
                event.keyCode === KEY_CODES.END)
            ) {
              return;
            }

            this.menuItemsModel.handleKeyDown(event);
          }
        }}
      >
        {selectedItems}
        <TextInput.Core
          className={classNames(theme.text_input, {
            [theme.is_hidden]:
              selectedItems.length > 0 && !focused && !textValue
          })}
          disabled={disabled}
          onChange={event => {
            this.menuItemsModel.clear();
            this.onOpen();
            onTextChange && onTextChange(event);

            if (!open) {
              this.onOpen();
            }
          }}
          onFocus={() => {
            this.onOpen();
            this.selectedItemModel.clear();
          }}
          onBlur={() => {
            if (!this.menuContainerMousedDown) {
              this.onClose();
              this.menuItemsModel.clear();
            }
          }}
          value={textValue}
          placeholder={placeholderText}
          innerRef={ref => {
            this.textInputNode = this.textInputNode || findDOMNode(ref);
          }}
          tabIndex={disabled ? null : tabIndex}
        />
      </View>
    );
  };

  renderValidation() {
    const { theme } = this;
    const { validationText, validation } = this.props;

    if (validation && validationText) {
      return (
        <small className={theme.message}>
          {validationText}
        </small>
      );
    }
  }

  render() {
    const {
      className,
      dir,
      disabled,
      size,
      stretched,
      testId,
      validation,
      onKeyDown,
      maxHeight,
      onBlur,
      onFocus,
      positioning,
      fixedWidth
    } = this.props;

    const { open, focused, menuItems } = this.state;
    const { theme } = this;

    return (
      <View
        className={classNames(
          theme.txt,
          theme[validation],
          theme[`size_${size}`],
          {
            [theme.rtl]: dir === "rtl",
            [theme.stretched]: stretched,
            [theme.disabled]: disabled,
            [theme.focused]: focused
          },
          className
        )}
        onFocus={event => {
          this.setState({ focused: true });
          onFocus && onFocus(event);
        }}
        onBlur={event => {
          if (!this.menuContainerMousedDown) {
            this.setState({ focused: false });
            onBlur && onBlur(event);
          }
        }}
        onKeyDown={event => {
          onKeyDown && onKeyDown(event, this.selectedItemModel.selection);
        }}
        testId={testId}
      >
        {this.renderLabel()}
        {this.renderHint()}
        <RelativePositionedPopup
          anchor={this.renderAnchorElement()}
          hidden={!open || !menuItems || menuItems.length === 0}
          positioning={positioning}
          marginBottom={4}
          marginTop={4}
          stretched={stretched}
        >
          {position =>
            <Menu.Container
              dir={dir}
              position={position}
              maxHeight={maxHeight}
              size={size}
              fixedWidth={fixedWidth}
              onMouseDown={event => {
                this.menuContainerMousedDown = true;

                setTimeout(() => {
                  this.menuContainerMousedDown = false;
                }, 0);
              }}
              onBlur={() => {
                this.onClose();
                this.focusInput();
              }}
              onEscape={() => {
                this.onClose();
                this.focusInput();
              }}
              animate
            >
              {menuItems}
            </Menu.Container>}
        </RelativePositionedPopup>
        {this.renderValidation()}
      </View>
    );
  }
}
