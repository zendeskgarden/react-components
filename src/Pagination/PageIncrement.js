import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles.css";

class PageIncrement extends ThemedComponent {
  static propTypes = {
    value: PropTypes.oneOf(["previous", "next"]).isRequired,
    description: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired
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
      selectedByMouse,
      selected,
      disabled,
      value,
      description,
      onSelection
    } = this.props;

    return (
      <View
        className={classNames(theme.page, {
          [theme.page_previous]: value === "previous",
          [theme.page_next]: value === "next",
          [theme.is_hidden]: disabled,
          [theme.is_focused]: !selectedByMouse && selected
        })}
        aria-hidden={disabled}
        aria-disabled={disabled}
        aria-label={description}
        onClick={onSelection}
      >
        {description}
      </View>
    );
  }
}

export default Selectable(PageIncrement, {
  selectEvent: "onClick"
});
