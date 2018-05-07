import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import { Label as TextfieldLabel } from '@zendesk/garden-react-textfields';

import { version } from '../../../package.json';
const COMPONENT_ID = 'select.label';

/**
 * Accepts all `<label>` props
 */
const Label = TextfieldLabel.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

/** @component */
export default Label;
