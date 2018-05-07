import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

import { version } from '../package.json';
const COMPONENT_ID = 'example.component_id';

const Example = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames('example-class', {
      // RTL
      'example-rtl-class': isRtl(props),

      // Styles
      'example-cool-class': props.coolProp
    })
})`
  color: red;

  :hover {
    color: blue;
  }

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Example.propTypes = {
  coolProp: PropTypes.bool
};

/** @component */
export default Example;
