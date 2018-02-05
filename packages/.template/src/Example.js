import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

const Example = styled.div.attrs({
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

  ${props => retrieveTheme('example.namespace', props)};
`;

Example.propTypes = {
  coolProp: PropTypes.bool
};

/** @component */
export default Example;
