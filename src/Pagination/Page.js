import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

class Page extends ThemedComponent {
  static propTypes = {
    /**
     * If the page is currently selected.
     */
    isCurrent: PropTypes.bool,
    /**
     * If the page allows animation.
     */
    isAnimated: PropTypes.bool,
    /**
     * Callback when the page is selected.
     */
    onSelection: PropTypes.func.isRequired,
    /**
     * The label to apply to the page element.
     */
    ariaLabel: PropTypes.string.isRequired
  };

  static defaultProps = {
    isCurrent: false,
    isFocused: false,
    isAnimated: false,
    selected: false
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Pagination",
      styles
    });
  }

  render() {
    const { theme } = this;
    const {
      isCurrent,
      isAnimated,
      ariaLabel,
      onSelection,
      selectedByMouse,
      selected
    } = this.props;

    return (
      <View
        className={classNames(theme.page, {
          [theme.is_current]: isCurrent,
          [theme.is_focused]: !selectedByMouse && selected,
          [theme.no_animation]: !isAnimated
        })}
        aria-label={ariaLabel}
        aria-current={isCurrent}
        onClick={onSelection}
      >
        {this.props.children}
      </View>
    );
  }
}

export default Selectable(Page, {
  selectEvent: "onClick"
});
