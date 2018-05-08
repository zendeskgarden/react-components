import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'textfields.text_group';

/**
 * Accepts all `<div>` props
 */
const TextGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(TextStyles['c-txt'], {
      [TextStyles['c-txt--inline']]: props.inline,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

TextGroup.propTypes = {
  inline: PropTypes.bool
};

/** @component */
export default TextGroup;
