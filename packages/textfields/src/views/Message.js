import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import TextStyles from '@zendesk/garden-css-forms/dist/text.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'textfields.message';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all `<div>` props
 */
const Message = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(TextStyles['c-txt__message'], {
      [TextStyles['c-txt__message--success']]: props.validation === VALIDATION.SUCCESS,
      [TextStyles['c-txt__message--warning']]: props.validation === VALIDATION.WARNING,
      [TextStyles['c-txt__message--error']]: props.validation === VALIDATION.ERROR,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default Message;
