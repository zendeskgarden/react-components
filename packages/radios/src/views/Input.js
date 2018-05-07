import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import CheckboxStyles from '@zendesk/garden-css-forms/dist/checkbox.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'radios.input';

/**
 * Hidden `<input>` used to show custom radio visualization. Accepts all `<input>` props.
 */
const Input = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: CheckboxStyles['c-chk__input'],
  type: 'radio',
  tabIndex: 0
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Input;
