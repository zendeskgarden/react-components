import { withTheme as styledWithTheme } from 'styled-components';

/** @component */
export default function withTheme(WrappedComponent) {
  return styledWithTheme(WrappedComponent);
}
