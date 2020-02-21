/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps, DefaultTheme } from 'styled-components';
import { readableColor } from 'polished';
import { withTheme, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { ChromeContext } from '../utils/useChromeContext';
import { StyledChrome } from '../styled';

interface IChromeProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply a custom hue to chrome navigation */
  hue?: string;
}

/**
 * Accepts all `<div>` attributes and events
 */
const Chrome = React.forwardRef<HTMLDivElement, IChromeProps & ThemeProps<DefaultTheme>>(
  ({ hue, theme, ...props }, ref) => {
    const isLightMemoized = useMemo(() => {
      if (hue) {
        const backgroundColor = getColor(hue, 600, theme);
        const LIGHT_COLOR = 'white';

        /* prevent this expensive computation on every render */
        return readableColor(backgroundColor!, LIGHT_COLOR) === LIGHT_COLOR;
      }

      return false;
    }, [hue, theme]);

    const isLight = hue ? isLightMemoized : false;
    const isDark = hue ? !isLightMemoized : false;
    const chromeContextValue = { hue: hue || 'chromeHue', isLight, isDark };

    return (
      <ChromeContext.Provider value={chromeContextValue}>
        <StyledChrome ref={ref} {...props} data-test-light={isLight} data-test-dark={isDark} />
      </ChromeContext.Provider>
    );
  }
);

Chrome.displayName = 'Chrome';

Chrome.propTypes = {
  hue: PropTypes.string
};

Chrome.defaultProps = {
  theme: DEFAULT_THEME
};

/** @component */
export default withTheme(Chrome) as React.FC<IChromeProps & React.RefAttributes<HTMLDivElement>>;
