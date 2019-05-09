# Versioning

Garden follows [semantic versioning](https://semver.org/). We release patch
versions for bug fixes, minor versions for new features, and major versions
for any breaking changes.

Each pull request is titled with a [conventional
commit](https://www.conventionalcommits.org/) message. Together with a
BREAKING CHANGE checkbox, this message determines whether the change will be
part of a patch, minor, or major version. We release patch and minor versions
as they are approved. We limit major versions to once or twice per quarter.

All versions are recorded in the [changelog](CHANGELOG.MD) upon release.

Garden practices good hygiene by keeping dependencies up to date, using a
regularly scheduled [renovate](https://renovatebot.com/) to prevent
dependency decay. We strongly recommend that you do the same.

Having said that, we realize that some Garden version updates require
migration planning. We will establish a reasonable timeline for backporting
bug fixes to previous major versions – easing transition to the current
release. Stay tuned as we work to produce a pragmatic versioning policy. In
the mean time, please contact garden@zendesk.com with your particular
versioning concerns and we will do our best to accommodate your needs.
