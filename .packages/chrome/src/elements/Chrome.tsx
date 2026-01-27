/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, getColor, useDocument } from '@zendeskgarden/react-theming';
import { readableColor } from 'polished';
import PropTypes from 'prop-types';
import React, { useMemo, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledChrome } from '../styled';
import { IChromeProps } from '../types';
import { ChromeContext } from '../utils/useChromeContext';

/**
 * @deprecated no longer for general use
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Chrome = React.forwardRef<HTMLDivElement, IChromeProps>(
  ({ hue, isFluid, ...props }, ref) => {
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const isLightMemoized = useMemo(() => {
      if (hue) {
        const backgroundColor = getColor({ theme, hue });
        const LIGHT_COLOR = 'white';

        /* prevent this expensive computation on every render */
        return (
          readableColor(backgroundColor!, LIGHT_COLOR, undefined, false /* strict */) ===
          LIGHT_COLOR
        );
      }

      return false;
    }, [hue, theme]);

    const isLight = hue ? isLightMemoized : undefined;
    const chromeContextValue = useMemo(
      () => ({ hue: hue || 'chromeHue', isLight }),
      [hue, isLight]
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
        <StyledChrome ref={ref} {...props} data-test-light={isLight} />
      </ChromeContext.Provider>
    );
  }
);

Chrome.displayName = 'Chrome';

Chrome.propTypes = {
  hue: PropTypes.string
};
