import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";
import ThemedComponent from "../utils/theming/ThemedComponent";
import Label from "../Label";
import styles from "./styles.css";

class MultiSelectLabel extends ThemedComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "MultiSelect",
      styles
    });
  }

  render() {
    const { theme } = this;
    const { className, children, ...otherProps } = this.props;

    return (
      <Label
        className={classNames(theme.selectable_label, className)}
        {...otherProps}
      >
        {children}
      </Label>
    );
  }
}

const SelectableMultiSelectLabel = Selectable(MultiSelectLabel, {
  selectEvent: "onClick"
});

// Static identifier for use within MultiSelect
SelectableMultiSelectLabel.MultiSelectLabel = true;

export default SelectableMultiSelectLabel;
