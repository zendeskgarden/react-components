### Default Usage

```jsx
initialState = {
  currentPage: 1
};

<Pagination
  totalPages={25}
  currentPage={state.currentPage}
  onChange={currentPage => setState({ currentPage })}
/>;
```

### Custom Page Padding

```jsx
initialState = {
  currentPage: 15
};

<Pagination
  totalPages={25}
  pagePadding={3}
  currentPage={state.currentPage}
  onChange={currentPage => setState({ currentPage })}
/>;
```

### Custom Page Props

There may be a need to apply custom styling, props, and QA attributes to each actionable page.
This is possible with the `transformPageProps` prop. It provides the page type as well as the
default props for you to modify.

```jsx
initialState = {
  currentPage: 1
};

const transformPageProps = (pageType, props) => {
  props['data-test-id'] = pageType;
  return props;
};

<Pagination
  totalPages={25}
  currentPage={state.currentPage}
  onChange={currentPage => setState({ currentPage })}
  transformPageProps={transformPageProps}
/>;
```
