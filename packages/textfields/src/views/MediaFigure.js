import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import TextStyles from '@zendesk/garden-css-forms/dist/text.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'textfields.media_figure';

/**
 * Accepts all `<div>` props
 */
const MediaFigure = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: TextStyles['c-txt__input--media__figure']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default MediaFigure;
