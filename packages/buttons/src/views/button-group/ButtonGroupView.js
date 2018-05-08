import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendeskgarden/css-buttons';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

import { version } from '../../../package.json';
const COMPONENT_ID = 'buttons.button_group_view';

/**
 * Accepts all `<div>` props
 */
const ButtonGroupView = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(ButtonStyles['l-btn-group'], {
      [ButtonStyles['is-rtl']]: isRtl(props)
    })
})`
  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ButtonGroupView;
