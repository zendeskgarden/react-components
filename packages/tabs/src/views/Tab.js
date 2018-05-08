import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TabStyles from '@zendeskgarden/css-tabs';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Accepts all `<div>` props
 */
const Tab = styled.div.attrs({
  className: props =>
    classNames(TabStyles['c-tab__list__item'], {
      // Visual states
      [TabStyles['is-hovered']]: props.hovered,
      [TabStyles['is-focused']]: props.focused,
      [TabStyles['is-active']]: props.active,
      [TabStyles['is-disabled']]: props.disabled,
      [TabStyles['is-selected']]: props.selected
    })
})`
  ${props => retrieveTheme('tabs.tab', props)};
`;

Tab.propTypes = {
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

/** @component */
export default Tab;
