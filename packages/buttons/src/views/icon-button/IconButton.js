import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonStyles from '@zendesk/garden-css-buttons';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../../package.json';
const COMPONENT_ID = 'buttons.icon_button';

import Button from '../Button';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

const IconButton = styled(Button).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ButtonStyles['c-btn--icon']
})`
  ${props => retrieveTheme('buttons.icon_button', props)};
`;

IconButton.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies muted button styling */
  muted: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool
};

IconButton.defaultProps = {
  pill: true,
  muted: true,
  basic: true
};

/** @component */
export default IconButton;
