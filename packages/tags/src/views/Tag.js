import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TagStyles from '@zendeskgarden/css-tags';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'tags.tag_view';

const TYPE = {
  GREY: 'grey',
  BLUE: 'blue',
  KALE: 'kale',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Accepts all `<div>` props
 */
const Tag = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(TagStyles['c-tag'], {
      // Sizes
      [TagStyles['c-tag--sm']]: props.size === SIZE.SMALL,
      [TagStyles['c-tag--lg']]: props.size === SIZE.LARGE,

      // Shapes
      [TagStyles['c-tag--pill']]: props.pill,

      // Interaction States
      [TagStyles['is-focused']]: props.focused,
      [TagStyles['is-hovered']]: props.hovered,

      // Colors
      [TagStyles['c-tag--grey']]: props.type === TYPE.GREY,
      [TagStyles['c-tag--blue']]: props.type === TYPE.BLUE,
      [TagStyles['c-tag--kale']]: props.type === TYPE.KALE,
      [TagStyles['c-tag--red']]: props.type === TYPE.RED,
      [TagStyles['c-tag--green']]: props.type === TYPE.GREEN,
      [TagStyles['c-tag--yellow']]: props.type === TYPE.YELLOW,

      // RTL
      [TagStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Tag.propTypes = {
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  pill: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  type: PropTypes.oneOf([TYPE.GREY, TYPE.BLUE, TYPE.KALE, TYPE.RED, TYPE.GREEN, TYPE.YELLOW])
};

/** @component */
export default Tag;
