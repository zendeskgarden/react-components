# Versioning

Garden components are distributed as a collection of individual packages
published under the [@zendeskgarden](https://www.npmjs.com/org/zendeskgarden)
namespace. These packages follow [semantic versioning](https://semver.org/).
We publish patch versions for bug fixes, minor versions for new features, and
major versions for any breaking changes. Fixes are released upon approval,
features weekly, and breaking changes once per quarter.

Garden distributes packages under a
[fixed](https://github.com/lerna/lerna#fixedlocked-mode-default) (common
major) version number. Each package may be individually upgraded, but it is
best practice to keep dependencies up-to-date. All versions are recorded in
the [changelog](/CHANGELOG.md) upon release.

While it's feasible to backport bug fixes to previous major versions, this
should be avoided whenever possible. The core Garden team reviews backport
requests on per case basis. Please
[open an issue](https://github.com/zendeskgarden/react-components/issues/new)
with your particular versioning concerns. We will do our best to accommodate
your needs.

## Dependencies

All components require the following shared dependencies:

- `@zendeskgarden/react-theming`
- `react`
- `react-dom`
- `styled-components`

Garden practices good hygiene by keeping internal dependencies up to date,
using a scheduled [Renovate](https://renovatebot.com/) to prevent dependency
decay.
