import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../Button";
import Menu from "../Menu";

export default class MenuOverflow extends Component {
  static propTypes = {
    isFocusable: PropTypes.bool,
    theme: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    isFocusable: false
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      isFocused: false
    };
  }

  render() {
    const { isFocusable, theme, children } = this.props;
    const { isFocused } = this.state;

    const trigger = ({ open }) =>
      <Button.Core
        className={classNames(theme.overflow_menu, {
          [theme.is_focused]: isFocused && !open
        })}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        tabIndex={isFocusable ? 0 : -1}
      >
        &nbsp;
      </Button.Core>;

    return (
      <Menu
        positioning={["bottom_left", "top_left"]}
        stretched
        trigger={trigger}
      >
        {children}
      </Menu>
    );
  }
}
