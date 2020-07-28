# Garden API

The API for Garden components is based on a Container-View-Element
architecture. This architecture provides a separation of concerns, advancing
[development](development.md) with an approach that is repeatable,
consistent, and reliable. The component parts of the architecture are explained in more detail below.

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
  `` const Button = styled.button`...`; ``. <!-- markdownlint-disable -->
- Analytics `attrs` are added for `data-garden-id` and `data-garden-version`.
- [Concentric](https://github.com/brandon-rhodes/Concentric-CSS) CSS order is
  maintained with the help of `stylelint`.
- Grouped CSS is important for style maintainablility and must be authored in
  the following order for optimal specificity (see
  [StyledTag](https://github.com/zendeskgarden/react-components/blob/main/packages/tags/src/styled/StyledTag.ts)
  for an ideal example):
  - "Base" properties: display, position, flex, transition, direction, etc
    (anything NOT related to size or color)
  - `${sizeStyles(props)}`: a function that contains all properties related
    to component sizing (usually based on calculated relationships), i.e.
    margin, padding, width, height, line-height, font-size – all grouped
    ordering (including pseudos, children, etc) applies within the
    function, limited to size properties
  - Pseudo-class "base" (i.e. not color) properties in "LVHFA" order:
    - `:hover`
    - `:focus`
    - `:active`
  - `${colorStyles(props)}`: a function that contains all properties related
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
  `${retrieveComponentStyles(COMPONENT_ID, props)}` which allows an
  implementer to leverage the
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
