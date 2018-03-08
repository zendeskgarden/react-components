import styled from 'styled-components';
import classNames from 'classnames';
import PaginationStyles from '@zendesk/garden-css-pagination';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'pagination.pagination_view';

/**
 * Accepts all `<ul>` props
 */
const PaginationView = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(PaginationStyles['c-pagination'], {
      // RTL
      [PaginationStyles['is-rtl']]: isRtl(props)
    })
})`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default PaginationView;
