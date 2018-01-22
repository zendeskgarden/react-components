"use strict";

exports.__esModule = true;

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

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

var _reactDom = require("react-dom");

var _Menu = require("../Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _TextInput = require("../TextInput");

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Label = require("./Label");

var _Label2 = _interopRequireDefault(_Label);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _RelativePositionedPopup = require("../core/RelativePositionedPopup");

var _RelativePositionedPopup2 = _interopRequireDefault(_RelativePositionedPopup);

var _ReactSingleSelectionModel = require("../utils/selection/ReactSingleSelectionModel");

var _ReactSingleSelectionModel2 = _interopRequireDefault(_ReactSingleSelectionModel);

var _keyCodes = require("../utils/keyCodes.js");

var _keyCodes2 = _interopRequireDefault(_keyCodes);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiSelect = function (_ThemedComponent) {
  (0, _inherits3.default)(MultiSelect, _ThemedComponent);

  function MultiSelect(props, context) {
    (0, _classCallCheck3.default)(this, MultiSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "MultiSelect",
      styles: _styles2.default
    }));

    _this.onSelectionChanged = function () {
      var selectedItems = _this.selectedItemModel.items;
      var menuItems = _this.menuItemsModel.items;
      _this.setState({ selectedItems: selectedItems, menuItems: menuItems });
    };

    _this.onMenuValueChosen = function (value, event) {
      var _this$props = _this.props,
          onMenuValueSelected = _this$props.onMenuValueSelected,
          menuShouldClose = _this$props.menuShouldClose;


      onMenuValueSelected && onMenuValueSelected(value, event);

      if (!menuShouldClose || menuShouldClose(value, event)) {
        _this.focusInput();
      }
    };

    _this.setSelectableItems = function (_ref) {
      var selectedItems = _ref.selectedItems,
          children = _ref.children,
          dir = _ref.dir,
          disabled = _ref.disabled,
          size = _ref.size;

      // The naming between Labels and Inputs differ by one size
      var defaultLabelSize = size === "medium" ? "large" : "medium";

      _this.selectedItemModel.items = selectedItems.map(function (item, index) {
        var isMultiSelectLabel = item.type && item.type.MultiSelectLabel;

        var defaultProps = {
          key: index,
          dir: dir,
          disabled: item.props.disabled || disabled
        };

        if (isMultiSelectLabel) {
          defaultProps.size = defaultLabelSize;
          defaultProps.onRemove = !disabled ? item.props.onRemove : undefined;
        }

        return _react2.default.cloneElement(item, defaultProps);
      });

      _this.menuItemsModel.items = children;

      _this.setState({
        selectedItems: _this.selectedItemModel.items,
        menuItems: _this.menuItemsModel.items
      });
    };

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.renderLabel = function () {
      var label = _this.props.label;
      var theme = _this.theme;


      if (!label) {
        return null;
      }

      return _react2.default.createElement(
        "label",
        { className: theme.label, htmlFor: _this.getId() },
        label
      );
    };

    _this.onClick = function (event) {
      var disabled = _this.props.disabled;


      if (disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    _this.onOpen = function (event) {
      var onOpen = _this.props.onOpen;
      var open = _this.state.open;


      if (!open) {
        onOpen && onOpen(event);
        _this.setState({ open: true });
      }
    };

    _this.onClose = function (event) {
      var onClose = _this.props.onClose;

      _this.setState({ open: false }, function () {
        onClose && onClose(event);
      });
    };

    _this.renderHint = function () {
      var theme = _this.theme;
      var hint = _this.props.hint;


      return hint && _react2.default.createElement(
        "small",
        { className: theme.hint },
        hint
      );
    };

    _this.renderAnchorElement = function () {
      var _classNames, _classNames2;

      var _this$props2 = _this.props,
          dir = _this$props2.dir,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex,
          textValue = _this$props2.textValue,
          onTextChange = _this$props2.onTextChange,
          placeholderText = _this$props2.placeholderText,
          showIcon = _this$props2.showIcon,
          inputMaxHeight = _this$props2.inputMaxHeight,
          type = _this$props2.type;

      var isRtl = dir === "rtl";
      var _this$state = _this.state,
          open = _this$state.open,
          focused = _this$state.focused,
          selectedItems = _this$state.selectedItems,
          menuItems = _this$state.menuItems;
      var theme = _this.theme;


      return _react2.default.createElement(
        _View2.default,
        {
          className: (0, _classnames2.default)(theme.input, (_classNames = {}, _classNames[theme.open] = open && menuItems && menuItems.length > 0, _classNames[theme.no_chevron] = !showIcon || inputMaxHeight, _classNames[theme.input_overflow] = inputMaxHeight, _classNames[theme.style_bare] = type === "bare", _classNames)),
          style: { maxHeight: inputMaxHeight },
          dir: dir,
          disabled: disabled,
          onClick: _this.onClick,
          onMouseDown: function onMouseDown(event) {
            var wasContainerClicked = event.target === _this.inputContainerNode;

            if (wasContainerClicked) {
              _this.selectedItemModel.clear();
            }

            // Necessary to not focus on first page when initially focused with mouse.
            _this.mouseInitiated = true;

            setTimeout(function () {
              if (wasContainerClicked) {
                _this.focusInput();

                if (open && showIcon) {
                  _this.onClose();
                }
              }

              _this.mouseInitiated = false;
            }, 0);
          },
          tabIndex: !disabled && -1,
          ref: function ref(_ref2) {
            _this.inputContainerNode = _this.inputContainerNode || (0, _reactDom.findDOMNode)(_ref2);
          },
          onFocus: function onFocus() {
            // Scroll to bottom of input container if needed
            setTimeout(function () {
              if (inputMaxHeight) {
                _this.inputContainerNode.scrollTop = _this.inputContainerNode.scrollHeight;
              }
            }, 0);
          },
          onBlur: function onBlur(event) {
            if (_this.mouseInitiated) {
              event.preventDefault();
              event.stopPropagation();
            } else if (event.target === _this.inputContainerNode) {
              _this.selectedItemModel.clear();
            }
          },
          onKeyDown: function onKeyDown(event) {
            var hasSelection = _this.selectedItemModel.hasSelection();

            if (event.keyCode === _keyCodes2.default.ESCAPE) {
              _this.onClose();
            }

            if (hasSelection) {
              var isLastItemSelected = _this.selectedItemModel.model.selectedIndex === _this.selectedItemModel.model.items.length - 1;
              var isFirstItemSelected = _this.selectedItemModel.model.selectedIndex === 0;

              if (event.keyCode === _keyCodes2.default.TAB) {
                _this.selectedItemModel.clear();
              } else if (event.keyCode === _keyCodes2.default.END || event.keyCode === _keyCodes2.default.RIGHT && isLastItemSelected && !isRtl || event.keyCode === _keyCodes2.default.LEFT && isLastItemSelected && isRtl) {
                _this.selectedItemModel.clear();
                _this.focusInput();
                event.preventDefault();
              } else if (event.keyCode === _keyCodes2.default.DELETE || event.keyCode === _keyCodes2.default.BACKSPACE) {
                var onRemove = _this.selectedItemModel.model.selection.props.onRemove;

                onRemove && onRemove(event);

                _this.selectedItemModel.clear();
                _this.focusInput();
              } else if (!(event.keyCode === _keyCodes2.default.LEFT && isFirstItemSelected && !isRtl) && !(event.keyCode === _keyCodes2.default.RIGHT && isFirstItemSelected && isRtl)) {
                // Don't want to loop past first selection
                _this.selectedItemModel.handleKeyDown(event);
              }
            } else if (!textValue) {
              var items = _this.selectedItemModel.model.items;

              if (items.length > 0) {
                if (event.keyCode === _keyCodes2.default.LEFT && !isRtl || event.keyCode === _keyCodes2.default.RIGHT && isRtl) {
                  _this.selectedItemModel.reactivate(items[items.length - 1]);
                  _this.inputContainerNode.focus();
                } else if (event.keyCode === _keyCodes2.default.BACKSPACE) {
                  var _onRemove = items[items.length - 1].props.onRemove;

                  _onRemove && _onRemove(event);
                  _this.focusInput();
                } else if (event.keyCode === _keyCodes2.default.HOME) {
                  // We should focus the current page on initial focus.
                  _this.selectedItemModel.reactivate(items[0]);
                  _this.inputContainerNode.focus();
                  event.preventDefault();
                } else {
                  _this.menuItemsModel.handleKeyDown(event);
                }
              }
            } else {
              // We should preserve default TextInput keyboard navigation if menu is not selected
              if (!_this.menuItemsModel.hasSelection() && (event.keyCode === _keyCodes2.default.HOME || event.keyCode === _keyCodes2.default.END)) {
                return;
              }

              _this.menuItemsModel.handleKeyDown(event);
            }
          }
        },
        selectedItems,
        _react2.default.createElement(_TextInput2.default.Core, {
          className: (0, _classnames2.default)(theme.text_input, (_classNames2 = {}, _classNames2[theme.is_hidden] = selectedItems.length > 0 && !focused && !textValue, _classNames2)),
          disabled: disabled,
          onChange: function onChange(event) {
            _this.menuItemsModel.clear();
            _this.onOpen();
            onTextChange && onTextChange(event);

            if (!open) {
              _this.onOpen();
            }
          },
          onFocus: function onFocus() {
            _this.onOpen();
            _this.selectedItemModel.clear();
          },
          onBlur: function onBlur() {
            if (!_this.menuContainerMousedDown) {
              _this.onClose();
              _this.menuItemsModel.clear();
            }
          },
          value: textValue,
          placeholder: placeholderText,
          innerRef: function innerRef(ref) {
            _this.textInputNode = _this.textInputNode || (0, _reactDom.findDOMNode)(ref);
          },
          tabIndex: disabled ? null : tabIndex
        })
      );
    };

    _this.state = {
      open: false
    };

    _this.generatedId = _uuid2.default.v4();

    // Selected Item selection model
    _this.selectedItemModel = new _ReactSingleSelectionModel2.default({
      rtl: props.dir === "rtl",
      vertical: false
    });
    _this.selectedItemModel.onSelectionChanged = _this.onSelectionChanged;

    _this.menuItemsModel = new _ReactSingleSelectionModel2.default({
      rtl: props.dir === "rtl",
      vertical: true
    });
    _this.menuItemsModel.onSelectionChanged = _this.onSelectionChanged;
    _this.menuItemsModel.onValueChosen = _this.onMenuValueChosen;
    return _this;
  }

  MultiSelect.prototype.componentWillMount = function componentWillMount() {
    this.setSelectableItems(this.props);
  };

  MultiSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var dir = nextProps.dir;

    this.selectedItemModel.rtl = dir === "rtl";
    this.setSelectableItems(nextProps);
  };

  MultiSelect.prototype.focusInput = function focusInput() {
    this.textInputNode.focus();
  };

  MultiSelect.prototype.renderValidation = function renderValidation() {
    var theme = this.theme;
    var _props = this.props,
        validationText = _props.validationText,
        validation = _props.validation;


    if (validation && validationText) {
      return _react2.default.createElement(
        "small",
        { className: theme.message },
        validationText
      );
    }
  };

  MultiSelect.prototype.render = function render() {
    var _classNames3,
        _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        dir = _props2.dir,
        disabled = _props2.disabled,
        size = _props2.size,
        stretched = _props2.stretched,
        testId = _props2.testId,
        validation = _props2.validation,
        _onKeyDown = _props2.onKeyDown,
        maxHeight = _props2.maxHeight,
        _onBlur = _props2.onBlur,
        _onFocus = _props2.onFocus,
        positioning = _props2.positioning,
        fixedWidth = _props2.fixedWidth;
    var _state = this.state,
        open = _state.open,
        focused = _state.focused,
        menuItems = _state.menuItems;
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.txt, theme[validation], theme["size_" + size], (_classNames3 = {}, _classNames3[theme.rtl] = dir === "rtl", _classNames3[theme.stretched] = stretched, _classNames3[theme.disabled] = disabled, _classNames3[theme.focused] = focused, _classNames3), className),
        onFocus: function onFocus(event) {
          _this2.setState({ focused: true });
          _onFocus && _onFocus(event);
        },
        onBlur: function onBlur(event) {
          if (!_this2.menuContainerMousedDown) {
            _this2.setState({ focused: false });
            _onBlur && _onBlur(event);
          }
        },
        onKeyDown: function onKeyDown(event) {
          _onKeyDown && _onKeyDown(event, _this2.selectedItemModel.selection);
        },
        testId: testId
      },
      this.renderLabel(),
      this.renderHint(),
      _react2.default.createElement(
        _RelativePositionedPopup2.default,
        {
          anchor: this.renderAnchorElement(),
          hidden: !open || !menuItems || menuItems.length === 0,
          positioning: positioning,
          marginBottom: 4,
          marginTop: 4,
          stretched: stretched
        },
        function (position) {
          return _react2.default.createElement(
            _Menu2.default.Container,
            {
              dir: dir,
              position: position,
              maxHeight: maxHeight,
              size: size,
              fixedWidth: fixedWidth,
              onMouseDown: function onMouseDown(event) {
                _this2.menuContainerMousedDown = true;

                setTimeout(function () {
                  _this2.menuContainerMousedDown = false;
                }, 0);
              },
              onBlur: function onBlur() {
                _this2.onClose();
                _this2.focusInput();
              },
              onEscape: function onEscape() {
                _this2.onClose();
                _this2.focusInput();
              },
              animate: true
            },
            menuItems
          );
        }
      ),
      this.renderValidation()
    );
  };

  return MultiSelect;
}(_ThemedComponent3.default);

MultiSelect.Item = _Menu2.default.Item;
MultiSelect.AddItem = _Menu2.default.AddItem;
MultiSelect.HeaderItem = _Menu2.default.HeaderItem;
MultiSelect.LinkItem = _Menu2.default.LinkItem;
MultiSelect.MediaItem = _Menu2.default.MediaItem;
MultiSelect.NextItem = _Menu2.default.NextItem;
MultiSelect.PreviousItem = _Menu2.default.PreviousItem;
MultiSelect.Separator = _Menu2.default.Separator;
MultiSelect.Label = _Label2.default;
MultiSelect.propTypes = {
  className: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  disabled: _propTypes2.default.bool,
  hint: _propTypes2.default.node,
  label: _propTypes2.default.node,
  /**
   * Maximum height of the menu container.
   */
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * Maximum height of the input.
   */
  inputMaxHeight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  positioning: _Menu2.default.propTypes.positioning,
  /**
   * Whether form element fills the space provided.
   */
  stretched: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(["small", "medium"]),
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  validation: _propTypes2.default.oneOf(["error", "warning", "success"]),
  validationText: _propTypes2.default.string,
  /**
   * Selectable items that are displayed within the MultiSelect.
   */
  selectedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Menu items that are displayed within the MultiSelect.
   */
  children: _propTypes2.default.node,
  onTextChange: _propTypes2.default.func,
  textValue: _propTypes2.default.string,
  placeholderText: _propTypes2.default.string,
  fixedWidth: _propTypes2.default.bool,
  showIcon: _propTypes2.default.bool,
  onMenuValueSelected: _propTypes2.default.func,
  menuShouldClose: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(["default", "bare"])
};
MultiSelect.defaultProps = {
  dir: "ltr",
  disabled: false,
  positioning: ["bottom_stretch", "top_stretch"],
  stretched: true,
  size: "medium",
  tabIndex: 0,
  selectedItems: [],
  showIcon: true
};
exports.default = MultiSelect;