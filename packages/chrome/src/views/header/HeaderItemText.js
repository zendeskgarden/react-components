import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.header_item_text';

/**
 * Accepts all `<span>` props
 */
const HeaderItemText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ChromeStyles['c-chrome__body__header__item__text'], {
      [ChromeStyles['is-clipped']]: props.clipped
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderItemText.propTypes = {
  /** Clip text (but leave accessible to screenreaders) for an icon-only header item */
  clipped: PropTypes.bool
};

/** @component */
export default HeaderItemText;
