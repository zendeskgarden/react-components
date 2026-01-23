# ADR-002: Removal of Default Theme Property in Components

2024-09-06

## Context

Garden is a suite of React components distributed across various NPM packages, all crafted using TypeScript, React, and styled-components for CSS. Each component in Garden relies on a `theme` object for styling, which was previously provided through two methods:

- **defaultProps:** Components used a static `DEFAULT_THEME` object as a default property, allowing them to render with predefined styles without explicit theme provision.
- **React Context API:** Components could also receive the `theme` dynamically via a `ThemeProvider`, which encapsulates components and passes the `theme` object through context, allowing real-time theme updates.

With the introduction of a light/dark mode feature in version 9, dynamic theming has become essential. This shift necessitates that all components must now dynamically receive the theme, making the static `defaultProps` approach obsolete.

## Decision

From version 9 onwards, Garden components will no longer accept the theme object via `defaultProps`. Instead, all components must be nested within a `ThemeProvider` to receive the theme through React's context API. This change ensures:

- A unified source for theming, preventing discrepancies and maintenance issues.
- Enhanced support for dynamic theme changes, crucial for features like light/dark modes.

## Consequences

### Positive

- **Consistency and Single Source of Truth:** By mandating the `ThemeProvider`, we establish a single, consistent method for theme distribution, avoiding confusion and potential conflicts from dual theme sources.
- **Dynamic Theming Support:** This alteration is vital for dynamic theming scenarios where themes can change in real-time, ensuring all components update uniformly.
- **Alignment with Industry Standards:** Garden now aligns with the practices of other leading React libraries, reducing the learning curve for developers familiar with similar ecosystems.

### Negative

- **Migration Effort:** Users upgrading from v8 to v9 will need to wrap their Garden components with `ThemeProvider`. This adjustment may require some effort, but it simplifies long-term maintenance and enhances flexibility in theming.

By enforcing the use of `ThemeProvider`, Garden not only adopts a robust and scalable approach to theming but also adheres to contemporary React development best practices, enhancing both user experience and developer productivity.

### Links

**Reference PR:** https://github.com/zendeskgarden/react-components/pull/1905
