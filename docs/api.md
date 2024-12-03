# Garden API

The API for Garden components is based on a Container-View-Element
architecture. This architecture provides a separation of concerns, advancing
[development](development.md) with an approach that is repeatable,
consistent, and reliable. The component parts of the architecture are explained
in more detail below. Use the `npm run new`
[command](development.md#package-creation) to generate starter code that
satisfies API rules for Garden components.

## Container components

Containers are no-UI components that inform the accessibility, keyboard
interaction, and RTL awareness for Garden components. Containers encapsulate
this complex logic into React
[hooks](https://reactjs.org/docs/hooks-intro.html) (or [render
props](https://reactjs.org/docs/render-props.html)) that are re-used
throughout the `react-components` codebase or can serve as the baseline for
new component development beyond Garden.

Learn more about Garden containers by visiting the
[`react-containers`](https://github.com/zendeskgarden/react-containers) repo.

## View components

Garden relies on [`styled-components`](https://styled-components.com/) – a
fast, lightweight, and popular React library – for rendering component CSS.
Visual design is critical to the success of Garden and we take pixel pride in
ensuring the details live up to expectations.

### Rules

- Styling should endeavor to support the most canonical HTML form(s)
  possible.
- Components extend the most appropriate semantic HTML element, e.g.
  ``const Button = styled.button`...`;``. <!-- markdownlint-disable -->
- Analytics `attrs` are added for `data-garden-id` and `data-garden-version`.
- [Concentric](https://github.com/brandon-rhodes/Concentric-CSS) CSS order is
  maintained with the help of `stylelint`.
- Grouped CSS is important for style maintainablility and must be authored in
  the following order for optimal specificity (see
  [StyledTag](https://github.com/zendeskgarden/react-components/blob/main/packages/tags/src/styled/StyledTag.ts)
  for an ideal example):
  - "Base" properties: display, position, flex, transition, direction, etc
    (anything NOT related to size or color)
  - `${sizeStyles}`: a function that contains all properties related
    to component sizing (usually based on calculated relationships), i.e.
    margin, padding, width, height, line-height, font-size – all grouped
    ordering (including pseudos, children, etc) applies within the
    function, limited to size properties
  - Pseudo-class "base" (i.e. not color) properties in "LVHFA" order:
    - `:hover`
    - `:focus`
    - `:active`
  - `${colorStyles}`: a function that contains all properties related
    to component color, i.e. border-color, background-color, color, box-shadow
    – including any color modifications based on pseudo-class states, in the
    order shown above – all grouped ordering (including psuedos, children,
    etc) applies within the function, limited to color properties
  - Psuedo-element "base" (i.e. not size or color) properties connected with
    `::before` and `::after`
  - Child (i.e. `& > *`) and child component (i.e. `& ${StyledChild}`)
    property groupings – note that children styled components should contain
    all their CSS properties, when possible
- The last declaration in any view component is
  `${componentStyles}` which allows an implementer to leverage the
  [`theme`](https://zendeskgarden.github.io/react-components/theming/)
  "components" object to override specific component styles.
- The view component `defaultProps` must contain `theme: DEFAULT_THEME` for
  cases when the component might be used outside the context of a
  `<ThemeProvider>`.
- With the exception of embedded icons, view components do not return JSX.

## Element components

Elements are high-abstraction wrappers that incorporate container hooks (as
needed) for interaction and rely on view components for styling. These
components are exported as the public interface for Garden.

### Rules

- Components are created using
  [`React.forwardRef`](https://reactjs.org/docs/react-api.html#reactforwardref)
  in order to provide `ref` access to the underlying view component's DOM
  element.
- Boolean props use `is[Prop]`/`has[Prop]` naming conventions in order to
  steer clear from DOM attribute naming conflicts.
- Exceptions to boolean naming are props that map directly to HTML attributes
  such as `disabled` or `hidden`.
- Standard element JSDoc follows a strict set of rules outlined under the
  [Garden documentation](documentation.md) guidelines

### Structures

The following annotated structures outline the basic code format for simple,
subcomponent, and complex elements.

#### Simple

The simplest form of a Garden element component is annotated below.

```tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
/* [1] */ export const SimpleComponent = forwardRef<HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledSimpleElement ref={ref} {...props} />
));

/* [2] */ SimpleComponent.displayName = 'SimpleComponent';
```

1. Always add the `@extends` JSDoc to the export. The clause is extracted for
   website API [documentation](documentation.md).
2. The `displayName` definition should be set to the exported component name and
   satisfies linter checks for runtime naming

#### Subcomponent

The `SubElement` imported into the [complex example](#complex) below is
structured here along with annotation that highlights the difference in
structure.

```tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledSubElement } from '../styled';

/* [1] */ export interface IElementSubElementProps extends HTMLAttributes<HTMLElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}

/* [2] */ const SubElementComponent = forwardRef<IElementSubElementProps>((props, ref) => (
  <StyledSubElement ref={ref} {...props} />
));

/* [3] */ SubElementComponent.displayName = 'Element.SubElement';

/* [4] */ SubElementComponent.propTypes = {
  isRegular: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
/* [5] */ export const SubElement = SubElementComponent;
```

1. The exported interface combines the name of the complex parent element
   together with the `SubElement`
2. The functional component uses _XxxComponent_ naming. The `const` is not
   exported due to a `displayName` [issue with
   Storybook](https://github.com/storybookjs/storybook/issues/12263#issuecomment-1008870685).
3. Use the `Element.SubElement` string construct for consistent subcomponent
   `displayName` naming
4. All API props should be set as `PropTypes` for runtime error checking
5. The `@extends` clause is always applied to the export. This export
   hack-around allows subcomponent props to display in Storybook.

#### Complex

The following typed structure represents the layout for complex Garden
components – those with subcomponents as static properties. The annotations
listed below document areas of interest.

```tsx
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
/* [1] */ import { SubElement } from './SubElement';
import { StyledElement } from '../styled';

export interface IElementProps extends HTMLAttributes<HTMLElement> {
  /** Applies compact styling */
  isCompact?: boolean;
}

/* [2] */ const ElementComponent = forwardRef<HTMLElement, IElementProps>((props, ref) => (
  <StyledElement ref={ref} {...props} />
));

/* [3] */ ElementComponent.displayName = 'Element';

/* [4] */ ElementComponent.propTypes = {
  isCompact: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
/* [5] */ export const Element = ElementComponent as typeof ElementComponent & {
  SubElement: typeof SubElement;
};

/* [6] */ Element.SubElement = SubElement;
```

1. Subcomponents should each reside in separate files. In Garden, one component
   = one file
2. The non-exported `const` is a React functional component and uses _XxxComponent_
   naming style
3. The `displayName` definition should be set to the exported component name and
   satisfies linter checks for runtime naming
4. All API props should be set as `PropTypes` for runtime error checking
5. The component export provides type assertion that leverages the parent
   component type and appends subcomponent type information. Always remember to add
   the `@extends` JSDoc to be extracted for website API
   [documentation](documentation.md).
6. After the type has been defined, subcomponents are exposed via static
   property notation
