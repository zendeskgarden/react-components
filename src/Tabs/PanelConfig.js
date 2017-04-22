import { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelConfig extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {}
  };

  render() {
    return null;
  }
}
