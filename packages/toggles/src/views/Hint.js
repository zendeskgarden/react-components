import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'toggles.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(CheckboxStyles['c-chk__hint'], CheckboxStyles['c-chk__hint--toggle'], {
      // RTL
      [CheckboxStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Hint;
