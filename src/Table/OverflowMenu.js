import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
      <div
        aria-haspopup="true"
        role="button"
        className={classNames(theme.overflow_menu, {
          [theme.is_focused]: isFocused && !open
        })}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        tabIndex={isFocusable ? 0 : -1}
      >
        <span>&nbsp;</span>
      </div>;

    return (
      <Menu
        className={theme.popup}
        triggerClassName={theme.popup}
        positioning={["bottom_left", "top_left"]}
        marginBottom={20}
        marginTop={-8}
        trigger={trigger}
      >
        {children}
      </Menu>
    );
  }
}
