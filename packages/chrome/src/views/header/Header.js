import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.header';

/**
 * Accepts all `<header>` props
 */
const Header = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ChromeStyles['c-chrome__body__header'], {
      [ChromeStyles['c-chrome__body__header--standalone']]: props.standalone
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Header.propTypes = {
  /** Display logo for standlone usage  */
  standalone: PropTypes.bool
};

/** @component */
export default Header;
