import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import TextStyles from '@zendesk/garden-css-forms/dist/text.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'textfields.label';

/**
 * Accepts all `<label>` props
 */
const Label = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(TextStyles['c-txt__label'], {
      [TextStyles['c-txt__label--regular']]: props.regular,
      [TextStyles['c-txt__label--sm']]: props.small,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

/** @component */
export default Label;
