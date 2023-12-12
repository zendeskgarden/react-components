/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { readableColor } from 'polished';
import { getColor, useDocument } from '@zendeskgarden/react-theming';
import { IChromeProps } from '../types';
import { ChromeContext } from '../utils/useChromeContext';
import { StyledChrome } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Chrome = React.forwardRef<HTMLDivElement, IChromeProps>(
  ({ hue, isFluid, ...props }, ref) => {
    const theme = useContext(ThemeContext);
    const isLightMemoized = useMemo(() => {
      if (hue) {
        const backgroundColor = getColor(hue, 600, theme);
        const LIGHT_COLOR = 'white';

        /* prevent this expensive computation on every render */
        return (
          readableColor(backgroundColor!, LIGHT_COLOR, undefined, false /* strict */) ===
          LIGHT_COLOR
        );
      }

      return false;
    }, [hue, theme]);

    const isLight = hue ? isLightMemoized : false;
    const isDark = hue ? !isLightMemoized : false;
    const chromeContextValue = useMemo(
      () => ({
        hue: hue || (theme.colors.base === 'dark' ? 'neutralHue' : 'chromeHue'),
        isLight,
        isDark
      }),
      [hue, isLight, isDark, theme.colors.base]
    );
    const environment = useDocument(theme);

    useEffect(() => {
      if (environment && !isFluid) {
        const htmlElement = environment.querySelector('html');

        if (htmlElement) {
          const defaultHtmlPosition = htmlElement.style.position;

          htmlElement.style.position = 'fixed';

          return () => {
            htmlElement.style.position = defaultHtmlPosition;
          };
        }
      }

      return undefined;
    }, [environment, isFluid]);

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
