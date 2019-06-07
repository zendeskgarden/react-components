/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TagStyles from '@zendeskgarden/css-tags';

import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.tag_view';

const TYPE = {
  GREY: 'grey',
  BLUE: 'blue',
  KALE: 'kale',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow',
  FUSCHIA: 'fuschia',
  PINK: 'pink',
  CRIMSON: 'crimson',
  ORANGE: 'orange',
  LEMON: 'lemon',
  LIME: 'lime',
  MINT: 'mint',
  TEAL: 'teal',
  AZURE: 'azure',
  ROYAL: 'royal',
  PURPLE: 'purple'
};

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Accepts all `<div>` props
 */
const Tag = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(TagStyles['c-tag'], {
    // Sizes
    [TagStyles['c-tag--sm']]: props.size === SIZE.SMALL,
    [TagStyles['c-tag--lg']]: props.size === SIZE.LARGE,

    // Shapes
    [TagStyles['c-tag--pill']]: props.pill,
    [TagStyles['c-tag--round']]: props.round,

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
    [TagStyles['c-tag--fuschia']]: props.type === TYPE.FUSCHIA,
    [TagStyles['c-tag--pink']]: props.type === TYPE.PINK,
    [TagStyles['c-tag--crimson']]: props.type === TYPE.CRIMSON,
    [TagStyles['c-tag--orange']]: props.type === TYPE.ORANGE,
    [TagStyles['c-tag--lemon']]: props.type === TYPE.LEMON,
    [TagStyles['c-tag--lime']]: props.type === TYPE.LIME,
    [TagStyles['c-tag--mint']]: props.type === TYPE.MINT,
    [TagStyles['c-tag--teal']]: props.type === TYPE.TEAL,
    [TagStyles['c-tag--azure']]: props.type === TYPE.AZURE,
    [TagStyles['c-tag--royal']]: props.type === TYPE.ROYAL,
    [TagStyles['c-tag--purple']]: props.type === TYPE.PURPLE,

    // RTL
    [TagStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Tag.propTypes = {
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  pill: PropTypes.bool,
  round: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  type: PropTypes.oneOf([
    TYPE.GREY,
    TYPE.BLUE,
    TYPE.KALE,
    TYPE.RED,
    TYPE.GREEN,
    TYPE.YELLOW,
    TYPE.FUSCHIA,
    TYPE.PINK,
    TYPE.CRIMSON,
    TYPE.ORANGE,
    TYPE.LEMON,
    TYPE.LIME,
    TYPE.MINT,
    TYPE.TEAL,
    TYPE.AZURE,
    TYPE.ROYAL,
    TYPE.PURPLE
  ])
};

/** @component */
export default Tag;
