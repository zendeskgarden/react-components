import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

/**
 * Supports all `<div>` props
 */
const Well = styled.div.attrs({
  className: props =>
    classNames(CalloutStyles['c-callout'], {
      // RTL
      [CalloutStyles['is-rtl']]: isRtl(props),

      // Styles
      [CalloutStyles['c-callout--recessed']]: props.recessed,
      [CalloutStyles['c-callout--dialog']]: props.floating
    })
})`
  ${props => retrieveTheme('notifications.well', props)};
`;

Well.propTypes = {
  recessed: PropTypes.bool,
  floating: PropTypes.bool
};

/** @component */
export default Well;
