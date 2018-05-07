import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaginationStyles from '@zendesk/garden-css-pagination';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
import Page from './Page';
const COMPONENT_ID = 'pagination.next_page';

/**
 * Accepts all `<li>` props
 */
const NextPage = styled(Page).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: PaginationStyles['c-pagination__page--next']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

NextPage.propTypes = {
  current: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  hidden: PropTypes.bool
};

/** @component */
export default NextPage;
