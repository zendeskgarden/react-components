/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import scrollTo from 'dom-helpers/util/scrollTo';
import { isRtl, withTheme, getDocument } from '@zendeskgarden/react-theming';

import ControlledComponent from '../utils/ControlledComponent';
import composeEventHandlers from '../utils/composeEventHandlers';
import IdManager from '../utils/IdManager';
import KEY_CODES from '../constants/KEY_CODES';
import SingleSelectionModel from '../utils/SingleSelectionModel';

const KEYBOARD_DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  BOTH: 'both'
};

export class SelectionContainer extends ControlledComponent {
  static propTypes = {
    /**
     * @param {Object} renderProps
     * @param {Function} renderProps.getContainerProps - Props to be spread onto container element
     * @param {Function} renderProps.getItemProps - Props to be spread onto each selectable element. `({item})` is required.
     * @param {Any} renderProps.focusedKey - Unique key of currently focused item
     * @param {Any} renderProps.selectedKey - Unique key of currently selected item
     * @param {Function} renderProps.focusSelectionModel - The SingleSelectionModel that controls the focus state
     */
    children: PropTypes.func,
    /**
     * Whether the up/down or left/right arrow keys should be used for keyboard navigation
     */
    direction: PropTypes.oneOf([
      KEYBOARD_DIRECTION.HORIZONTAL,
      KEYBOARD_DIRECTION.VERTICAL,
      KEYBOARD_DIRECTION.BOTH
    ]),
    /**
     * Default item to assign as focused if container is focused (-1 is equivalent to last item)
     */
    defaultFocusedIndex: PropTypes.number,
    /**
     * Unique key of currently focused item
     */
    focusedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Unique key of currently selected item
     */
    selectedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Callback for all state objects. Used when in 'controlled' mode.
     **/
    onStateChange: PropTypes.func,
    /**
     * The root ID to use for descendants. A unique ID is created if none is provided.
     **/
    id: PropTypes.string,
    /**
     * Same as children
     **/
    render: PropTypes.func
  };

  static defaultProps = {
    defaultFocusedIndex: 0,
    direction: KEYBOARD_DIRECTION.HORIZONTAL
  };

  constructor(...args) {
    super(...args);

    this.state = {
      focusedKey: undefined,
      selectedKey: undefined,
      id: IdManager.generateId()
    };

    this.focusSelectionModel = new SingleSelectionModel();
    this.focusSelectionModel.onSelectionChanged = this.onFocusSelectionModelChange;
  }

  componentDidUpdate(prevProps, prevState) {
    const current = this.props.focusedKey === undefined ? this.state : this.props;
    const prev = prevProps.focusedKey === undefined ? prevState : prevProps;
    const doc = getDocument ? getDocument(this.props) : document;

    /**
     * We must programatically scroll the newly focused element into view.
     * Side-effect of the `aria-activedescendant` accessibility strategy.
     */
    if (typeof current.focusedKey !== 'undefined' && current.focusedKey !== prev.focusedKey) {
      const itemNode = doc.getElementById(this.getItemId(current.focusedKey));

      /* istanbul ignore if */
      if (itemNode) {
        scrollTo(itemNode);
      }
    }
  }

  keyDownEventHandlers = {
    [KEY_CODES.ENTER]: event => {
      event.preventDefault();
      const { focusedKey } = this.getControlledState();

      this.selectItem(focusedKey, focusedKey);
    },
    [KEY_CODES.SPACE]: event => {
      event.preventDefault();
      const { focusedKey } = this.getControlledState();

      this.selectItem(focusedKey, focusedKey);
    },
    [KEY_CODES.END]: event => {
      event.preventDefault();
      this.focusSelectionModel.selectLast();
    },
    [KEY_CODES.HOME]: event => {
      event.preventDefault();
      this.focusSelectionModel.selectFirst();
    },
    [KEY_CODES.LEFT]: event => {
      const { direction } = this.props;

      if (direction !== KEYBOARD_DIRECTION.VERTICAL) {
        event.preventDefault();

        if (isRtl(this.props)) {
          this.focusSelectionModel.selectNext();
        } else {
          this.focusSelectionModel.selectPrevious();
        }
      }
    },
    [KEY_CODES.RIGHT]: event => {
      const { direction } = this.props;

      if (direction !== KEYBOARD_DIRECTION.VERTICAL) {
        event.preventDefault();

        if (isRtl(this.props)) {
          this.focusSelectionModel.selectPrevious();
        } else {
          this.focusSelectionModel.selectNext();
        }
      }
    },
    [KEY_CODES.UP]: event => {
      const { direction } = this.props;

      if (direction !== KEYBOARD_DIRECTION.HORIZONTAL) {
        event.preventDefault();
        this.focusSelectionModel.selectPrevious();
      }
    },
    [KEY_CODES.DOWN]: event => {
      const { direction } = this.props;

      if (direction !== KEYBOARD_DIRECTION.HORIZONTAL) {
        event.preventDefault();
        this.focusSelectionModel.selectNext();
      }
    }
  };

  onFocusSelectionModelChange = ({ newSelection }) => {
    const focusedKey = this.indexKeyMap[newSelection];

    this.setControlledState({ focusedKey });
  };

  selectItem = (selectedKey, focusedKey) => {
    this.setControlledState({ selectedKey, focusedKey });
  };

  getContainerId = () => `${this.getControlledState().id}--container`;

  getContainerProps = ({
    id = this.getContainerId(),
    role = 'listbox',
    tabIndex = 0,
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown,
    ...other
  } = {}) => {
    const { focusedKey } = this.getControlledState();
    const { defaultFocusedIndex } = this.props;

    return {
      id,
      role,
      tabIndex,
      'aria-activedescendant': this.getItemId(focusedKey),
      onKeyDown: composeEventHandlers(onKeyDown, event => {
        const keyHandler = this.keyDownEventHandlers[event.keyCode];

        keyHandler && keyHandler(event);
      }),
      onFocus: composeEventHandlers(onFocus, () => {
        if (!this.containerMouseDown) {
          if (typeof focusedKey === 'undefined') {
            let selectedIndex = this.keyIndexMap[this.getControlledState().selectedKey];

            if (typeof selectedIndex === 'undefined') {
              selectedIndex =
                defaultFocusedIndex === -1
                  ? (selectedIndex = Object.keys(this.keyIndexMap).length - 1)
                  : defaultFocusedIndex;
            }

            this.focusSelectionModel.select(selectedIndex);
          }
        }
      }),
      onMouseDown: composeEventHandlers(onMouseDown, () => {
        this.containerMouseDown = true;

        /**
         * This is necessary to recognize focus events caused by keyboard vs mouseDown.
         * Due to React event ordering this is always called before onFocus.
         */
        setTimeout(() => {
          this.containerMouseDown = false;
        }, 0);
      }),
      onBlur: composeEventHandlers(onBlur, () => {
        this.focusSelectionModel.clearSelection();
      }),
      ...other
    };
  };

  getItemId = key =>
    typeof key === 'undefined' ? null : `${this.getControlledState().id}--item-${key}`;

  getItemProps = (
    { key, id = this.getItemId(key), role = 'option', onClick, ...props } = {},
    { selectedAriaKey = 'aria-selected' } = {}
  ) => {
    if (typeof key === 'undefined') {
      throw new Error(
        '"key" must be defined within getItemProps regardless of being used within a .map()'
      );
    }

    const { selectedKey, focusedKey } = this.getControlledState();
    const isSelectedItem = key === selectedKey;
    const isFocusedItem = key === focusedKey;

    const currentIndex = this.focusSelectionModel.numItems;

    this.indexKeyMap[currentIndex] = key;
    this.keyIndexMap[key] = currentIndex;

    if (isFocusedItem || (typeof focusedKey === 'undefined' && isSelectedItem)) {
      this.focusSelectionModel.selectedIndex = currentIndex;
    }

    this.focusSelectionModel.numItems++;

    return {
      id,
      key,
      role,
      [selectedAriaKey]: isSelectedItem,
      onClick: composeEventHandlers(onClick, () => {
        this.selectItem(key, undefined);
      }),
      ...props
    };
  };

  render() {
    const { children, render = children } = this.props;
    const { focusedKey, selectedKey } = this.getControlledState();

    this.focusSelectionModel.reset();
    this.indexKeyMap = {};
    this.keyIndexMap = {};
    this.items = [];

    return render({
      getContainerProps: this.getContainerProps,
      getItemProps: this.getItemProps,
      focusedKey,
      selectedKey,
      focusSelectionModel: this.focusSelectionModel
    });
  }
}

export default withTheme(SelectionContainer);
