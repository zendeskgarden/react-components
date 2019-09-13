## DEPRECATION WARNING

This component has been deprecated in favor of the API provided in the
[@zendeskgarden/container-pagination](https://www.npmjs.com/package/@zendeskgarden/container-pagination)
package.

This component will be removed in a future major release.

```jsx static
<PaginationContainer>
  {({
    getContainerProps,
    getPageProps,
    getPreviousPageProps,
    getNextPageProps,
    focusedKey,
    selectedKey
  }) => (
    <PaginationView {...getContainerProps()}>
      <PreviousPage
        {...getPreviousPageProps({
          key: 'previous',
          focused: focusedKey === 'previous',
          current: selectedKey === 'previous'
        })}
      />
      <Page {...getPageProps({ key: 1, focused: focusedKey === 1, current: selectedKey === 1 })}>
        1
      </Page>
      <Page {...getPageProps({ key: 2, focused: focusedKey === 2, current: selectedKey === 2 })}>
        2
      </Page>
      <Page {...getPageProps({ key: 3, focused: focusedKey === 3, current: selectedKey === 3 })}>
        3
      </Page>
      <Page {...getPageProps({ key: 4, focused: focusedKey === 4, current: selectedKey === 4 })}>
        4
      </Page>
      <Page {...getPageProps({ key: 5, focused: focusedKey === 5, current: selectedKey === 5 })}>
        5
      </Page>
      <Page {...getPageProps({ key: 6, focused: focusedKey === 6, current: selectedKey === 6 })}>
        6
      </Page>
      <Page {...getPageProps({ key: 7, focused: focusedKey === 7, current: selectedKey === 7 })}>
        7
      </Page>
      <Gap />
      <Page {...getPageProps({ key: 25, focused: focusedKey === 25, current: selectedKey === 25 })}>
        25
      </Page>
      <NextPage
        {...getNextPageProps({
          key: 'next',
          focused: focusedKey === 'next',
          current: selectedKey === 'next'
        })}
      />
    </PaginationView>
  )}
</PaginationContainer>
```
