# Garden TypeScript

Garden follows a standardized approach for shared interface and type
definitions. These standards result in code that is structured for reuse and
expose type primitives that are extracted for [generated API
documentation](https://github.com/zendeskgarden/scripts/tree/main/src/cmd/docgen#readme).
The following rules, built upon [element component
structures](api.md#structures), define a baseline for standard Garden
interfaces.

## Rules

- naming
  - all interfaces use `IComponentXxxProps` convention
  - all types use `CamelCase` convention
  - all array constants use `UPPER_CASE` convention
- all exported [element component](api.md#element-components) interfaces live
  under a `src/types` folder
  - array constants are defined _as const_, i.e. `export const ARRAY = [ ... ] as const`;
  - interface types are defined by reusing array constants when possible, i.e.
    `export type TypeDefinition = typeof ARRAY[number]`;
  - non-shared interfaces (view, context, etc.) are _not_ placed under
    `src/types`, but rather live next to the components that they type
- when possible, [view component](api.md#view-components) (`IStyledXxxProps`)
  and context interfaces are defined in terms of the exported element component
  interface. Familiarity with [utility
  types](https://www.typescriptlang.org/docs/handbook/utility-types.html) is
  essential for understanding extension type transformations.
- javascript enums are not acceptable for use in type definitions – enums are
  [generally
  discouraged](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums)
  in modern TypeScript, result in code that is difficult for docgen to parse, and
  structures that run [counter to the
  grain](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
  of the web

## Note

Take careful notice of the element interfaces and constants that are required to
build a component’s [demo story](demo.md). These are the same interfaces and
constants that should be exported from the package’s `index.ts` as they will
likely offer a similar benefit to external component consumers. Also note,
that Garden should not export `type` definitions. These are available for reuse
through the publicly exported `interface` (i.e. `IButtonProps['size']`).
