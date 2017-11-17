# Contributing to the Zendesk Garden React component project

This is a list of things you should consider when creating a pull request:

* Before starting on a new feature, please create an
  [issue](https://github.com/zendeskgarden/react-components/issues) for it, so
  we can discuss it upfront.
* Give the pull request a concise but descriptive title.
* If your pull request is related to a JIRA or Zendesk ticket, a reference to
  the ticket is required. See [Pull Request
  Guidelines](https://zendesk.atlassian.net/wiki/display/ENG/Pull+Request+Guidelines)
  for more information.
* Explain what the changes are meant to accomplish, and perhaps why that thing
  is valuable.
* Make sure that the diff only contains changes that are relevant to the pull
  request. Some changes should be proposed separately, or can be cherry-picked
  directly into master.
* Before asking for a review, check the diff first to make sure there aren't
  obvious problems such as weird indentation or whitespaces.

## Development

### Styleguide

To see all the components and how they are used, boot up the [styleguide](https://zendeskgarden.github.io/react-components):

```
$ yarn start
```

### Testing

You can execute the entire test suite with `yarn test`.

You can run the tests in watch mode with `yarn watch:jest`.

When that tests are running in test mode, you can run the tests of a single file the following way:

```
yarn test:jest ./src/Button/spec.js
```

## Merging

* You *must* have one :+1: in order to merge.
* You are responsible for your code. You merge, you release.
* You can coordinate the release on
[#bastardshq](https://zendesk.slack.com/messages/bastardshq/) or [#garden](https://zendesk.slack.com/messages/garden/).

## Releasing

After merging to master, you should run the following script to create a new release:

```
yarn version <major | minor | patch>
```

This script will take care of everything for you.
