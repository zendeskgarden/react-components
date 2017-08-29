import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

import View from "../core/View";

export default class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    disabled: PropTypes.bool,
    muted: PropTypes.bool,
    onChange: PropTypes.func,
    selected: PropTypes.any
  };

  static defaultProps = {
    dir: "ltr"
  };

  constructor(props, context) {
    super(props, context);
    this.keyboard = true;
    this.id = uuid.v4();
  }

  onChange = value => {
    const { onChange } = this.props;

    onChange && onChange(value);
  };

  render() {
    const { children, dir, disabled, muted, selected } = this.props;

    const radios = React.Children.map(children, (item, index) =>
      React.cloneElement(item, {
        disabled: "disabled" in item.props ? item.props.disabled : disabled,
        checked: selected === item.props.value,
        dir: dir,
        key: `radio-${index}`,
        name: this.id,
        muted: "muted" in item.props ? item.props.muted : muted,
        onChange: this.onChange
      })
    );

    return (
      <View>
        {radios}
      </View>
    );
  }
}
