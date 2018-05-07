import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.nav';

/**
 * Accepts all `<div>` props
 */
const Nav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ChromeStyles['c-chrome__nav'], {
      // State
      [ChromeStyles['c-chrome__nav--expanded']]: props.expanded,

      // Colors
      [ChromeStyles['c-chrome__nav--dark']]: props.dark,
      [ChromeStyles['c-chrome__nav--light']]: props.light
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Nav.propTypes = {
  /** Expand navigation area to include item text */
  expanded: PropTypes.bool,
  /** Apply dark styling */
  dark: PropTypes.bool,
  /** Apply light styling */
  light: PropTypes.bool
};

/** @component */
export default Nav;
