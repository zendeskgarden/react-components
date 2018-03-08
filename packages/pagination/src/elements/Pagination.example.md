### Default Usage

```jsx
initialState = {
  currentPage: 1
};

<Pagination totalPages={25} currentPage={state.currentPage} onStateChange={setState} />;
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
  onStateChange={setState}
/>;
```
